import ReactDOM from 'react-dom/client';
import logementsListe from '../logements.json';
import style from './Hidden-text.module.css';

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

import React, { useState } from "react";
function Text(text) { return (<p>{text.description}</p>) };
function HiddenText({prop, prop2}) {
    const [isVisible, setVisible] = useState(true);

    const onClick = () => setVisible(!isVisible);

    return (
        <div>
            <div>
                <h2>{prop2}</h2>
                <button onClick={onClick}>{isVisible ? 'Hide' : 'Show'}</button>
                {isVisible ? <Text /> : null}
            </div>
            <Text key={prop.id} text={prop} />
        </div>
    );
}

export default HiddenText;