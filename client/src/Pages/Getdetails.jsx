import { useState, useContext } from 'react'

import ProductContext from '../ProductContext';
import { useParams } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import GetCardContext from './GetCartContext';

// eslint-disable-next-line react/prop-types
const Getdetails = ({ setcart }) => {

  const { Products } = useContext(ProductContext);
  const [Incremented, setIncrement] = useState(1)
  const { productId } = useParams();
  const { productbrand } = useParams();
  const { productcateg } = useParams();
  const { setproducts, products } = useContext(GetCardContext)

  const [Time, setTime] = useState(false);

  let product = Products.find((product) => product.id === Number(productId));

  const handleAddToCart = (newProduct) => {
    setTime(true)
    setTimeout(function () {
      setTime(false).fadeOut('slow');
    }, 2000);
    const productExists = products.some((product) => product.id === newProduct.id);



    if (!productExists) {
      // If the product is not in the cart, add it
      setproducts([...products, newProduct]);

      // Increment the cart count
      setcart((prevCount) => prevCount + 1);





    }
  }
  const recommendedProducts = Products.filter(
    (product) => product.name === productcateg || product.brand === productbrand
  );
  const Increment = () => {
    setIncrement(Incremented + 1);
  }
  const Decrement = () => {
    if (Incremented > 1) {
      setIncrement(Incremented - 1);
    }

  }
  return (
    <>
      <div className='flex justify-end mx-20 m-20 '>
        {Time ? <p className='bg-black text-white w-40 text-center rounded-md'>Added to the Cart !!</p> : ""
        }
      </div>
      <div className=' border-2 bg-red-200 border-red-200 mx-20 '>

        <div className='m-16 flex mx-20 p-8 bg-white'>
          <div className=' border-8 w-42 mx-20'>
            <img src={`https://${product.api_featured_image}`} className=' h-72 m-2 border-2 w-64 ' alt="" />
          </div>

          <div className='m-1  p-4 bg-white'>

            {product ? (
              <div>
                <h1 className='text-3xl capitalize font-bold font-serif'>{product.brand}</h1>
                <h1 className='text-2xl capitalize '>{product.name}</h1>
                <br />

                <p className='text-xl font-serif flex'>
                  Rating :
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} style={{ color: index < product.rating ? 'yellow' : 'gray' }} />
                  ))}
                </p>


                <p className='font-serif text-xl'>Price : $ {product.price}</p>
                <p className='text-xl '>Quantity : {Incremented} </p>

                <br />


              </div>
            ) : (
              <p>Product not found.</p>
            )}




            <div className='flex'>
              <div className='border-2  border-black w-44'>
                <button className='p-2 w-14 text-2xl hover:bg-slate-100' onClick={Decrement}>-</button>
                <input type="text" className='w-14  text-2xl p-3 justify-center text-center  border-black' value={Incremented} />
                <button className='w-14  p-2 text-2xl hover:bg-slate-100' onClick={Increment}>+</button>
              </div>

              <button className=' mx-8 w-56 bg-red-600 p-2 text-white text-xl hover:border-2 border-white font-bold' onClick={() => handleAddToCart(product)} >Add To Cart</button></div>
          </div>

        </div>

        <div className=' m-16 mx-20 p-8 bg-white'>
          <div>
            <h2 className='text-center text-3xl font-bold p-2 mt-1'>Description</h2>
          </div>
          <p className='text-xl font-normal'>{product.description}</p>
          <div>
            <p>
            </p>
          </div>


        </div>
        <div className='m-16 mx-20 p-8 bg-red-200'>
          <h2 className='text-center text-3xl font-bold p-2 mt-1'>Recommendation</h2>

          <div className='grid grid-cols-4 gap-4'>

            {recommendedProducts.length > 0 ? (
              <> {/* Use React.Fragment for multiple elements */}
                {recommendedProducts.map((recommendedProduct) => (

                  <div key={recommendedProduct.id} className='m-5 p-4 bg-white h-80 rounded-2xl text-center block transform hover:scale-105 hover:shadow-2xl transition delay-50 duration-300 ease-in-out w-56 mx-10'>
                    
                    <div><img className='  m-2 w-30 h-40 mx-auto ' src={`https://${recommendedProduct.api_featured_image}`} alt="" />
                      <div className='m-4  bg-white '>
                        <h2 className=' font-bold'>{recommendedProduct.name}</h2>
                        <p className='text-orange-700'>{recommendedProduct.brand}</p>
                        <p>${product.price}</p>

                      </div>
                      
                    </div>
                   
                  </div>
                ))}
              </>
            ) : (
              <p>No recommendations found.</p>
            )}

          </div>


        </div>

      </div>
    </>
  )
}

export default Getdetails
