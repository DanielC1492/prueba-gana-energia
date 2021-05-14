import './Home.css';
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';


const Home = () => {

    const history = useHistory();

    const [register, setRegister] = useState({
        name:'',
        nickname : '',
        email: '',
        password : ''
        
    });

    const [erase, setErase] = useState({
        productId:'',
    });
    
    const [remove, setRemove] = useState({
        userId:''
    });

    const [edit, setEdit] = useState({
        productId:'',
        productName : '',
        productPrice: '',
        productOverview : ''
        
    });
    

    const stateHandler = (event) => {
        setRegister({...register, [event.target.name]: event.target.type === "number" ? +event.target.value : event.target.value});
    }

    const handlingState = (event) => {
        setErase({...erase ,[event.target.name]: event.target.type === "number" ? +event.target.value : event.target.value});
    }

    const userState = (event) => {
        setRemove({...remove ,[event.target.name]: event.target.type === "number" ? +event.target.value : event.target.value});
    }

    const productState = (event) => {
        setEdit({...edit ,[event.target.name]: event.target.type === "number" ? +event.target.value : event.target.value});
    }

    const registerUser = async () => {
        const res = await axios.post('http://localhost:3006/user/add' , register)
        console.log(res);
        

        return setTimeout(() => {
            history.push('/login');
        })

    }

    const deleteUser = async ({user}) => {
        const id = user._id;
        const res = await axios.delete(`http://localhost:3006/user/${id}`, remove)
        console.log(res);
        

        return setTimeout(() => {
            history.push('/login');
        })

    }

    const editProduct = async ({product}) => {
        const idProduct = product._id;
        const res = await axios.delete(`http://localhost:3006/product/${idProduct}`, edit)
        console.log(res);
        

        return setTimeout(() => {
            history.push('/');
        })

    }

    const deleteProduct = async ({product}) => {
        const productId = product._id;
        const res = await axios.delete(`http://localhost:3006/product/${productId}`, erase)
        console.log(res);
        

        return setTimeout(() => {
            history.push('/');
        })

    }


    return ( 
        <div className='homeContainer'>
            <div className='top'>
                
                <div className='register'>Register
                    <input placeholder='name' type='string'  maxLength='50' name="name" onChange={stateHandler}></input>
                    <input placeholder='nickname' type='string'  maxLength='50' name="nickname" onChange={stateHandler}></input>
                    <input placeholder='email' type='email'  maxLength='50' name="email" onChange={stateHandler}></input>
                    <input placeholder='password' type='password'  maxLength='50' name="password" onChange={stateHandler}></input>
                    <button onClick={()=> registerUser()}>Submit</button>
                </div>
                <div className='deleteUser'>Delete User
                    <input placeholder='User Id...'type={'string'} maxLength='50' name='User Id' onChange={userState}></input>
                    <button onClick={()=> deleteUser()}>Delete User!!</button>
                </div>
            </div>
            <div className='bot'>
                <div className='editProduct'>Edit Product
                    <input placeholder='Product Id...' type={'string'} maxLength='50' name='ProductId' onChange={productState}></input>
                    <input placeholder='Product Name...' type={'string'} maxLength='50' name='ProductName' onChange={productState}></input>
                    <input placeholder='Product price...' type={'string'} maxLength='50' name='ProductPrice' onChange={productState}></input>
                    <input placeholder='Product overview...' type={'string'} maxLength='50' name='ProductOverview' onChange={productState}></input>
                    <button onClick={()=> editProduct()}>Edit product</button>
                </div>
                <div className='deleteProduct'>Delete Product
                <input placeholder='Product Id...' type={'string'} maxLength='50' name="Product Id" onChange={handlingState}></input>
                    <button onClick={()=> deleteProduct()}>Delete product</button>
                </div>
            </div>
        </div>
    )
}

export default Home;
