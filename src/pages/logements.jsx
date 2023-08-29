import React from 'react';
//import ReactDOM from 'react-dom/client';
import '../index.css';
import { useParams } from 'react-router-dom';
//import { HiddenText } from '../components/Hidden-text';
//les tags sont AUSSI des composants
import LogementListe from '../logements.json'
import style from './Logement.module.css'
import HiddenText from '../components/Hidden-text';

export function Logement() {
  const LogementId = useParams();
  console.log(LogementId.id)
  return (LogementListe.map((item) => {
    console.log(item.id)
    if (item.id === LogementId.id) {
      console.log(item.id)
      const taglist = item.tags.map((tag) => {
        return (<li className={style.listitem}>{tag}</li>)
      })
      console.log(taglist)
      return (
        <>
          <img src={item.cover} className={style.cover} alt='' />
          <div className={style.global}>
            <div className={style.text}>
              <div>
                <h1>{item.title}</h1>
                <p className={style.location}>{item.location}</p>
              </div>
              <ul className={style.list}>
                {taglist}
              </ul>
            </div>
            <div className={style.leftblock}>
              <div className={style.host}>
                <p className={style.hostname}>{item.host.name}</p>
                <img src={item.host.picture} alt="..." className={style.hostpicture} />
              </div>
              <div className={style.littlestar}>
                <svg id="svgelem" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                <polygon points="10,1 4,18 19,6 1,6 16,18" fill="#ff6060" />
                </svg>
                <svg id="svgelem" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                <polygon points="10,1 4,18 19,6 1,6 16,18" fill="#ff6060" />
                </svg>
                <svg id="svgelem" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                <polygon points="10,1 4,18 19,6 1,6 16,18" fill="#ff6060" />
                </svg>
                <svg id="svgelem" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                <polygon points="10,1 4,18 19,6 1,6 16,18" fill="#e3e3e3" />
                </svg>
                <svg id="svgelem" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="10,1 4,18 19,6 1,6 16,18" fill="#e3e3e3" />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <HiddenText key={item.id} prop={item} prop2="description" />
            <HiddenText key='a voir' prop={item} prop2='Equipement' />
          </div>
        </>
      )
    }
  }))
}
/*
{HiddenText(Descriprition)}
{HiddenText(Equipement)}
*/
//pour les étoiles faire un composant qui posera les étoiles en couleur jusqu'au rating (une liste et index et après sont gris jouer avec classes et css)
//idem pour les tags c'est une liste a generer via logement
export default Logement 