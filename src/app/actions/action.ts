import { simpleProduct } from "@/interface"



export const addToCart=(product : simpleProduct) => {
    const cart:simpleProduct[] = JSON.parse(localStorage.getItem('cart') || '[]')

    const existingProductIndex = cart.findIndex(item => item._id === product._id)
    if(existingProductIndex > -1) {
        cart[existingProductIndex].inventory += 1
    }
    else {
        cart.push({
            ...product, inventory: 1
        })
    }
    localStorage.setItem('cart', JSON.stringify(cart))
};


export const removeFromCart = (productId: string) => {
    let cart :simpleProduct[] = JSON.parse(localStorage.getItem('cart') || '[]')
    cart = cart.filter(item => item._id != productId)
    localStorage.setItem('cart', JSON.stringify(cart))
};

export const updateCartQuantity = (productId:string, quantity: number) => {
    const cart : simpleProduct[] = JSON.parse(localStorage.getItem('cart') || '[]')
    const productIndex = cart.findIndex(item => item._id === productId)
    if(productIndex > -1){
        cart[productIndex].inventory = quantity
        localStorage.setItem('cart', JSON.stringify(cart))
    }
};

export const getCartItems = () => {
    return JSON.parse(localStorage.getItem('cart')|| '[]')
}