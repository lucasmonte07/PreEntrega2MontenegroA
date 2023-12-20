import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import NavBar from "../NavBar/NavBar";
import Category from "../../pages/Category";
import ItemDetailContainer from "../../pages/ItemDetailContainer";


/**
 * @elementh es donde irá la pagina donde daremos click 
 * @path en el home de la web siempre va "/""   
*/

const MainRouter = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/category/:id" element={<Category/>} />
                <Route path="/item/:id" element={<ItemDetailContainer/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRouter;