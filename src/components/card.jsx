import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import '../logements.json'

//dois-je utiliser une fecth ici? je ne sais pas comment ammener la liste ici

export function Card(){
    const [logementCards, setCards] = useState([]);
    return(
       {logementCards.map( l => 
        <a href="">
            <img src={l.cover} alt={l.description}/>
            <h2>{l.title}</h2>
        </a>
        )}
    )
}