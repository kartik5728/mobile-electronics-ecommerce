import { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { products as shopProducts } from "../assets/products/products";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = "$";
    const delivery_fee = 10;
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId, quantity) => {
        if (!quantity) {
            console.error('Select Product Quantity');
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][quantity]) {
                cartData[itemId][quantity] += 1;
            } else {
                cartData[itemId][quantity] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][quantity] = 1;
        }

        setCartItems(cartData);
        // console.log(cartData);
    }



    useEffect(() => {
        setProducts(shopProducts);
    }, [])

    const value = {
        products, currency, delivery_fee, addToCart, cartItems
    }
    
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;