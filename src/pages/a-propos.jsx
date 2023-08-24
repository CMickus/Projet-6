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
import { HiddenText } from '../components/Hidden-text';
import banner2 from '../components/images/paysage_montagne.jpg';
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
          <div className={style.tag}>
            <p className={style.cardcontentcolor}>Respect</p>
            {/*<button onClick={HiddenText('apropos1')}>
            </button>*/}
          </div>
          <p id='apropos1' className={style.hidden}>Hello</p>
        </div>
        <div className={style.card}>
          <div className={style.tag}>
            <p className={style.cardcontentcolor}>Respect</p>
            {/*<button onClick={HiddenText('apropos1')}>
            </button>*/}
          </div>
        </div>
        <div className={style.card}>
          <div className={style.tag}>
            <p className={style.cardcontentcolor}>Respect</p>
            {/*<button onClick={HiddenText('apropos1')}>
            </button>*/}
          </div>
        </div>
        <div className={style.card}>
          <div className={style.tag}>
            <p className={style.cardcontentcolor}>Respect</p>
            {/*<button onClick={HiddenText('apropos1')}>
            </button>*/}
          </div>
        </div>
      </main>
    </>
  )
}

// faire un composant banner qui va changer je lui passe les props pour changer les images et le title 

export default { Apropos }