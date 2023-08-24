import React from 'react';
import ReactDOM from 'react-dom/client';
import logementsListe from '../logements.json';

//info peut etre descriprition ou équipement donc logementsListe.info est logementListe.description ou .equipement
//à voir avec l'id de la page...

export function HiddenText(info){
    info = info || null
    if (window.location == "http://localhost:3000/A-propos"){
        
    }
    return(<div>
        <p>{info}</p>
        <img></img>
        <p>{logementsListe.info}</p>
    </div>)
}

export default (HiddenText);