import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import style from './a-propos.module.css';
//import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
/*
import Header from '../components/header';
import Footer from '../components/footer';*/
//c'est pas des select mais simplement des bloc avec un bouton, pour un déroulement ety affiché un texte
//<FontAwesomeIcon className={style.cardcontentcolor} icon="fa-solid fa-chevron-down" rotation={180} />
import image from "../components/images/paysage_montagne.jpg"
// importe logement.json de la meme manière

//ici tous les elements element ouvrables sont deqs composants

//importer des svg plutot que fontawesome
export function Apropos() {
  return (
    <>
      <img src={image} alt="Paysage d'une vallée en montagne. Sapins au premiers plan, une rivière coule au fond de la vallée entre les montagnes" />
      <main className={style.textdiv}>
        <div className={style.card}>
          <p className={style.cardcontentcolor}>Fiabilité</p>
          <button>
          </button>
        </div>
        <div className={style.card}>
          <p className={style.cardcontentcolor}>Respect</p>
          <button>
          </button>
        </div>
        <div className={style.card}>
          <p className={style.cardcontentcolor}>Service</p>
          <button>
          </button>
        </div>
        <div className={style.card}>
          <p className={style.cardcontentcolor}>Sécurité</p>
          <button>
          </button>
        </div>
      </main>
    </>
  )
}

// faire un composant banner qui va changer je lui passe les props pour changer les images et le title 

export default { Apropos }