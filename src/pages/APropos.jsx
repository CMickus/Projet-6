import React from 'react';
import '../index.css';
import style from './APropos.module.css';
//import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
/*
import Header from '../components/header';
import Footer from '../components/footer';*/
//c'est pas des select mais simplement des bloc avec un bouton, pour un déroulement ety affiché un texte
//<FontAwesomeIcon className={style.cardcontentcolor} icon="fa-solid fa-chevron-down" rotation={180} />
import Banner from '../components/Banner'
import HiddenText  from '../components/HiddenText';
import banner2 from '../components/images/paysage_montagne.jpg';
import data from '../aproposinfo.json'
// importe logement.json de la meme manière

//ici tous les elements element ouvrables sont deqs composants

//importer des svg plutot que fontawesome

//prendre une image et la faire tourner

//les 4 à propos doivent etre un composant creer un json par exemple
export function Apropos() {
  console.log(data)
  return (
    <>
      <Banner title='' image={banner2}/>
      <main className={style.textdiv}>
        <div className={style.card}>
         <HiddenText info={data[0].description} fixe='Fiabilité'/>
        </div>
        <div className={style.card}>
          <HiddenText info={data[1].description} fixe='Respect'/>
        </div>
        <div className={style.card}>
         <HiddenText info={data[2].description} fixe='Service'/>
        </div>
        <div className={style.card}>
          <HiddenText info={data[3].description} fixe='Sécurité'/>
        </div>
      </main>
    </>
  )
}

// faire un composant banner qui va changer je lui passe les props pour changer les images et le title 

export default  Apropos 