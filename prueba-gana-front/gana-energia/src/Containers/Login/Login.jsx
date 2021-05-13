import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='loginContainer'>
            <div className='loginForm'>
                <div className='nickname'>
                    Nickname
                    <input></input>
                </div>
                <div className='password'>
                    Password
                    <input type='password'></input>
                </div>
            </div>
        </div>
    )
}

export default Login;
