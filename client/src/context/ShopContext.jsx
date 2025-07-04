import React, { createContext, useEffect, useState } from 'react';
// This file creates a context for the shop, providing products, currency, and delivery fee.
import {products} from '../assets/assets'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const ShopContext = createContext();

const ShopContextProvider = (props) =>{
    const [currency, setCurrency] = useState('$');
    const [deliveryFee, setDeliveryFee] = useState(10);
    const [search,setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);

    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = async(itemId,size) => {
        if(!size){
            toast.error('Please select a size before adding to cart');
            return;
        }
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1;
            }else{
                cartData[itemId][size] = 1;
            }
        }
        else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems){
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item] > 0){
                        totalCount += cartItems[items][item];
                    }
                }catch(error){

                }
            }
            return totalCount;
        }
    }

    const updateQuantity = async(itemId,size,quantity) =>{
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);
    }

    const getCartAmount = () =>{
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product)=>product._id === items);
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item] > 0){
                        totalAmount += itemInfo.price * cartItems[items][item]


                    }
                } catch(error){
                    
                }
            }
        }
        return totalAmount;
    }

    // useEffect(() => {
    //     console.log('Cart Items Updated:', cartItems);
    // }, [cartItems]);

    const value = {
        products, currency, deliveryFee, setCurrency, setDeliveryFee, search, setSearch, showSearch, setShowSearch, cartItems,  addToCart, getCartCount, updateQuantity,getCartAmount,navigate
       }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;
