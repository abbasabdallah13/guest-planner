import { TextField, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { forgotPasswordAction } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import forgotPasswordImg from '../../assets/forgotPassword.png';
import Navbar from "../navbar/Navbar";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from '../RegisterForm/RegisterForm.jsx'

const PasswordReset = ({loginForm, setLoginForm, registerForm, setRegisterForm}) => {
    const dispatch = useDispatch();

    const { isLoading } = useSelector(state => state.loader)

    const [email, setEmail] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    
    
    const forgotPassword = (e) => {
        e.preventDefault();
        dispatch(forgotPasswordAction(email))
        setEmailSent(true)
    }

  return( 
    <>
            <div style={{overflowY: (loginForm || registerForm) ? 'hidden' : '' }}>
          {
              loginForm && <LoginForm setLoginForm={setLoginForm} setRegisterForm={setRegisterForm}  />
          }
          {
              registerForm && <RegisterForm setLoginForm={setLoginForm} setRegisterForm={setRegisterForm} />
          }
        </div>
    <Navbar setLoginForm={setLoginForm} component={'passwordReset'} />
    <div>
        <form onSubmit={forgotPassword} className="relative top-40 sm:top-16 flex flex-col items-center justify-center sm:h-screen">
            <div className="relative w-full sm:w-full flex justify-center">
                <img src={forgotPasswordImg} className="hidden sm:block w-full sm:max-w-[736px] xl:max-w-[900px] 2xl:max-w-[2000px]" alt="forgot password" />
                        <div className="absolute top-1/4 sm:left-[35%] md:left-[38%] flex flex-col items-center gap-6">
                        {
                           isLoading ? 
                            ( <div className="flex justify-center w-full sm:m-16 md:m-24 lg:m-32 xl:m-40 2xl:m-64"><CircularProgress /></div>) : emailSent ? (
                            <div>
                                <p className="w-full sm:w-60 lg:w-96 2xl:w-[33rem] text-justify px-4 lg:text-lg 2xl:text-4xl 2xl:mt-8">An email was sent successfully. Kindly check your inbox for the reset link.</p>
                                <div className="flex justify-center mt-8">
                                    <button onClick={()=>{setEmailSent(false); setEmail('')}}  className="bg-[#D2E4FF] py-2 px-4 w-fit border-0 cursor-pointer rounded-3xl hover:bg-[#140284] hover:text-white lg:text-xl 2xl:text-5xl 2xl:px-6 2xl:py-4">Go Back</button>
                                </div>
                            </div>
                            ) : (
                                <>
                                    <h1 className="font-normal 2xl:text-7xl">Forgot Password ?</h1>
                                    <p className="w-full sm:w-60 lg:w-96 2xl:w-[33rem] text-justify px-4 lg:text-lg 2xl:text-4xl 2xl:mt-8">Enter your email and you will receive a password reset link if the email you entered is registered on our platform.</p>
                                    <div className="mx-2 lg:mt-4 2xl:mt-8 flex justify-center ">
                                        <TextField 
                                            required='true'
                                            label='Email'
                                            placeholder="Email"
                                            value={email}
                                            InputLabelProps = {{
                                                style: {fontSize: window.innerWidth > 2000 ? '2.4rem' : ''},
                                            }}
                                            inputProps={{
                                                style: {width: window.innerWidth > 2000 ? '33rem' : '', fontSize: window.innerWidth > 2000 ? '3rem' : ''}
                                            }}
                                            onChange={(e)=> setEmail(e.target.value)}
                                            />
                                    </div>
                                    <div className='flex justify-center lg:mt-4 2xl:mt-8'>
                                        <button type="submit" className="bg-[#D2E4FF] py-2 px-4 w-fit border-0 cursor-pointer rounded-3xl hover:bg-[#140284] hover:text-white lg:text-xl 2xl:text-5xl 2xl:px-6 2xl:py-4">Submit</button>
                                    </div>
                                </>
                            )
                        }
                    </div>
            </div>
        </form>
    </div>
    </>
    )
};

export default PasswordReset;
