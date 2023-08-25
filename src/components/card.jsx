import React, { useState } from 'react';
import {Link} from 'react-router-dom'
//import location from '../logements.json';
import style from './Card.module.css';

export function Card({location}){
    const logementID = location.id
    const LinkPath = ("/location/" + logementID)
    return (
    
    <Link id={location.id} to={LinkPath} className={style.littlecard}>
        <img src={location.cover} className={style.image}/>
        <p className={style.texte}>{location.title}</p>
    </Link>
    )
}
export default Card