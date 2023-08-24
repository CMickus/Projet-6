import React, { useState } from 'react';
import {Link} from 'react-router-dom'
//import location from '../logements.json';
import style from './Card.module.css';

export function Card({location}){
    const logementID = location.id
    const LinkPath = ("/location/" + {logementID})
    console.log('*******')
    return (
    <>
    <p>lorem ipsum</p>
    <Link id={location.id} to={LinkPath}>
        <img src={location.cover}/>
        <p>{location.title}</p>
    </Link></>
    )
}
export default Card