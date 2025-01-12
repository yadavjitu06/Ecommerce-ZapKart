import {Routes,Route }from'react-router-dom';
import Home from '../components/Pages/Home/Home';
import Error from '../components/Pages/Error/Error';
import ProductList from '../components/Pages/ProductList/ProductList';
import ProductDetails from '../components/Pages/ProductDetails/ProductDetails';
 
import Login from '../components/Pages/Authentication/Login';
import Signup from '../components/Pages/Authentication/SignUp';



function MainRoutes(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
           
            <Route path="*" element={<Error />}/>
        </Routes>
        </>
        
    )
}
export default MainRoutes;