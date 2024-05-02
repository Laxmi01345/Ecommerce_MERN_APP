import { useState,useEffect } from "react";
import { useContext } from "react"
import { Link } from 'react-router-dom';
import GetCardContext from "../Pages/GetCartContext";

const AddCart = () => {
  const [quantities, setQuantities] = useState({});
  const { products ,setproducts} = useContext(GetCardContext);
  const [totalItems, setTotalItems] = useState(0);
  const [totalprice , setTotalPrice] = useState(0);
  
  const handleDelete = (index) => {
    setproducts((prevProducts) => {
      const updatedProducts = prevProducts.filter((_, idx) => idx !== index);
      return updatedProducts;
    });
  }
  
  const IncrementCartItem = (productId, increment) => {
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      const newQuantity = (newQuantities[productId] || 0) + increment;
      if (newQuantity >= 1) { // Ensure quantity doesn't go negative
        newQuantities[productId] = newQuantity;
        return newQuantities;
      }
      return prevQuantities; // If quantity goes negative, revert back to previous state
    });
  };
  
  
  useEffect(() => {
    const newQuantities = {};
    products.forEach((product) => {
     
      newQuantities[product.id] = 1;
      
       
    });
    setQuantities(newQuantities);
  }, [products]);

  useEffect(() => {
    let totalPrice = 0;
    products.forEach((product) => {
      const quantity = quantities[product.id] || 0;
      totalPrice += product.price * quantity;
    });
    setTotalPrice(totalPrice);
  }, [products, quantities]);
  

  
  useEffect(() => {
    let totalCount = 0;
    Object.values(quantities).forEach((quantity) => {
      totalCount += quantity;
      
    });
    setTotalItems(totalCount);
    
  }, [quantities]);

  return (
    <div className=' bg-red-200 mx-20 p-2 text-center m-40'>
      <h1 className="text-3xl font-mono p-4 mx-10 font-extrabold ">My Cart</h1>
      {products.map((product, index) => (
        <div key={index} className='bg-white grid grid-flow-row-dense grid-cols-3 h-max mx-10 m-2'>
          <div className='m-1  p-4 bg-white'>
            <img className='w-30 h-40 border-white mx-auto' src={`https://${product.api_featured_image}`} alt="" />
          </div>
          <div className="text-left p-2 mt-5 mx-20">
            <h1 className='text-2xl capitalize font-bold'>{product.brand}</h1>
            <h1 className='text-2xl capitalize'>{product.name}</h1>
            <div className="border-2 w-44 m-2">
              <button className='p-2 w-14 text-2xl hover:bg-slate-100 ' onClick={() => IncrementCartItem(product.id, -1)}>-</button>
              <input type="text" className='w-14  text-2xl p-3 justify-center text-center  border-black' value={quantities[product.id] || 0}  />
              <button className='w-14  p-2 text-2xl hover:bg-slate-100' onClick={() => IncrementCartItem(product.id, 1)}>+</button>
            </div>
          </div>
          <div className="mt-20">
            <p className='font-serif text-xl font-bold'>Price : $ {product.price}</p>
            <button className='mx-auto m-4 bg-red-600 p-2 text-white text-xl hover:border-2 border-white' onClick={()=>{handleDelete(index)}}>Remove</button>
          </div>
          
        </div>
        
      ))}
      <div className="mx-10 bg-white-400 text-2xl font-bold ">
            
            <div className="mx-20 text-end m-2">
            <h1>Total Price : $  {totalprice.toFixed(2)}  </h1>
            <h1 className="font-light">Total Items : {totalItems}</h1>
            <button className="bg-purple-600 p-2 m-2 rounded border-2 text-white  hover:border-4 border-purple-600 "><Link to="/Checkout">Checkout</Link></button>
            </div>
          </div>
    </div>
  )
}

export default AddCart
