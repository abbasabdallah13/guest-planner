import { Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, CircularProgress, IconButton, InputAdornment, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { updatePasswordAction } from "../../actions/userActions";
import Navbar from "../navbar/Navbar";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from '../RegisterForm/RegisterForm.jsx'
import check from '../../assets/check.png'

const ChangePasswordForm = ({loginForm, setLoginForm, registerForm, setRegisterForm}) => {
    const dispatch = useDispatch();

    const { isLoading } = useSelector(state => state.loader);
    const { updatePasswordErrorMessage } = useSelector(state => state.user)
    const { passUpdatedUser } = useSelector(state => state.user)

    const [passwords, setPasswords] = useState({password:'', confirmPassword:''});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

    function useQuery() {
        return new URLSearchParams(useLocation().search)
    }
    const query = useQuery()
    const id = query.get('userId');

    const updatePassword = (e) => {
        e.preventDefault();
        dispatch(updatePasswordAction(id,{ passwords }))

    }
    
  return (
    <>
        <div style={{overflowY: (loginForm || registerForm) ? 'hidden' : '' }}>
          {
              loginForm && <LoginForm setLoginForm={setLoginForm} setRegisterForm={setRegisterForm}  />
          }
          {
              registerForm && <RegisterForm setLoginForm={setLoginForm} setRegisterForm={setRegisterForm} />
          }
        </div>
    <Navbar setLoginForm={setLoginForm} component={'updatePassword'}   />
            <form onSubmit={updatePassword} className="relative top-24 lg:top-36 xl:top-52 flex flex-col items-center">
                <h1 className="text-center font-normal 2xl:text-7xl">Reset Account Password</h1>
            {
                 Object.keys(passUpdatedUser).length > 0 ? (
                    <div className="flex flex-col items-center px-4">
                        <p className="mt-4">You have successfully updated the password for {passUpdatedUser.email}</p>
                        <img src={check} alt='check' className="w-10 h-8 mt-4"   /> 
                    </div>

                ) : !isLoading ? (
                    <>
                      <p className="mt-2 text-red-500">{updatePasswordErrorMessage}</p>
                      <p className="text-[#808080] mt-4 lg:text-lg 2xl:text-4xl">Enter a new password for your account</p>
                        <div className="mt-4 sm:mt-8  px-4">
                            <TextField 
                                label='Password'
                                required='true'
                                placeholder="Password"
                                type={showPassword ? 'text' : 'password'}
                                onChange={(e)=>setPasswords({...passwords,password:e.target.value})}
                                value={passwords.password}
                                InputLabelProps = {{
                                    style: {fontSize: window.innerWidth > 2000 ? '2.5rem' : window.innerWidth > 1250 ? '2rem' : window.innerWidth > 1024 ? '1.5rem' : ''},
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
                                                {showPassword ? <VisibilityOff style={{fontSize: window.innerWidth > 2000 ? '3rem' : ''}} /> : <Visibility style={{fontSize: window.innerWidth > 2000 ? '3rem' : ''}} />}
                                            </IconButton>
                                        </InputAdornment>,
                                        style: {fontSize: window.innerWidth > 2000 ? '3rem': window.innerWidth > 1250 ? '2.2rem' : window.innerWidth > 1024 ? '1.5rem' : ''},
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
                        <div className="mt-4 sm:mt-8 px-4">
                                            <TextField 
                                                required='true'
                                                label='Confirm Password'
                                                type={showConfirmPassword ? 'text' : 'password'}
                                                placeholder="Confirm Password"
                                                onChange={(e)=>setPasswords({...passwords, confirmPassword:e.target.value})}
                                                value={passwords.confirmPassword}
                                                InputLabelProps = {{
                                                    style: {fontSize: window.innerWidth > 2000 ? '2.5rem' : window.innerWidth > 1250 ? '2rem' : window.innerWidth > 1024 ? '1.5rem' : ''},
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
                                                            {showConfirmPassword ? <VisibilityOff style={{fontSize: window.innerWidth > 2000 ? '3rem' : ''}} /> : <Visibility style={{fontSize: window.innerWidth > 2000 ? '3rem' : ''}} />}
                                                        </IconButton>
                                                        </InputAdornment>
                                                    ,
                                                    style: {fontSize: window.innerWidth > 2000 ? '3rem': window.innerWidth > 1250 ? '2.2rem' : window.innerWidth > 1024 ? '1.5rem' : ''},
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
                        <div className="flex justify-center mt-4">
                            <Button variant="outlined" style={{fontSize: window.innerWidth > 2000 ? '2rem' : window.innerWidth > 1024 ? '1.3rem' :  ''}} type='submit'>Update</Button>       
                        </div>
                    </>
                ) : (
                    <div><CircularProgress /></div>
                )
            }
            </form>
    </>
  )
}

export default ChangePasswordForm;
