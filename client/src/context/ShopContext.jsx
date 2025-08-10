import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const [currency, setCurrency] = useState('$');
    const [deliveryFee, setDeliveryFee] = useState(10);
    const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);

    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    // ✅ Add item to cart
    const addToCart = async (itemId) => {
        let cartData = { ...cartItems };
        cartData[itemId] = (cartData[itemId] || 0) + 1; // flat structure
        setCartItems(cartData);

        if (token) {
            try {
                await axios.post(`${backendUrl}/api/cart/add`, { itemId }, { headers: { token } });
            } catch (error) {
                console.error(error);
                toast.error(error.message);
            }
        }
    };

    // ✅ Count items in cart
    const getCartCount = () => {
        return Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);
    };

    // ✅ Update quantity
    const updateQuantity = async (itemId, quantity) => {
        let cartData = { ...cartItems };
        if (quantity > 0) {
            cartData[itemId] = quantity;
        } else {
            delete cartData[itemId];
        }
        setCartItems(cartData);

        if (token) {
            try {
                await axios.post(`${backendUrl}/api/cart/update`, { itemId, quantity }, { headers: { token } });
            } catch (error) {
                console.error(error);
                toast.error(error.message);
            }
        }
    };

    // ✅ Calculate total amount
    const getCartAmount = () => {
        return Object.entries(cartItems).reduce((total, [id, qty]) => {
            const product = products.find((p) => p._id === id);
            return product ? total + product.price * qty : total;
        }, 0);
    };

    // ✅ Fetch products
    const getProductsData = async () => {
        try {
            const response = await axios.get(`${backendUrl}/api/product/list`);
            if (response.data.success) {
                setProducts(response.data.products);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error(error.message);
        }
    };

    // ✅ Fetch user cart from backend
    const getUserCart = async (token) => {
        try {
            const response = await axios.post(`${backendUrl}/api/cart/get`, {}, { headers: { token } });
            if (response.data.success) {
                setCartItems(response.data.cartData);
            }
        } catch (error) {
            console.error(error);
            toast.error(error.message);
        }
    };

    // Load products on mount
    useEffect(() => {
        getProductsData();
    }, []);

    // Load cart if token exists
    useEffect(() => {
        const savedToken = localStorage.getItem('token');
        if (!token && savedToken) {
            setToken(savedToken);
            getUserCart(savedToken);
        }
    }, [token]);

    const value = {
        products,
        currency,
        deliveryFee,
        setCurrency,
        setDeliveryFee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate,
        backendUrl,
        token,
        setToken,
        setCartItems
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
