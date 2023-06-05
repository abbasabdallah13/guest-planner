import React, { useEffect, useState } from "react";

import logo from '../../assets/logo.png';
import whiteLogo from '../../assets/whiteLogo.png'
import loginIcon from '../../assets/loginIcon.png';
import whiteUserIcon from '../../assets/loginIconWhite.png';
import burgerMenu from '../../assets/burgerMenu.png';
import close from '../../assets/close.png'

import './index.scss'

const Navbar = ({ setLoginForm }) => {
    const [sidebar, setSidebar] = useState(false);
    
    
    useEffect(() => {
      let navLogo = document.getElementById('logo');
      let navbar = document.getElementById('navbar');
      let burgerMenu = document.getElementById('burgerMenu');
      let userIcon = document.getElementById('loginBtnIcon');
      let sidebarBtn = document.getElementById('sidebarBtn')
      document.addEventListener('scroll', () => {
        if (window.scrollY === 0){
            navLogo.classList.remove('logo-scrolled');
            navLogo.src = logo;
            navbar.classList.remove('navbar-scrolled');
            burgerMenu.classList.remove('burger-menu-scrolled');
        }else if(window.scrollY > 0){
            navLogo.classList.add('logo-scrolled');
            navLogo.src = whiteLogo;
            navbar.classList.add('navbar-scrolled');
            burgerMenu.classList.add('burger-menu-scrolled');
        }        
      })
      sidebarBtn.addEventListener('mouseenter', () => {
        userIcon.src = whiteUserIcon;
    })

    sidebarBtn.addEventListener('mouseleave', () => {
        userIcon.src = loginIcon;
    })
    }, []);
    

  return (
    <div className="navbar" id="navbar">
                <img className="nav-logo" id='logo' src={logo} alt='logo' />
                <div style={{display:'flex', alignItems:'center'}}>
                    <ul className='ul'>
                            <a href="#about" className="navlink"><li>About</li></a>
                            <a href="#procedure" className="navlink"><li>Procedure</li></a>
                            <a href="#example" className="navlink"><li>Example</li></a>
                            <a href="#contact" className="navlink"><li>Contact</li></a>
                    </ul>
                    <button className="nav-button" id="sidebarBtn" onClick={()=>setLoginForm(true)}>
                        <img src={loginIcon} id="loginBtnIcon" alt="login icon" />
                        Login/Register
                    </button>
                </div>
                <div className="sidebar-container">
                    <img className="burger-menu" id="burgerMenu" src={sidebar ? close : burgerMenu} alt='burger menu' onClick={() => setSidebar(prev => !prev)}/>
                    {
                        sidebar && (
                            <div className="sidebar">
                                <ul className="sidebar-ul">
                                    <a href="#about" className="sidebar-link"><li>About</li></a>
                                    <a href="#procedure" className="sidebar-link"><li>Procedure</li></a>
                                    <a href="#example" className="sidebar-link"><li>Example</li></a>
                                    <a href="#contact" className="sidebar-link"><li>Contact</li></a>
                                </ul>  
                                <button className="sidebar-btn" onClick={()=>setLoginForm(true)}>
                                    <img style={{width:'25px', height:'25px'}} src={loginIcon} alt="login icon" />
                                        Login/Register
                                </button>  
                            </div>
                        )
                    }
                </div>

    </div>
  )
};

export default Navbar;
