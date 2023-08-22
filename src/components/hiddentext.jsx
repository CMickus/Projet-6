import React from 'react';
import ReactDOM from 'react-dom/client';
import logementsListe from '../logements.json';

//info peut etre descriprition ou équipement donc logementsListe.info est logementListe.description ou .equipement
//à voir avec l'id de la page...

export function HiddenText(info){
   /* if (window.location.href == '/A-propos'){
        //ici voir pour les 4 comment faire 
    }*/
    <div>
        <p>{info}</p>
        <img></img>
        <p>{logementsListe.info}</p>
    </div>
}

export default (HiddenText);