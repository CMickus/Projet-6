import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
//import '../logements.json';
import './card.css';

//dois-je utiliser une fecth ici? je ne sais pas comment ammener la liste ici

export function Card(){
    url = "../pages/logements.json"
    const logementCard = async function(url){
        try {
            const response = await fetch(url);
            if (response.status === 200) {
                return await response.json();
            };
            return -1;
        } catch (exception) {
            return -1;
        };
    };
/*
    const [logementCards, setCards] = useState([]);
    return(
       {logementCards.map( l => 
        <a href="" className="${littlecard}">
            <img src={l.cover} alt={l.description}/>
            <h2>{l.title}</h2>
        </a>
        )}
    )*/
}

export default {Card}