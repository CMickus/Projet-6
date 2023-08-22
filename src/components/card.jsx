import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {Link} from 'react-router-dom'
import '../index.css';
import logementCards from '../logements.json';
import './card.module.css';

export function Card(logementCards){
    const logementID= logementCards.id
    const LinkPath = ("/location/" + {logementID}) 
    return (
    <Link id={logementCards.id} to="LinkPath">
        <img src={logementCards.cover}/>
        <p>{logementCards.title}</p>
    </Link>
    )
}
export default {Card}