import React from 'react';
import ReactDOM from 'react-dom/client';
import logementsListe from '../logements.json';

//en gros si c'est page a propos juste faire un switch sur les class pour faire apparaitre et disparaitre le texte fixe
//pour le reste voir si on peut retirer des element react via ces fonctions eux sont généré automatiquement
export function HiddenText(info){
    //info = info || null
    if (window.location == "http://localhost:3000/A-propos"){
        document.getElementById(info).classList.remove('style.hidden');
    }
    return(<div>
        <p>{info}</p>
        <img></img>
        <p>{logementsListe.info}</p>
    </div>)
}

export default (HiddenText);