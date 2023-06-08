import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { TextField, InputAdornment, Input, IconButton, Button, Icon } from "@mui/material";
import { PersonOutline, Lock, VisibilityOff, Visibility } from '@mui/icons-material';

import { GoogleLogin } from '@react-oauth/google';

import flowersArch from '../../assets/flowersArch.png';
import blackClose from '../../assets/closeBlack.png';
import couple from '../../assets/couple.png';
import googleIcon from '../../assets/googleIcon.png';

import './index.scss'
import { loginAction } from "../../actions/userActions";
import { createOrGetUser } from "../../utils/utils";

const LoginForm = ({ setLoginForm, setRegisterForm }) => {
  const dispatch = useDispatch();

  const { loginErrorMessage } = useSelector(state => state.user);

  const [userInfo, setUserInfo] = useState({email:'', password: ''});
  const [showPassword, setShowPassword] = useState(false);

  const login = (e) => {
    e.preventDefault();
    dispatch(loginAction({userInfo}))
  }

  const googleSuccess = async (res) => {
    const decoded = createOrGetUser(res);
    const { family_name, given_name, picture , email, sub } = await decoded;
    console.log(decoded)

}

const googleFailure = (error) => {
    console.log(error)
    console.log('google sign in was unsuccessful. try again later.')
}
  
  return (
    <div className="login-modal">
        <img className='flowers-arch' src={flowersArch} alt='flowers arch' />
        <div style={{display:'flex', position:'absolute', right: '1rem', top:'1rem',alignItems:'center', gap:'.5rem'}}>
            <p className="josephine-sans back-to-homepage" >Back to homepage</p>
            <img className="close" onClick={()=>setLoginForm(false)}  src={blackClose} alt='close' />
        </div>
        <div className="login-form-container">
            <p className="josephine-sans already-registered">New User ? <a className="register-anchor" onClick={()=> {setLoginForm(false); setRegisterForm(true)}}>Register</a></p>
            <div className="login-form">
                <img className="couple-img"  src={couple} alt='couple' />
                <form className="login-form-right-side" onSubmit={login}>
                    <h1 className="welcome-back">Welcome Back</h1>
                    <p style={{textAlign:'center', color:'red', fontFamily:'Josephine Sans'}}>{loginErrorMessage}</p>
                    <TextField 
                        required='true'
                        variant="outlined"
                        className="textfield"
                        placeholder="Email"
                        value={userInfo.email}
                        onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                        label='Email'
                        InputLabelProps={{style: {fontSize: window.innerWidth > 2000 ? '2rem' : '1rem'}}} 
                        InputProps={{
                            style: {fontSize: window.innerWidth > 2000 ? '3rem' : ''},
                            startAdornment: (
                              <InputAdornment position='start'>
                                <PersonOutline style={{fontSize: window.innerWidth > 2000 ? '3rem' : ''}}  />
                              </InputAdornment>
                            ),
                            endAdornment: <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() => setShowPassword((prev) => !prev)}
                              style={{opacity:'0'}}
                              disabled={true}
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>                          
                          </InputAdornment>,
                        }}
                        />
                   <TextField 
                        required='true'
                        label='Password'
                        variant="outlined"
                        placeholder="Password"
                        className="textfield"
                        value={userInfo.password}
                        onChange={(e) => setUserInfo({...userInfo, password: e.target.value})}
                        type={showPassword ? 'text' : 'password'}
                        InputLabelProps={{style: {fontSize: window.innerWidth > 2000 ? '2rem' : '1rem'}}} 
                        InputProps={{
                          endAdornment: <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() => setShowPassword((prev) => !prev)}
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>                          
                          </InputAdornment>,
                          style: {fontSize: window.innerWidth > 2000 ? '3rem' : ''},
                            startAdornment: (
                              <InputAdornment position='start'>
                                <Lock style={{fontSize: window.innerWidth > 2000 ? '3rem' : ''}} />
                              </InputAdornment>
                            )
                        }}
                        />     
                    <div style={{display:'flex', gap:'2rem', alignItems:'center'}}>
                        <button className="login-modal-btn" type="submit">Login</button>
                        <a className="forgot-password josephine-sans" href="/passwordReset">Forgot Password</a>
                    </div>               
                    <div style={{display:'flex', alignItems:'center', gap:'1rem'}}>
                            <GoogleLogin 
                                    render={(renderProps) => (
                                        <button 
                                            style={{borderRadius:'50%', backgroundColor: 'transparent', border:'0px', cursor:'pointer'}}
                                            onClick={renderProps.onClick} 
                                            disabled={renderProps.disabled} 
                                            startIcon={<Icon />} 
                                            variant='contained'
                                            >
                                               <img className="google-icon" src={googleIcon} alt='google sign in' />
                                            </button>
                                    )}
                                    onSuccess={googleSuccess}
                                    onError={googleFailure}
                                    cookiePolicy="single_host_origin"
                                />
                    </div>    
                </form>
            </div>
        </div>
    </div>
  )
};

export default LoginForm;
