import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Navbar = ({ setSearchFilter , size }) => {
   
    const [search, setSearch] = useState("");
    
    const handlesearch = (event) => {
        const searchParam = event.target.value;
        setSearch(searchParam);
        setSearchFilter(searchParam);
    };

    return (
        <div className="m-0 border-2 border-ink-400 ">
            <div className=' flex  space-x-20  p-4 bg-pink-400  fixed w-full z-50'>

                <img src={logo} className='w-40 h-10' alt="" />
                <ul className=' p-2 flex space-x-8 font-mono font-bold border-slate-950 m-0.5'>
                    <li className='hover:text-white'><Link to="/">Home</Link></li>
                    <li className='hover:text-white'><Link to="/Categories">Categories</Link></li>
                </ul>
                <div className=' rounded-md flex  p-1.5 bg-white hover:border-black border-2 mr-40'>
                    <FaSearch className='m-1 ' />
                    <input type="text" className='outline-none ml-0.5 ' placeholder="Search Products" value={search}
                        onChange={handlesearch}  />
                </div>
                

                <div className='flex '>
                    <h3 className='font-mono font-bold space-x-8 m-2 mr-20'></h3>

                    <button className='flex font-mono font-bold bg-black m-2 rounded-sm p-1 hover:bg-violet-500 text-white mr-5'>Login</button>
                   
                    <FaHeart className='m-2  text-orange-800 ' size={24} />
                    <Link to="/AddCart"><FaShoppingCart className='m-2'size={24}/></Link><sup className=' h-2 p-2 bg-white mb-2 rounded-full mr-5'>{size}</sup>
                </div>

            </div>

            
           
            
        </div>
        
    )
}

export default Navbar
