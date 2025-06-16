import React, { createContext, useState } from 'react';
// This file creates a context for the shop, providing products, currency, and delivery fee.
import {products} from '../assets/assets'

export const ShopContext = createContext();

const ShopContextProvider = (props) =>{
    const [currency, setCurrency] = useState('$');
    const [deliveryFee, setDeliveryFee] = useState(10);

    const value = {
        products, currency, deliveryFee, setCurrency, setDeliveryFee
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
