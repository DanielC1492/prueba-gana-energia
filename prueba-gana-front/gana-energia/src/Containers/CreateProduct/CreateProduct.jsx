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
            history.push('/');
        })
    }


    return (
        <div className='addProductContainer'>
            <div className='addProductForm'>
                <div className='productName'>
                    Product name
                    <input placeholder='product name' type='string'  maxLength='50' name="productName" onChange={stateHandler} ></input>
                </div>
                <div className='price'>
                    Price
                    <input placeholder='price' type='string'  maxLength='50' name="price" onChange={stateHandler}></input>
                </div>
                <div className='overview'>
                    Overview
                    <input placeholder='overview' type='string'  maxLength='50' name="overview" onChange={stateHandler}></input>
                </div>
                <button onClick={()=> addProduct()} onChange={stateHandler}>Submit</button>
                
            </div>
            
        </div>
    )
}

export default CreateProduct;
