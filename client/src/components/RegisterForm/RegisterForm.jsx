import React from "react";

import { TextField, InputAdornment, createTheme, ThemeProvider } from "@mui/material";
import { PersonOutline, Lock, MailOutline } from '@mui/icons-material';
import { makeStyles } from "@mui/styles";

import moon from '../../assets/moon.png';
import blackClose from '../../assets/closeBlack.png';
import couple from '../../assets/couple.png';
import googleIcon from '../../assets/googleIcon.png';
import loveBirds from '../../assets/lovebirds.png'

import './index.scss'

const LoginForm = ({ setLoginForm, setRegisterForm }) => {

    const styles = makeStyles((theme) => ({
        notchedOutline: {
            borderWidth: '2px',
            borderColor: '#140284'
        },
        cssLabel: {
            color: '#140284'
        },

    }))

    const classes = styles();

  return (
    <div className="register-modal">
        <img className='moon' src={moon} alt='moon' />
        <h1 className="register-title">REGISTER</h1>
        <div style={{display:'flex', position:'absolute', right: '1rem', top:'1rem',alignItems:'center', gap:'.5rem'}}>
            <p className="josephine-sans" style={{fontSize:'.7rem'}}>Back to homepage</p>
            <img style={{ cursor:'pointer', width:'20px', height:'20px'}} onClick={()=>{setLoginForm(false); setRegisterForm(false)}}  src={blackClose} alt='close' />
        </div>
        <div className="register-form-container">
            <p className="josephine-sans already-registered" style={{position:'absolute', right:'1rem', top:'1rem'}}>Already registered ? <a className="login-anchor" onClick={()=> {setLoginForm(true); setRegisterForm(false)}}>Login</a></p>
            <img className="love-birds" src={loveBirds} alt='love birds' />
            <form className="register-form">
                <div className="textfields">
                    <div style={{display:'flex', flexDirection:'column', alignItems:'center', rowGap:'1rem'}}>
                        <TextField 
                            variant="outlined"
                            label='Full Name'
                            InputLabelProps = {{
                                classes: {
                                    root: classes.cssLabel
                                }
                            }}
                            InputProps={{
                                classes: {
                                    notchedOutline: classes.notchedOutline
                                },
                                startAdornment: (
                                <InputAdornment position='start'>
                                    <PersonOutline />
                                </InputAdornment>
                                )
                            }} 
                        />
                        <TextField 
                            label='Email'
                            style={{marginTop:window.innerWidth > 480 ? '3rem' : ''}}
                            InputLabelProps = {{
                                classes: {
                                    root: classes.cssLabel
                                }
                            }}
                            InputProps={{
                                classes: {
                                    notchedOutline: classes.notchedOutline
                                },
                                startAdornment: (
                                <InputAdornment position='start'>
                                    <MailOutline />
                                </InputAdornment>
                                )
                            }} 
                        />                    
                    </div>
                    <div style={{display:'flex', flexDirection:'column', alignItems:'center', rowGap:'1rem'}}>
                    <TextField 
                            label='Password'
                            InputLabelProps = {{
                                classes: {
                                    root: classes.cssLabel
                                }
                            }}
                            InputProps={{
                                classes: {
                                    notchedOutline: classes.notchedOutline
                                },
                                startAdornment: (
                                <InputAdornment position='start'>
                                    <Lock />
                                </InputAdornment>
                                )
                            }} 
                        />
                        <TextField 
                            label='Confirm Password'
                            style={{marginTop:window.innerWidth > 480 ? '3rem' : ''}}
                            InputLabelProps = {{
                                classes: {
                                    root: classes.cssLabel
                                }
                            }}
                            InputProps={{
                                classes: {
                                    notchedOutline: classes.notchedOutline
                                },
                                startAdornment: (
                                <InputAdornment position='start'>
                                    <Lock />
                                </InputAdornment>
                                )
                            }} 
                        />     
                    </div>
                </div>
                <button className="signup-btn">Sign Up</button>
            </form>
        </div>
    </div>
  )
};

export default LoginForm;
