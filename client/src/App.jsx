import React, { useState } from "react";

import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'

import Home from "./containers/Home";
import PasswordReset from "./components/PasswordReset/PasswordReset";
import ChangePasswordForm from "./components/PasswordReset/ChangePasswordForm";
import { GoogleOAuthProvider } from "@react-oauth/google";


const App = () => {
  const [loginForm, setLoginForm] = useState(false);
  const [registerForm, setRegisterForm] = useState(false);

  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId="488880517746-iv72h8ctd7krc7cr76k596t048e5fhff.apps.googleusercontent.com">
        <div style={{overflowY: (loginForm || registerForm) && 'hidden', height: (loginForm || registerForm) && '100vh'}}>
          <Routes>
            <Route path='/' exact element={<Home setLoginForm={setLoginForm} loginForm={loginForm} setRegisterForm={setRegisterForm} registerForm={registerForm}/>} />
            <Route path="/passwordReset" exact element={<PasswordReset setLoginForm={setLoginForm} loginForm={loginForm} setRegisterForm={setRegisterForm} registerForm={registerForm} />} />
            <Route path="/updatePassword" exact element={ <ChangePasswordForm setLoginForm={setLoginForm} loginForm={loginForm} setRegisterForm={setRegisterForm} registerForm={registerForm}  /> } />
          </Routes>
        </div>
      </GoogleOAuthProvider>
    </BrowserRouter>
  )
};

export default App;
