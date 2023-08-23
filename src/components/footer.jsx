import React from 'react';
import ReactDOM from 'react-dom/client';
//import '../index.css';
import style from './Footer.module.css'
import logo from './images/LOGO2.png'

export function Footer(){
    return(
        <footer className={style.footerstyle}>
            <img src={logo} alt='logo de Kasa'/>
            <p className={style.footertext}>@ 2020 Kasa All rights reserved</p>
        </footer>
    )
}

export default {Footer}