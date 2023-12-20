import { useEffect } from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import UseProducts from "../hooks/UseProducts";


const Home = () => {

    const {productsData} = UseProducts();

    useEffect (() => {
        document.title = "My - Ecommerce ";
    },[])

    return (
        <ItemListContainer productsData={productsData} />
    )
}

export default Home;