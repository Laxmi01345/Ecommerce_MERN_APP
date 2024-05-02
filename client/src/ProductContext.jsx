import  { createContext } from 'react'
import { useState } from 'react';
const ProductContext = createContext();
// eslint-disable-next-line react/prop-types
export const ProductProvider = ({children}) => {
    const [Products, setProducts] = useState([]); 
  return (
    <ProductContext.Provider value={{Products, setProducts}}>
        {children}
    </ProductContext.Provider>
  );
};
export default ProductContext;
