
// import we from '../images/We.png'
import maybelline from '../images/maybelline.png'
import Additioal from './Additioal'
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import loreal from '../images/loreal.png'
import lipstick from '../images/lipstick.png'
import powder from '../images/powder.png'
import nail from '../images/nail-polish.png'
import mascara from '../images/mascara.png'
import pencil from '../images/pencil.png'
import bronzer from '../images/bronzer.png'
import eyeliner from '../images/eyeliner.png'
import blush from '../images/blush.png'
import covergirl from '../images/covergirl.jpg'
import ui from '../images/ui.png'
import { FaLinkedin } from "react-icons/fa";
import Categories from './Categories'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Homepage = ({ searchFilter, setSearchFilter }) => {

  const [check, setCheck] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);


  return searchFilter ? (
    <Categories searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
  ) : (
    <div className='  m-4'>

      <div className='justify-center flex m-28'>
        <div className='m-10'>
          <h2 className='text-5xl p-4 capitalize font-extrabold'>Unlock the secrets to <br /> radiant skin.</h2>
          <p className='capitalize p-2 m-4 font-normal'> We are here to provide best beauty products,<br /> which help you to be real you !</p>
          <div className='mx-40'>
            <button className='bg-pink-600 text-white  p-2 m-3 hover:font-bold '><Link to='Categories'>Shop Now</Link> </button>
          </div>

        </div>
        <div>
          <img src={ui} className='h-96 w-96' alt="" />
        </div>

      </div>

      <div className='m-10 bg-red-300 rounded-lg '>
        <h2 className='text-3xl p-2 text-center capitalize font-bold'>Best Sellers</h2>


        <div className='bg-red-200 '>
          <Additioal />
        </div>


      </div>
      <div className=' m-10 '>

        <div className='  border-black  h-fit p-6'>
          <h2 className='text-3xl p-4 text-center capitalize font-bold'>Choose Your Products </h2>

          <div className='grid mx-28 grid-cols-4 '>
            <div className='m-4 rounded-full '><img className='rounded-full   h-48 p-2 bg-yellow-100 block transform hover:scale-105 hover:shadow-2xl transition delay-50 duration-300 ease-in-out' src={lipstick} alt="" />
              <p className='font-bold  mx-16'>Lipstick</p></div>
            <div className='m-4 '><img className='rounded-full  h-48 p-5 bg-yellow-100 block transform hover:scale-105 hover:shadow-2xl transition delay-50 duration-300 ease-in-out' src={powder} alt="" />
              <p className='font-bold  mx-16'>Foundation</p></div>
            <div className='m-4'><img className='rounded-full  h-48 p-2 bg-yellow-100 block transform hover:scale-105 hover:shadow-2xl transition delay-50 duration-300 ease-in-out' src={nail} alt="" />
              <p className='font-bold  mx-16'>Nail Polish</p></div>
            <div className='m-4'><img className='rounded-full  h-48 p-2 bg-yellow-100 block transform hover:scale-105 hover:shadow-2xl transition delay-50 duration-300 ease-in-out' src={mascara} alt="" />
              <p className='font-bold  mx-16'>Mascara</p></div>
            <div className='m-4'><img className='rounded-full h-48 p-2 bg-yellow-100 block transform hover:scale-105 hover:shadow-2xl transition delay-50 duration-300 ease-in-out' src={bronzer} alt="" />
              <p className='font-bold  mx-16'>Bronzer</p></div>
            <div className='m-4'><img className='rounded-full  h-48 p-5 bg-yellow-100 block transform hover:scale-105 hover:shadow-2xl transition delay-50 duration-300 ease-in-out' src={pencil} alt="" />
              <p className='font-bold  mx-16'>Lip Liner</p></div>
            <div className='m-4'><img className='rounded-full  h-48 p-2 bg-yellow-100 block transform hover:scale-105 hover:shadow-2xl transition delay-50 duration-300 ease-in-out' src={blush} alt="" />
              <p className='font-bold  mx-16'>Blush</p></div>
            <div className='m-4'><img className='rounded-full  h-48 p-2 bg-yellow-100 block transform hover:scale-105 hover:shadow-2xl transition delay-50 duration-300 ease-in-out' src={eyeliner} alt="" />
              <p className='font-bold  mx-16'>Eye Liner</p></div>
          </div>
        </div>
      </div>
      <div className=' m-10  bg-red-100 '>
        <h2 className='text-3xl p-4 text-center capitalize font-bold'>Top Brands </h2>

        <div className='flex mx-20 '>
          <div className='h-fit m-2 object-cover rounded-md w-fit p-2 relative block transform hover:scale-105 hover:shadow-2xl transition delay-50 duration-300 ease-in-out' onMouseOver={() => setCheck(true)} onMouseLeave={() => setCheck(false)}>
            <img src={maybelline} className="h-80 w-96 " alt="" />
            {check && (
              <>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className=" bg-red-400 px-4 py-2 rounded-md">
                    <p className="text-black  font-bold">Check Out</p>
                  </button>
                </div>
              </>
            )}
          </div>

          <div className='h-fit m-2 object-cover rounded-md w-fit p-2 relative block transform hover:scale-105 hover:shadow-2xl transition delay-50 duration-300 ease-in-out' onMouseOver={() => setCheck1(true)} onMouseLeave={() => setCheck1(false)}>
            <img src={loreal} className="h-80 w-96 " alt="" />
            {check1 && (
              <>
                <div className="absolute inset-0 flex items-center justify-center ">
                  <button className=" bg-red-400 px-4 py-2 rounded-md">
                    <p className="text-black  font-bold">Check Out</p>
                  </button>
                </div>
              </>
            )}
          </div>

          <div className='h-fit m-2 object-cover rounded-md w-fit p-2 relative block transform hover:scale-105 hover:shadow-2xl transition delay-50 duration-300 ease-in-out' onMouseOver={() => setCheck2(true)} onMouseLeave={() => setCheck2(false)}>
            <img src={covergirl} className="h-80 w-96 " alt="" />
            {check2 && (
              <>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className=" bg-red-400 px-4 py-2 rounded-md">
                    <p className="text-black  font-bold">Check Out</p>
                  </button>
                </div>
              </>
            )}
          </div>



        </div>
      </div>


      <footer className='bg-black text-white'>
        <div className='grid '>
          <div className='flex justify-between bg-pink-400'>
            <h1 className='p-4'>Get Connected with us in Social Networks</h1>
            <div className='flex m-4'>
              <FaLinkedin className='m-2' />
              <FaGithub className='m-2' />
              <FaTwitter className='m-2' />
              <FaGoogle className='m-2' />
            </div>
          </div>
          <div className='flex'>
            <div className='m-2 mx-52 w-52 text-center'>
              <h1 className='p-2 text-xl'>Blossom</h1>
              <p className='font-light'>We Are Here To Provide Best Beauty Products,<br />
                Which Help You To Be Real You !</p>
            </div>
            <div className='m-2 mx-42 w-52 '>
              <h1 className='p-2 text-xl' >Products</h1>
              <p className='font-light'>Makeup Kit</p>
              <p className='font-light'>Foundation Pack</p>
              <p className='font-light'>Lipstick Shades</p>

            </div>
            <div className='m-2 mx-48 w-52'>
              <h1 className='p-2 text-xl'>Contact</h1>
              <p className='font-light'>India IN 10010 MH</p>
              <p className='font-light'>Foundation Pack</p>
              <p className='font-light'>info12@gmail.com</p>
              <p className='font-light'>+91-4354-4354</p>
            </div>
          </div >
          <h1 className='m-2 p-2 text-center'>© 2024 - Laxmi Ray</h1>

        </div>
      </footer>
    </div>
  )
}

export default Homepage

