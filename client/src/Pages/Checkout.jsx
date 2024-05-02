import { useState, useEffect } from "react";
import { useContext } from "react"
import { AiFillDelete } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GiHumanTarget } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import GetCardContext from "../Pages/GetCartContext";


const Checkout = () => {
  const [quantities, setQuantities] = useState({});
  const { products, setproducts } = useContext(GetCardContext);
  const [totalItems, setTotalItems] = useState(0);
  const [totalprice, setTotalPrice] = useState(0);
  const [custEmail, setCustEmail] = useState("");
  const [showEmail, setShowemail] = useState(false);
  const [Name ,setName] = useState("");
  const [Ph ,setPh] = useState("");
  const [City ,setCity] = useState("");
  const [Address ,setAddress] = useState("");
  const [det, setdetails] = useState(false);
  const [pay, setpayment] = useState("");
  const [handle, sethandle] = useState(false);
  
  const Handlename = (e) => {
    setName(e.target.value);
  }
  const Handlepn = (e) => {
    setPh(e.target.value);
  }
  const HandleAdd = (e) => {
    setAddress(e.target.value);
  }
  const HandleCity = (e) => {
    setCity(e.target.value);
  }

  const handleCustomersEmail = (e) => {
    setCustEmail(e.target.value);
  }

  const handleButtonClick = () => {
    setShowemail(true);
  }


  const HandleDetails=()=>{
    
    
    setdetails(true);
    
  }
  const Editfunc =()=>{
    setCustEmail("");
    setShowemail(false);
  }
  const handleDelete = (index) => {
    setproducts((prevProducts) => {
      const updatedProducts = prevProducts.filter((_, idx) => idx !== index);
      return updatedProducts;
    });
  }
const handlepayment=(e)=>{
  setpayment(e.target.value)
}

 const Handlepayprint=()=>{
  sethandle(true);
 }


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
    <div className="m-28 grid grid-flow-row-dense grid-cols-2 bg-red-200 p-10">
      <div >
        <div className="p-4  bg-white rounded-md m-2">
          <div className="flex ">
          <label className="font-light text-sm m-1"> 01 </label> <h1 className="font-bold text-xl"> Customer</h1> 
          <MdEdit  className="ml-80  "size={20} onClick={Editfunc}/>
          </div>  
          <div>
            {!showEmail  && (
              <input
                type="email"
                name=""
                id=""
                className="border-2 m-2"
                placeholder="Email Address"
                onChange={handleCustomersEmail}
              />
            )}
            {showEmail  &&
              <>
                <div className="flex">
                <MdEmail className="m-2"/> 
                <p className=" p-1 "> {custEmail} </p>
                </div>
              </>}
          </div>
          {!showEmail && (
            <button
              className="bg-green-400 m-2 rounded p-2 text-black"
              onClick={handleButtonClick}
            >
              Continue as Guest
            </button>
          )}
        </div>
        <div className="p-4 bg-white rounded-md m-2">
          <div className="flex">
          <label className="font-light text-sm m-1"> 02 </label><h1 className="font-bold text-xl"> Shipping</h1>
          
          </div>
          <div className="m-2">
           {!det && (
            <>
            <input type="text " className="border-2 m-2"  placeholder="Full name " onChange={Handlename}/> 
             <input type="text m-2" className="border-2 m-2"  placeholder="Phone number"  onChange={Handlepn} />
             <input type="text m-2" className="border-2 m-2"  placeholder="City"  onChange={HandleCity}/>
             <input type="text m-2" className="border-2 m-2 w-96"  placeholder="Address"  onChange={HandleAdd}/>
             
             <input type="text m-2" className="border-2 m-2"  placeholder="State" /></>
           )
           }

            <div>
            {
              det && <>
              <div>
               <div className=" flex  "> <label><GiHumanTarget className="m-2"/></label><h1 className="p-1">{Name}</h1></div>
                <div className="flex"><label ><FaPhoneAlt className="m-2" /></label ><h1 className="p-1">{Ph}</h1></div>
                <div className="flex"><label><FaMapMarkerAlt className="m-2" /></label><h1 className="p-1">{Address} {City}</h1></div>
                
              </div>
              </>
            }
            {!det && (
              <button
              className="bg-green-400 p-2 m-2 rounded" onClick={HandleDetails}
              
            >
              Save and Continue
            </button>
            )}

           
            </div>
            
          </div>
        </div>
        <div className="p-4 bg-white rounded-md m-2">
          <div className="flex ">
          <label className="font-light text-sm m-1"> 03 </label><h1 className="font-bold text-xl"> Payment</h1>
         
          </div>
          {!handle && (
              <input type="text" placeholder="Enter your Card Number " className="border-2" onChange={handlepayment}/>

          )}
          {handle && (
            <>
            <div className="m-2">
            <p className="">Your Card number is : XXXX-XXXX-XXXX</p>
            <p className="">Payment received: {new Date().toLocaleString()}</p>
            </div>


            </>
          )}
         {!handle && (
           <button
           className="bg-green-400 p-2 m-2 rounded" 
           onClick={Handlepayprint}
         >
           Save and Continue
         </button>
         )}
        </div>
      </div>
      <div className=" text-center font-bold bg-white rounded-md m-2">
        <h1 className="text-xl p-4">Summary</h1>
        <div className=' bg-purple-100 mx-10 p-2 text-center '>

          {products.map((product, index) => (
            <div key={index} className='bg-white grid grid-flow-row-dense grid-cols-4 h-max  m-2'>
              <div className='m-1  p-4 bg-white'>
                <img className='w-20 h-20 border-white mx-auto' src={`https://${product.api_featured_image}`} alt="" />
              </div>
              <div className="text-left p-2 mt-5 ">
                <h1 className='capitalize '>{product.brand}</h1>
                <h1 className='capitalize'>{product.name}</h1>
              </div>
              <div className="mt-10">
                <p className='font-serif '>Price : $ {product.price}</p>

              </div>
              <div className="mt-10 mr-2 ">
                <button className='text-white hover:border-2 border-white' onClick={() => { handleDelete(index) }}><AiFillDelete className="text-black" /></button>
              </div>

            </div>

          ))}
          <div className="mx-10 bg-white-400 font-bold ">

            <div className="  m-2 font-bold flex">

              <h1 className="text-left mr-14">Total Items :</h1>
              <h1 className="text-end ml-60">{totalItems}</h1>

            </div>
            <div className="  m-2 font-bold flex">
              <h1 className="text-left mr-10">Total To Pay :</h1>
              <h1 className="text-end ml-56">$ {totalprice.toFixed(2)} </h1>
            </div>
            <button className=" p-2 m-2 bg-orange-400"><Link to="/Thank">Place Your Order</Link></button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Checkout
