import React from 'react';
import style from './Banner.module.scss'

export function Banner({title, image, altName}){
            return(<aside className={style.banner}>
                <img src={image} className={style.bannerimage} alt={altName}></img>
                <h2 className={style.title1}>{title}</h2>
            </aside>)
}

export default Banner;