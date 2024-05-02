import { Link } from "react-router-dom"
import { Register } from "./Register"
export const Login=() => {
  return (
    <div className='m-28'>
        
        <div className="m-4 border-2 mx-96 justify-center bg-purple-300 p-4">
            <h1 className="text-center font-bold text-2xl m-4">Login Here</h1>
           <div className="text-center ">
           <label >Username :</label><input type="text" className="border-2 p-1 m-2"/>
           </div>
           <div className="text-center ">
            <label >Email  :</label><input type="text" className="border-2 p-1 m-2" />
            </div>
            <div className="text-center ">
            <label >Password :</label><input type="text" className="border-2 p-1 m-2" />
            </div>
            <div className="text-center m-2">
            <button className="bg-red-400 p-2"><Link to="/">Login</Link></button>
            </div>

            <div className="text-center">
                <h2 className="font-bold m-2 p-2">Don't have Account <Link to="Register">Register here !!</Link></h2>
            </div>
        </div>
    </div>
  )
}
