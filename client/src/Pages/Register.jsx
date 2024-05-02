import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

export const Register=() => {
    const [Name, setName]= useState("");
    const [Password , setPassword]= useState("");
    const [Email ,setEmail] = useState("");


    const HandleClick=(e)=>{
        e.preventDefault();
        axios.post(`http://localhost:3000/register`,{Name, Email , Password})
        .then(result => console.log(result))
        .catch(err=>console.log(err))
    }
    return (
      <div className='m-28'>
          
          <div className="m-4 border-2 mx-96 justify-center bg-purple-300 p-4">
              <h1 className="text-center font-bold text-2xl m-4">Register Here</h1>
              <form onSubmit={HandleClick}>
             <div className="text-center ">
             <label >Username :</label><input type="text" className="border-2 p-1 m-2" onChange={(e)=>{
                setName(e.target.value)
             }}/>
             </div>
             <div className="text-center ">
              <label >Email:</label><input type="email" className="border-2 p-1 m-2" onChange={(e)=>{
                setEmail(e.target.value)
             }}/>
              <div className="text-center ">
              <label >Password :</label><input type="text" className="border-2 p-1 m-2" onChange={(e)=>{
                setPassword(e.target.value)
             }} />
              </div>
              
              </div>
              <div className="text-center m-2">
              <button className="bg-red-400 p-2">Register</button>
              </div>
              </form>
  
              <div className="text-center">
                  <h2 className="font-bold m-2 p-2">Already Register <Link to="Login">Login here</Link></h2>
              </div>
          </div>
      </div>
    )
  }
  