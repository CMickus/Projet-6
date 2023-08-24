import React from 'react';
//import '../index.css';
import style from './Banner.module.css'

export function Banner({title, image}){
            return(<aside className={style.banner}>
                <img src={image} className={style.bannerimage} alt='...'></img>
                <h2 className={style.title1}>{title}</h2>
            </aside>)
}

export default Banner;