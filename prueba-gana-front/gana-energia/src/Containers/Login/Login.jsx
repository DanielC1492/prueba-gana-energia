import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import './Login.css';
import axios from 'axios';

const Login = () => {

    const history = useHistory();

    const [user, setUser] = useState({
        nickname : '',
        password : ''
        
    });

    const stateHandler = (event) => {
        setUser({...user, [event.target.name]: event.target.type === "number" ? +event.target.value : event.target.value});
    }

    const sendData = async () => {
        const res = await axios.post('http://localhost:3006/user/login' , user)
        console.log(res);
        

        return setTimeout(() => {
            history.push('/createproduct');
        })

    }


    return (
        <div className='loginContainer'>
            <div className='loginForm'>
                <div className='nickname'>
                    Nickname
                    <input type='string'  maxLength='50' placeholder="" name="password" onChange={stateHandler}></input>

                </div>
                <div className='password'>
                    Password
                    <input type={'password'} className='passInput' maxLength='50' placeholder="" name="password" onChange={stateHandler}></input>               
                </div>
                <button className='submit' onClick={()=> sendData()}>Submit</button>
            </div>
        </div>
    )
}

export default Login;
