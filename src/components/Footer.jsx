import React from 'react';
import style from './Footer.module.scss'
import logo from './images/LOGO2.png'

export function Footer(){
    return(
        <footer className={style.footerstyle}>
            <img src={logo} alt='logo de Kasa'/>
            <p className={style.footertext}>@ 2020 Kasa All rights reserved</p>
        </footer>
    )
}

//export default {Footer}