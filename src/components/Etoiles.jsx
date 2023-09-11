import React from 'react';
import grey from './images/greystar.svg'
import red from './images/redstar.svg'
import style from './Etoile.module.scss'

/* ici par soucis de simplicité import d'un systeme de rating
inclu un hover et le changement des couleurs
initial value est necessaire popur les premières etoiles creer 
il sera possible plus tard de récupérer la note de l'utilisateur*/

function Star({ color }) {
    if(color ==="red"){
    return <img src={red} alt="colored rating star" />} else {
        return <img src={grey} alt="grey rating star"/> 
    }
}
export default function Etoile({ grade }) {
    console.log(grade)
    return <div className={style.stargroup}>
      {
        [1, 2, 3, 4, 5].map(
          (starnum) => <Star key={starnum} color={starnum > grade ? "grey" : "red"} />
        )
      }
    </div>
}
