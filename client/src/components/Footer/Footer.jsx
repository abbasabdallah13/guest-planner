import React from "react";

import logo from '../../assets/transparentLogo.png'

const Footer = ({setLoginForm, setRegisterForm}) => {
  return (
    <div className="p-2 flex flex-col items-center mt-4 w-full bg-[#F5F5F5] relative top-40 xs:top-60 sm:top-64 lg:top-48 xl:top-80 xl1500:top-80 2xl:top-[30rem]">
            <img className="w-16 h-8 hidden" src={logo} alt="logo" />
            <h4>Email</h4>
            <a>support@guestplanner.com</a>
        <div>
            <div className="flex mt-2">
                <a onClick={()=>setLoginForm(true)}  className="cursor-pointer border-r-2 border-t-0 border-b-0 border-l-0 border-solid pr-2">Login</a>
                <a onClick={()=>setRegisterForm(true)} className="cursor-pointer pl-2">Register</a>
            </div>
        </div>
        <p className="mt-2 w-full text-center">Copyright 2023 - All Rights Reserved</p>
    </div>
  )
};

export default Footer;
