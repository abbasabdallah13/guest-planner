import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import RegisterForm from "./components/RegisterForm/RegisterForm"
import LoginForm from "./components/LoginForm/LoginForm";

const App = () => {
    const [loginForm, setLoginForm] = useState(false);
    const [registerForm, setRegisterForm] = useState(false);
    

  return (
    <div style={{overflowY: (loginForm || registerForm) ? 'hidden' : '' }}>
        {
            loginForm && <LoginForm setLoginForm={setLoginForm} setRegisterForm={setRegisterForm}  />
        }
        {
            registerForm && <RegisterForm setLoginForm={setLoginForm} setRegisterForm={setRegisterForm} />
        }
        <Navbar setLoginForm={setLoginForm} />
    </div>
  )
};

export default App;
