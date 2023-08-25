import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import style from './A-propos.module.css';
//import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
/*
import Header from '../components/header';
import Footer from '../components/footer';*/
//c'est pas des select mais simplement des bloc avec un bouton, pour un déroulement ety affiché un texte
//<FontAwesomeIcon className={style.cardcontentcolor} icon="fa-solid fa-chevron-down" rotation={180} />
import Banner from '../components/Banner'
import HiddenText  from '../components/Hidden-text';
import banner2 from '../components/images/paysage_montagne.jpg';
import data from '../aproposinfo.json'
// importe logement.json de la meme manière

//ici tous les elements element ouvrables sont deqs composants

//importer des svg plutot que fontawesome

//prendre une image et la faire tourner

//les 4 à propos doivent etre un composant creer un json par exemple
export function Apropos() {
  return (
    <>
      <Banner title='' image={banner2}/>
      <main className={style.textdiv}>
        <div className={style.card}>
         <HiddenText key="1st" info={data} info2=''/>
        </div>
        <div className={style.card}>
          <HiddenText key="1st" info={data} info2=''/>
        </div>
        <div className={style.card}>
          <HiddenText key="1st" info={data} info2=''/>
        </div>
        <div className={style.card}>
          <HiddenText key="1st" info={data} info2=''/>
        </div>
      </main>
    </>
  )
}

// faire un composant banner qui va changer je lui passe les props pour changer les images et le title 

export default { Apropos }