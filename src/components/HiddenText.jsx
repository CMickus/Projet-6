import style from './HiddenText.module.scss';
import arrow from './images/arrowup.svg'


/*Utilisation d'un useState pour alterner entre true et false 
avec ces conditions on peut afficher ou non la balise p en cliquant sur le bouton ET on peut changer le bouton lui meme*/
import React, { useState } from "react";
function HiddenText({info , fixe }) {
    const [isVisible, setVisible] = useState(false);
    const onClick = () => setVisible(!isVisible);
    return (
        <div className={style.container}>
            <div className={style.headcontainer}>
                <h2 className={style.title}>{fixe}</h2>
                <button onClick={onClick} className={style.button}><img src={arrow} alt="fléche" className={`${style.arrow} ${isVisible ? style.arrowrotate : null}`} /></button>
            </div>
            {isVisible ? <p className={style.text}>{info} </p> : null}
        </div>
    );
}


//<p className={`${style.text} ${isVisible ? null : style.texthidden}`}>{info} </p>




export default HiddenText;