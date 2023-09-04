import React from 'react';
import {Link} from 'react-router-dom'
import style from './Card.module.css';

export function Card({location}){
    const logementID = location.id
    const LinkPath = ("/location/" + logementID)
    return (
    
    <Link id={location.id} to={LinkPath} className={style.littlecard}>
        <img src={location.cover} className={style.image} alt={location.title}/>
        <p className={style.text}>{location.title}</p>
    </Link>
    )
}
export default Card