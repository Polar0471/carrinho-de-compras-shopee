
// ações que o carrinho pode fazer
// adicionar um item
// remover um item
// deletar um item
// calcular total

// CASOS DE USO
// -> adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item)
}

// -> deletar item do carrinho
async function deleteItem(userCart, name) {
    // findIndex vai percorrer item a item
    const index = userCart.findIndex((item) => item.name === name)

    if (index !== -1) {
        userCart.splice(index, 1)
    }
}

// -> remover um item - diminui um item
async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name)

    if (indexFound == -1) {
        console.log("item não encontrado")
        return
    }

    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1
        return 
    }

    if (userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1)
        return 
    }
}

async function displayCart(userCart) {
    console.log("\nShopee cart list:")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | Quantity: ${item.quantity} | Subtotal: ${item.subtotal()}`)
    })
}

// -> calcular o total do carrinho
async function calculateTotal(userCart) {
    console.log("\nShopee cart TOTAL IS:")
    const result = await userCart.reduce((total, item) => total + item.subtotal(), 0) 
    console.log(`🛒 Total: ${result}`)
}

export {
    addItem, 
    deleteItem,
    removeItem,
    calculateTotal, 
    displayCart
}