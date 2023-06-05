import React, { useEffect } from "react";

import { TextField, InputAdornment } from "@mui/material";
import { PersonOutline, Lock } from '@mui/icons-material';

import flowersArch from '../../assets/flowersArch.png';
import blackClose from '../../assets/closeBlack.png';
import couple from '../../assets/couple.png';
import googleIcon from '../../assets/googleIcon.png';

import './index.scss'

const LoginForm = ({ setLoginForm, setRegisterForm }) => {
  useEffect(() => {
    console.log(window.innerWidth);
  }, []);
  
  return (
    <div className="login-modal">
        <img className='flowers-arch' src={flowersArch} alt='flowers arch' />
        <div style={{display:'flex', position:'absolute', right: '1rem', top:'1rem',alignItems:'center', gap:'.5rem'}}>
            <p className="josephine-sans" style={{fontSize:'.7rem'}}>Back to homepage</p>
            <img style={{ cursor:'pointer', width:'20px', height:'20px'}} onClick={()=>setLoginForm(false)}  src={blackClose} alt='close' />
        </div>
        <div className="login-form-container">
            <p className="josephine-sans" style={{position:'absolute', right:'1rem', top:'1rem'}}>New User ? <a className="register-anchor" onClick={()=> {setLoginForm(false); setRegisterForm(true)}}>Register</a></p>
            <div className="login-form">
                <img className="couple-img"  src={couple} alt='couple' />
                <div className="login-form-right-side">
                    <h1 className="welcome-back">Welcome Back</h1>
                    <TextField 
                        variant="outlined"
                        className="textfield"
                        placeholder="Email"
                        label='Email'
                        InputLabelProps={{style: {fontSize: window.innerWidth > 2000 ? '2rem' : '1rem'}}} 
                        InputProps={{
                            style: {fontSize: window.innerWidth > 2000 ? '3rem' : ''},
                            startAdornment: (
                              <InputAdornment position='start'>
                                <PersonOutline style={{fontSize: window.innerWidth > 2000 ? '3rem' : ''}}  />
                              </InputAdornment>
                            )
                        }}
                        />
                   <TextField 
                        label='Password'
                        variant="outlined"
                        placeholder="Password"
                        className="textfield"
                        type="password"
                        InputLabelProps={{style: {fontSize: window.innerWidth > 2000 ? '2rem' : '1rem'}}} 
                        InputProps={{
                          style: {fontSize: window.innerWidth > 2000 ? '3rem' : ''},
                            startAdornment: (
                              <InputAdornment position='start'>
                                <Lock style={{fontSize: window.innerWidth > 2000 ? '3rem' : ''}} />
                              </InputAdornment>
                            )
                        }}
                        />     
                    <div style={{display:'flex', gap:'2rem', alignItems:'center'}}>
                        <button className="login-modal-btn"  type="submit">Login</button>
                        <a className="forgot-password josephine-sans" href="#">Forgot Password</a>
                    </div>               
                    <div style={{display:'flex', alignItems:'center', gap:'1rem'}}>
                        <p className="login-with  josephine-sans">Login with</p>
                        <button style={{borderRadius:'50%', backgroundColor: 'transparent', border:'0px', cursor:'pointer'}}>
                            <img className="google-icon" src={googleIcon} alt='google sign in' />
                        </button>
                    </div>    
                </div>
            </div>
        </div>
    </div>
  )
};

export default LoginForm;
