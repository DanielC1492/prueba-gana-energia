import React, { useState, useEffect } from 'react';
import './ShowProducts.css';
import axios from 'axios';

const ShowProducts = (product) => {

    

    const [products,setProducts] = useState([]);



    const productsView = async (product) => {
        const res = await axios.get(`http://localhost:3006/product/all`, product)
        console.log(res);
        setProducts(res.data)

    }

    useEffect(() => {
        productsView();
    },[]);




    return (
        <div className='showProductContainer'>
            
                {products?.map((product, index) => {
                            return (
                                <div className='productContainer' key={index}>
                                    <div className='productName' key={index}>Product Name : {product.name}</div>
                                    <div className='productPrice' key={index}>Product Price : {product.price}</div>
                                    <div className='productOverview' key={index}>Product Overview: {product.overview}</div>
                                </div>
                            )
                        
                        })}
            
        </div>
    )
}

export default ShowProducts;
