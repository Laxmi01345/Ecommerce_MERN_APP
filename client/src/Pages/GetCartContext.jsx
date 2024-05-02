import { useState , createContext } from "react";

const GetCardContext =createContext();
// eslint-disable-next-line react/prop-types
export const GetCartProvider= ({children})=>{
    let [products ,setproducts] = useState([])
  

    return (
        <>

        <GetCardContext.Provider value={{products ,setproducts}}>
        {children}
        </GetCardContext.Provider>
        </>
    )
}

export default GetCardContext;