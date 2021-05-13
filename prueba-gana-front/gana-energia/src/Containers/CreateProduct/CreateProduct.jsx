import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import './CreateProduct.css';

const CreateProduct = () => {

    const history = useHistory();

    const [product, setProduct] = useState({
        productName : '',
        price : '',
        overview: ''
        
    });

    const stateHandler = (event) => {
        setProduct({...product, [event.target.name]: event.target.type === "number" ? +event.target.value : event.target.value});
    }

    const addProduct = async () =>{
        const res = await axios.post('http://localhost:3006/product/add' , product)
        console.log(res);
        

        return setTimeout(() => {
            history.pushState('/');
        })
    }


    return (
        <div className='addProductContainer'>
            <div className='addProductForm'>
                <div className='productName'>
                    Product name
                    <input></input>
                </div>
                <div className='price'>
                    Price
                    <input></input>
                </div>
                <div className='overview'>
                    Overview
                    <input></input>
                </div>
                <button onClick={()=> addProduct()} onChange={stateHandler}>Submit</button>
                
            </div>
            
        </div>
    )
}

export default CreateProduct;
