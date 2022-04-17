import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
const SignUp = () => {
    const[email,setEmail]=useState(''); 
    const[password,setPassword]=useState('');
    const[confirmPassword,setConfirmPassword]=useState('');
    const[error,setError]=useState('');

    const [createUserWithEmailAndPassword]=useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur=event=>{
        setEmail(event.target.value)
    }

    const handlePasswordBlur=event=>{
        setPassword(event.target.value)
    }

    const handleConfirmPassword=event=>{
        setConfirmPassword(event.target.value)
    }

    const handleCreateUser=event=>{
        event.preventDefault();
        
        if(password !== confirmPassword){
            setError("Your Two passwords didn't match")
            return;
        }
        createUserWithEmailAndPassword(email,password);
    }

    return (
        <div className='form-container'>
            <h2>sign up</h2>
            
            <form onSubmit={handleCreateUser}>
                <div className='input-group'>
                   <label htmlFor="email">Email</label>
                   <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
                </div>
                <div className='input-group'>
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
                </div>
                <div className='input-group'>
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input onBlur={handleConfirmPassword} type="password" name="confirm-password" id="" required/>
                </div>
                <p>{error}</p>
                <input className="form-submit" type="submit" value="Sign Up" />
            </form>
            <p>Already have an account?<Link to="/login">Login</Link></p>
        </div>
    );
};

export default SignUp;