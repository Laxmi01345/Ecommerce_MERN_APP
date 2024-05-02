import { useState, useEffect } from 'react';
import Price from '../Components/Navbar/Price'
import Brands from '../Components/Navbar/Brands';
import Category from '../Components/Navbar/Category';
// import Homepage from './Homepage';
import { FaHeart } from "react-icons/fa6";

import { useContext } from 'react';
import ProductContext from '../ProductContext';
import { Link } from 'react-router-dom';
const Categories = ({ searchFilter, setSearchFilter }) => {

  const [Choicebrand, setChoicebrand] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);

  const [Countheart , setCountheart] = useState(false);

  const selectBrand = Choicebrand ? `brand=${Choicebrand}` : "";
  const requestFilter = searchFilter ? `product_type=${searchFilter}` : "";
  const priceFilter = selectedPriceRange ? `price=${selectedPriceRange}` : ""; // Changed Price to priceFilter
  const queryString = `${selectBrand}${selectBrand && requestFilter ? '&' : ''}${requestFilter}${priceFilter ? '&' : ''}${priceFilter}`; // Added priceFilter
  
  // Construct the full API URL
  const apiurl = `http://localhost:3000/products${queryString ? `?${queryString}` : ''}`;



  console.log(apiurl)
  const { Products, setProducts } = useContext(ProductContext);

  const fetchinfo = async () => {
    try {
      const response = await fetch(apiurl);
      const data = await response.json();
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchinfo();
  }, [searchFilter, Choicebrand ,selectedPriceRange ])

  const handleHeart = () => {
    setCountheart(true);
  }

  const handlePriceSelection = (price) => {
    setSelectedPriceRange(price);
  };

  

  // }
  // const Filterprice = () => {
  //   const price = "$1 - $5";
  //   const [lower, upper] = price.split(' - ').map(parseFloat);

  //   const [selectedLower, selectedUpper] = selectedPrice.split(' - ').map(parseFloat);

  //   console.log(selectedLower, selectedUpper)
  //   return lower >= selectedLower && upper <= selectedUpper;

  // }


  return (


    <div className='grid grid-flow-row-dense grid-cols-4 h-max mx-10 m-28 bg-fixed'>

      <div className=' bg-red-200 h-fit'>
      
        <Brands setChoicebrand={setChoicebrand} />
        <Price handlePriceSelection={handlePriceSelection} />
        <Category setSearchFilter={setSearchFilter} />

      </div>


      <div className=' col-span-3 grid grid-flow-row-dense grid-cols-3 gap-2 bg-red-200 mx-10 '>

        {Products
        .map(product => {
          
          return (
            <>
              <div key={product.id} className='m-5 p-4 bg-white h-96 rounded-2xl text-center block transform hover:scale-105 hover:shadow-2xl transition delay-50 duration-300 ease-in-out mx-10 w-64'>
                <Link to={`/GetDetails/${product.id}/${product.name}/${product.brand}`}>
                  <img className='w-30 h-40 border-white mx-auto ' src={`https://${product.api_featured_image}`} alt="" />
                  <div className='m-4'>
                    <h2 className=' font-bold text-xl'>{product.name}</h2>
                    <p className='text-orange-700'>{product.brand}</p>
                    <p>${product.price}</p>
                    <FaHeart className='mx-40' style={{ color: Countheart ? 'text-red-400' : 'text-white' }} onClick={handleHeart}/>


                  </div>
                </Link>
                




              </div>
            </>
          )

        })}
      </div>
    </div>
  )
}

export default Categories
