import { useState , createContext } from "react";

const WishlistContext =createContext();
// eslint-disable-next-line react/prop-types
export const WishlistProvider= ({children})=>{
    const [Cnt ,setCnt]= useState(0);

    return (
        <>

        <AddCartContext.Provider value={{Cnt ,setCnt}}>
        {children}
        </AddCartContext.Provider>
        </>
    )
}

export default WishlistContext;