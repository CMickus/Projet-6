import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import logementCards from '../logements.json';
import './card.module.css';

export function Card(logementCards){
    const logementID= logementCards.id
    const LinkPath = stringyfy("/location/" + {logementID}) 
    return (
    <Link id={logementCards.id} to="LinkPath">
        <img src={logementCards.cover}>{logementCards.title}</img>
    </Link>
    )
}
export default {Card}