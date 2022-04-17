import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const[email,setEmail]=useState(''); 
    const[password,setPassword]=useState('');

    const[signInWithEmailAndPassword,user,
        loading,
        error,]=useSignInWithEmailAndPassword(auth);

    const navigate=useNavigate()

    const handleEmailBlur=event=>{
        setEmail(event.target.value)
    }

    const handlePasswordBlur=event=>{
        setPassword(event.target.value)
    }

    if(user){
        navigate('/inventory')
    }
     const handleUserSignIn=event=>{
         event.preventDefault();

         signInWithEmailAndPassword(email,password)
     }
    return (
        <div className='form-container'>
            <h1>Login</h1>
            <form onSubmit={handleUserSignIn}>
                <div className='input-group'>
                   <label htmlFor="email">Email</label>
                   <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
                </div>
                <div className='input-group'>
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
                </div>
                <p>{error?.message}</p>
                <input className="form-submit"  type="submit" value="Login" />
               
            </form>
            <p>Are you New?<Link to="/signup">Create an account</Link></p>
           {
               loading && <p>Loading...</p>
           }
        </div>
    );
};

export default Login;