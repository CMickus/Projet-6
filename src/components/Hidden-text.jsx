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
function Text(text) { return (<p>{text.description}, hello</p>) };
function HiddenText({ prop, prop2 }) {
    const [isVisible, setVisible] = useState(false);
    const onClick = () => setVisible(!isVisible);
    return (
        <div className={style.container}>
            <div className={style.headcontainer}>
                <h2 className={style.title}>{prop2}</h2>
                <button onClick={onClick} className={style.button}>{isVisible ? <Buttonarrowdown  /> : <Buttonarrow />}</button>
            </div>
            {isVisible ? <Text key={prop.id} text={prop} className={style.transition} /> : null}
        </div>
    );
}


function Buttonarrow() {
    return (<svg className={style.button} fill="#ffffff" height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" space="preserve" transform="rotate(180)">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path>
        </g>
    </svg>)
}

function Buttonarrowdown() {
    return (<svg className={style.button} fill="#ffffff" height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" space="preserve">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path>
        </g>
    </svg>)
}



export default HiddenText;