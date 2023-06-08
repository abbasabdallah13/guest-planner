import React, { useState } from "react";

import Navbar from '../components/navbar/Navbar';
import LoginForm from '../components/LoginForm/LoginForm';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PasswordReset from "../components/PasswordReset/PasswordReset";
import ChangePasswordForm from "../components/PasswordReset/ChangePasswordForm";

const Home = ({loginForm, setLoginForm, registerForm, setRegisterForm}) => {


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
      <Navbar setLoginForm={setLoginForm} />
    </>
  )
};

export default Home;
