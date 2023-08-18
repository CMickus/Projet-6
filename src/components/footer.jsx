import React from 'react';
import ReactDOM from 'react-dom/client';
//import '../index.css';
import style from './footer.module.css'

export function Footer(){
    return(
        <footer className={style.footerstyle}>
            <img src="" alt='logo de Kasa'/>
            <p>@ 2020 Kasa All rights reserved</p>
        </footer>
    )
}

export default {Footer}