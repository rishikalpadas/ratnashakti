const { createContext } = require("react");

export const ShopContext = createContext();

const ShopContextProvider = () =>{
    const value = {

    }
    return (
        <ShopContext.Provider  value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
