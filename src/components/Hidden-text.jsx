import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import logementsListe from '../logements.json';

//en gros si c'est page a propos juste faire un switch sur les class pour faire apparaitre et disparaitre le texte fixe
//pour le reste voir si on peut retirer des element react via ces fonctions eux sont généré automatiquement
/*
function displayOnClick(){
    let [state, value] = useState(false)
    const handleClick =(e)=>{
        e.preventDefault()
        value(!value)
    }
    if value
}*/

function HiddenText(info, info2) {
    let [state, value] = useState(false)
    const handleClick = (e) => {
        e.preventDefault()
        value(!value)
        if (value) {
            return (
                <div>
                    <div>
                        <p>{info2}</p>
                        <button onclick={handleClick}><img src="" alt="" /></button>
                    </div>
                    <p>{info.description}</p>
                </div>
            )
        } else {
            <div>
                <div>
                    <p>{info2}</p>
                    <button onclick={handleClick}><img src="" alt="" /></button>
                </div>
            </div>
        }
    }

}

export default HiddenText;