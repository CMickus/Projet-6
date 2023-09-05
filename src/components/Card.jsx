import React from 'react';
import {Link} from 'react-router-dom'
import style from './Card.module.css';

/* ici on utilise simplement l'id des images du fichier logmenent json et on génère les cartes ainsi*/
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