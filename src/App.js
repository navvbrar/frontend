import logo from './logo.svg';
import './App.css';


import Signup from './components/Signup';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Login from './components/Login';
import Productitem from './components/productitem';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Productstate from './context/Productstate';
import Products from './components/Products';
import Productdetails from './components/Productdetails';
import Profilepage from './components/Profilepage';
import Cart from './components/Cart';
import Spinner from './components/Spinner';
import Loadinbar from './components/Loadinbar';
import "./size.css"
import Search from './components/Search';
import Searchall from './components/Searchall';
import Filter from './components/Filter';
import Home2 from './components/Home2';
import Home3 from './components/Home3';
import Checkout from './components/Checkout';
import Success from './components/Success';
import Addproductpage from './components/Addproductpage';
import Adminpage from './components/Adminpage';
import Recoverpassword from './components/Recoverpassword';
import Showorders from './components/showorders.js';

import Login_signup from './components/Login_signup.js';

function App() {
  return (
     <Productstate>
    <BrowserRouter>
    <Loadinbar/>
  
    
    
    <Routes>

    <Route path="/home" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/details" element={<Productdetails/>} />
    <Route path="/profile" element={<Profilepage/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/search" element={<Searchall/>} />
    <Route path="/" element={<Home3/>} />
    <Route path="/checkout" element={<Checkout/>} />
    <Route path="/thankyou" element={<Success/>} />
    <Route path ="/addproduct" element={<Addproductpage/>}/>
    <Route path ="/adminpage" element={<Adminpage/>}/>
    <Route path ="/recoverpass" element={<Recoverpassword/>}/>
    <Route path="/orders" element ={<Showorders/>}/>
    <Route path="/loginsignup" element ={<Login_signup/>}/>
    

    </Routes>
    
    
    </BrowserRouter>
    </Productstate>

   
  )
}

export default App;
