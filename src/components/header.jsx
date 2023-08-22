import React from 'react';
import ReactDOM from 'react-dom/client';
import {Link} from 'react-router-dom';
import '../index.css';
import style from './header.module.css'
import logo from './images/LOGO.jpg'

export function Header(){
    return (
        <header className={style.headerstyle}>
            <img src={logo} alt="logo de Kasa" className={style.logo}/>
            <div className={style.nav}>
                <Link to="/" className={style.link}>Acceuil</Link>
                <Link to="/A-propos" className={style.link}>À propos</Link>
            </div>
        </header>
    )
}

export default {Header}