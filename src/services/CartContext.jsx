import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const isntInCart = (receivedItem) => cart.filter(cartItem => cartItem.id === receivedItem.id).length == 0;

    const addToCart = (receivedItem) => {
        if (isntInCart(receivedItem)) {
            setCart([...cart, receivedItem]);
        } else {
            alert('Este Item ya esta en el Carrito');
        }
    }

    const removeFromCart = (receivedItem) => {
        let allItemsExceptRemoved = cart.filter(cartItem => cartItem.id !== receivedItem.id);
        setCart(allItemsExceptRemoved);
    }

    const clearCart = () => setCart([]);

    const totalCart = () => {
        return cart.reduce( (acc, cartItem) => acc + (cartItem.price * cartItem.quantity), 0)
    }

    const quantityCart = () => {
        return cart.reduce( (acc, cartItem) => acc + cartItem.quantity, 0)
    }

    return (
        <>
            <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalCart, quantityCart, isntInCart }}>
                {children}
            </CartContext.Provider>
        </>
    );

};
