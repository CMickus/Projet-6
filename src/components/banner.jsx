import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import banner1 from './images/bord_de_mer_falaise.png';
import banner2 from './images/paysage_montagne.jpg';
import style from './Banner.module.css'

export function Banner(){
    console.log(window.location)
    if (window.location == "http://localhost:3000/A-propos"){
        return(
            <aside className={style.banner}>
                <img src={banner2} className={style.bannerimage} alt='...'></img>
                <h2 className={style.title2}>lorem ipsum</h2>
            </aside>
        )
    }
    return(
        <aside className={style.banner}>
            <img src={banner1} className={style.bannerimage} alt='...'></img>
            <h2 className={style.title1}>lorem ipsum</h2>
        </aside>
    )
}

export default {Banner};