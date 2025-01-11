import {Routes,Route }from'react-router-dom';
import Home from '../components/Pages/Home/Home';
import Error from '../components/Pages/Error/Error';



function MainRoutes(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="*"  element={<Error/>} />
        </Routes>
        </>
        
    )
}
export default MainRoutes;