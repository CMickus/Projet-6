import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import banner1 from './images/paysage_montagne.jpg';
import style from './Banner.module.css'

export function Banner(){
    return(
        <aside className={style.banner}>
            <img src={banner1} className={style.bannerimage}></img>
            <h2 className={style.title}>lorem ipsum</h2>
        </aside>
    )
}

export default {Banner};