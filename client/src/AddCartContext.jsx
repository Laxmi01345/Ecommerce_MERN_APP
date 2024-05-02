import { useState , createContext } from "react";

const AddCartContext =createContext();
// eslint-disable-next-line react/prop-types
export const CartProvider= ({children})=>{
    const [cart, setcart] = useState(0);

    return (
        <>

        <AddCartContext.Provider value={{cart, setcart}}>
        {children}
        </AddCartContext.Provider>
        </>
    )
}

export default AddCartContext;