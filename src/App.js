import React, { useEffect, useState } from 'react';
import { Navbar, Products } from "./components";
import { commerce } from './lib/commerce';

const App = () => {
    const [products,setProducts] = useState([])

    const fetchProduct = async () =>{
        const {data} = await commerce.products.list();

        setProducts(data);
    }
    
    useEffect(()=>{
        fetchProduct();
    }, []);
console.log(products)
    
    return (
        <div>
            <Products/>
            <Navbar/>
        </div>
    )
}

 export default App;