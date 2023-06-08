import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux"; 

import { TextField, InputAdornment, createTheme, ThemeProvider, IconButton, OutlinedInput } from "@mui/material";
import { PersonOutline, Lock, MailOutline, VisibilityOff, Visibility } from '@mui/icons-material';
import { makeStyles } from "@mui/styles";

import moon from '../../assets/moon.png';
import blackClose from '../../assets/closeBlack.png';
import loveBirds from '../../assets/lovebirds.png'

import './index.scss'
import { createUser } from "../../actions/userActions";

const LoginForm = ({ setLoginForm, setRegisterForm }) => {

    const styles = makeStyles((theme) => ({
        notchedOutline: {
            borderWidth: '2px',
            borderColor: '#140284'
        },
        cssLabel: {
            color: '#140284',
        },

    }))

    const classes = styles();

    const dispatch = useDispatch()
    const { signupErrorMessage } = useSelector(state => state.user)

    const [userInfo, setUserInfo] = useState({fullName:'', email:'', password:'', confirmPassword:''});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    
    
    
    const register = (e) => {
        e.preventDefault();
        dispatch(createUser({userInfo}))
    }
        

  return (
    <div className="register-modal">
        <img className='moon' src={moon} alt='moon' />
        <h1 className="register-title">REGISTER</h1>
        <div style={{display:'flex', position:'absolute', right: '1rem', top:'1rem',alignItems:'center', gap:'.5rem'}}>
            <p className="josephine-sans back-to-homepage">Back to homepage</p>
            <img className="close" onClick={()=>{setLoginForm(false); setRegisterForm(false)}}  src={blackClose} alt='close' />
        </div>
        <div className="register-form-container">
            <p className="josephine-sans already-registered">Already registered ? <a className="login-anchor" onClick={()=> {setLoginForm(true); setRegisterForm(false)}}>Login</a></p>
            <img className="love-birds" src={loveBirds} alt='love birds' />
            <form className="register-form" onSubmit={register} >
                <div className="textfields">
                    <div className="textfields-container">
                        <TextField 
                            required='true'
                            variant="outlined"
                            placeholder="Full Name"
                            label='Full Name'
                            onChange={(e)=>setUserInfo({...userInfo,fullName:e.target.value})}
                            value={userInfo.fullName}
                            InputLabelProps = {{
                                style: {fontSize: window.innerWidth > 2000 ? '2.5rem' : window.innerWidth > 1250 ? '2rem' : ''},
                                classes: {
                                    root: classes.cssLabel
                                }
                            }}
                            InputProps={{
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
                                style: {fontSize: window.innerWidth > 2000 ? '3rem': window.innerWidth > 1250 ? '2.2rem' : ''},
                                classes: {
                                    notchedOutline: classes.notchedOutline
                                },
                                startAdornment: (
                                <InputAdornment position='start'>
                                    <PersonOutline style={{fontSize: window.innerWidth > 2000 ? '3rem' : ''}} />
                                </InputAdornment>
                                )
                            }} 
                        />
                        <TextField 
                            required='true'
                            label='Email'
                            placeholder="Email"
                            style={{marginTop:window.innerWidth > 480 ? '3rem' : ''}}
                            onChange={(e)=>setUserInfo({...userInfo,email:e.target.value})}
                            value={userInfo.email}
                            InputLabelProps = {{
                                style: {fontSize: window.innerWidth > 2000 ? '2.5rem' : window.innerWidth > 1250 ? '2rem' : ''},
                                classes: {
                                    root: classes.cssLabel
                                }
                            }}
                            InputProps={{
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
                                style: {fontSize: window.innerWidth > 2000 ? '3rem': window.innerWidth > 1250 ? '2.2rem' : ''},
                                classes: {
                                    notchedOutline: classes.notchedOutline
                                },
                                startAdornment: (
                                <InputAdornment position='start'>
                                    <MailOutline style={{fontSize: window.innerWidth > 2000 ? '3rem' : ''}} />
                                </InputAdornment>
                                )
                            }} 
                        />                    
                    </div>
                    <div className="textfields-container">
                    <TextField 
                            label='Password'
                            required='true'
                            placeholder="Password"
                            type={showPassword ? 'text' : 'password'}
                            onChange={(e)=>setUserInfo({...userInfo,password:e.target.value})}
                            value={userInfo.password}
                 
                            InputLabelProps = {{
                                style: {fontSize: window.innerWidth > 2000 ? '2.5rem' : window.innerWidth > 1250 ? '2rem' : ''},
                                classes: {
                                    root: classes.cssLabel
                                }
                            }}
                            InputProps={{
                                endAdornment: 
                                    <InputAdornment position="end">
                                      <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowPassword((prev) => !prev)}
                                      >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                      </IconButton>
                                    </InputAdornment>
                                ,
                                style: {fontSize: window.innerWidth > 2000 ? '3rem': window.innerWidth > 1250 ? '2.2rem' : ''},
                                classes: {
                                    notchedOutline: classes.notchedOutline
                                },
                                startAdornment: (
                                <InputAdornment position='start'>
                                    <Lock style={{fontSize: window.innerWidth > 2000 ? '3rem' : ''}} />
                                </InputAdornment>
                                )
                            }} 
                        />
                        <TextField 
                            required='true'
                            label='Confirm Password'
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder="Confirm Password"
                            style={{marginTop:window.innerWidth > 480 ? '3rem' : ''}}
                            onChange={(e)=>setUserInfo({...userInfo, confirmPassword:e.target.value})}
                            value={userInfo.confirmPassword}
                            InputLabelProps = {{
                                style: {fontSize: window.innerWidth > 2000 ? '2.5rem' : window.innerWidth > 1250 ? '2rem' : ''},
                                classes: {
                                    root: classes.cssLabel
                                }
                            }}
                            InputProps={{
                                endAdornment: 
                                    <InputAdornment position="end">
                                      <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                                      >
                                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                      </IconButton>
                                    </InputAdornment>
                                ,
                                style: {fontSize: window.innerWidth > 2000 ? '3rem': window.innerWidth > 1250 ? '2.2rem' : ''},
                                classes: {
                                    notchedOutline: classes.notchedOutline
                                },
                                startAdornment: (
                                <InputAdornment position='start'>
                                    <Lock style={{fontSize: window.innerWidth > 2000 ? '3rem' : ''}} />
                                </InputAdornment>
                                )
                            }} 
                        />     
                    </div>
                </div>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <p style={{marginBottom:'1rem', color:'red', padding:'.3rem .6rem', fontFamily: 'Josephine Sans'}}>{signupErrorMessage}</p>
                    <button className="signup-btn">Sign Up</button>
                </div>
            </form>
        </div>
    </div>
  )
};

export default LoginForm;
