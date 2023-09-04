import style from './HiddenText.module.css';
import arrow from './images/arrowup.svg'


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
function HiddenText({info , fixe }) {
    const [isVisible, setVisible] = useState(false);
    const onClick = () => setVisible(!isVisible);
    return (
        <div className={style.container}>
            <div className={style.headcontainer}>
                <h2 className={style.title}>{fixe}</h2>
                <button onClick={onClick} className={style.button}>{isVisible ? <img src={arrow} className={style.arrowdown} alt="" /> : <img src={arrow} alt="" />}</button>
            </div>
            {isVisible ? <p className={style.text}>{info} </p> : null}
        </div>
    );
}





export default HiddenText;