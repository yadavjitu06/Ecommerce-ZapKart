import {Routes,Route }from'react-router-dom';
import Home from '../components/Pages/Home/Home';
import Error from '../components/Pages/Error/Error';
import ProductList from '../components/Pages/ProductList/ProductList';
import ProductDetails from '../components/Pages/ProductDetails/ProductDetails';



function MainRoutes(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<ProductList/>}/>
            <Route path="/productDetails/:id" element={<ProductDetails/>}/>
            <Route path="*"  element={<Error/>} />
        </Routes>
        </>
        
    )
}
export default MainRoutes;