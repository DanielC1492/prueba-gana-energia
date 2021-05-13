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

    const stateHandler = (event) => {
        setRegister({...register, [event.target.name]: event.target.type === "number" ? +event.target.value : event.target.value});
    }

    const registerUser = async () => {
        const res = await axios.post('http://localhost:3006/user/add' , register)
        console.log(res);
        

        return setTimeout(() => {
            history.push('/login');
        })

    }

    const deleteProduct = async () => {
        const res = await axios.delete(`http://localhost:3006/product/${id}` , delete)
        console.log(res);
        

        return setTimeout(() => {
            history.push('/login');
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
                    <input placeholder='User Id...'></input>
                    <button>Delete User!!</button>
                </div>
            </div>
            <div className='bot'>
                <div className='editProduct'>Edit Product
                    <input placeholder='Product Id...'></input>
                    <button>Edit product</button>
                </div>
                <div className='deleteProduct'>Delete Product
                <input placeholder='Product Id...' type={'string'} maxLength='50' name="Product Id" onChange={stateHandler}></input>
                    <button>Delete product</button>
                </div>
            </div>
        </div>
    )
}

export default Home;
