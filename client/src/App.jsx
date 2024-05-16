import { useState } from 'react'
import Homepage from './Pages/Homepage.jsx';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Categories from './Pages/Categories.jsx';
import Review from './Pages/Review.jsx';
import Additioal from './Pages/Additioal.jsx';
import Getdetails from './Pages/Getdetails.jsx';
import {ProductProvider} from './ProductContext.jsx'
import { CartProvider } from './AddCartContext.jsx';
import { WishlistProvider } from './Pages/WishlistContext.jsx';
import AddCart from './Components/AddCart.jsx';
import { GetCartProvider } from './Pages/GetCartContext.jsx';
import Category from './Components/Navbar/Category.jsx';
import Checkout from './Pages/Checkout.jsx';
import { Thank } from './Pages/Thank.jsx';
import { Login } from './Pages/Login.jsx';
import { Register } from './Pages/Register.jsx';
function App() {
  const [searchFilter, setSearchFilter] = useState("");
 const [Cart,setCart] =useState(0);
  return (
    <BrowserRouter>
    <ProductProvider>
      <CartProvider>
        <GetCartProvider>
      <Navbar setSearchFilter={setSearchFilter} size={Cart} />
      
      <Routes>
        <Route path='/' element={<Homepage searchFilter={searchFilter} setSearchFilter={setSearchFilter} />}/>
        <Route path='Categories' element={<Categories searchFilter={searchFilter} setSearchFilter={setSearchFilter} />}/>
        <Route path='/Review' element={<Review/>}></Route>
        <Route path='/Categories/GetDetails' element={<Getdetails setcart={setCart} />} />
        <Route path='/GetDetails/:productId' element={<Getdetails setcart={setCart}  />} />
        <Route path='/GetDetails/:productId/:productcateg' element={<Getdetails setcart={setCart} />} />
        <Route path='/GetDetails/:productId/:productcateg/:productbrand' element={<Getdetails  setcart={setCart}/>} />
        <Route path='AddCart' element={<AddCart />}></Route>
        <Route path='Additioal' element={<Additioal />}></Route>
        <Route path='categoryfilter' element={<Category />}></Route>
        <Route path='Checkout' element={<Checkout />}></Route>
        <Route path='Thank' element={<Thank />}></Route>
        <Route path='login' element={<Login />}></Route>
        
        <Route path='Register' element={<Register/>}></Route>
        
      </Routes>
      </GetCartProvider>
      </CartProvider>
      </ProductProvider>
    </BrowserRouter>
  )
}

export default App
