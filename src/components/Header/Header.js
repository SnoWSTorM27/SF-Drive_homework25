import React, { useState } from "react";

import Btn from "../Btn/Btn";

import logoSkillDrive from "./Logo_SkillDrive.webp";
import mobileMenu from "./menu-mobile.svg";
import { BrowserRouter as Router, Link } from "react-router-dom";

import cssHeader from "./Header.module.css";


function Header() {

    return (
        <header>
            <Link to="/"> 
                <img src={logoSkillDrive} alt="logo SkillDrive" className={cssHeader.headerLogo} />
            </Link>
            <div>
            </div>
            <nav>
                <Link className={cssHeader.navLink} to="/au">О нас</Link>
                <Link className={cssHeader.navLink}  to="/au">Условия</Link>
                <Link className={cssHeader.navLink}  to="/fq">Частые вопросы</Link>   
                
            </nav>
            <Btn to="/auth" buttonName = "Войти" />
            <img className={cssHeader.mobileMenu} src={mobileMenu} alt="mobile menu" /> 
        </header>
    )
}

export default Header;