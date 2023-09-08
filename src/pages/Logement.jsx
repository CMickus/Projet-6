import React from 'react';
import '../index.css';
import { useParams } from 'react-router-dom';
import LogementListe from '../logements.json'
import style from './Logement.module.css'
import HiddenText from '../components/HiddenText';
import Slideshow  from '../components/Slideshow';
import {ErrorPage} from './ErrorPage';
import Etoile from '../components/Etoiles'
import Tag from '../components/Taglist'

export function Logement() {
  const { id } = useParams();
  const item = LogementListe.find((item) => item.id === id)
  if (item === undefined){
    return (<ErrorPage/>)
  }
  return (
    <>
      <Slideshow key={item.id} prop={item.pictures}/>
      <div className={style.global}>
        <div className={style.text}>
          <div>
            <h1>{item.title}</h1>
            <p className={style.location}>{item.location}</p>
          </div>
          <ul className={style.list}>
            {item.tags.map((element,index) =>
            <Tag key={index} content={element}/>)}
          </ul>
        </div>
        <div className={style.leftblock}>
          <div className={style.host}>
            <p className={style.hostname}>{item.host.name}</p>
            <img src={item.host.picture} alt="..." className={style.hostpicture} />
          </div>
          <Etoile grade={item.rating}/>
        </div>
      </div>
      <div className={style.tags}>
        <HiddenText info={item.description} fixe="Description" className={style.tag}/>
        <HiddenText info={item.description} fixe='Equipement' className={style.tag}/>
      </div>
    </>
  )
}

export default Logement 