import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import style from './a-propos.module.css'
/*
import Header from '../components/header';
import Footer from '../components/footer';*/
//c'est pas des select mais simplement des bloc avec un bouton, pour un déroulement ety affiché un texte

export function Apropos(){
  return(
    <>
    <img src="../16165171104718_image1.jpg" alt="Paysage d'une vallée en montagne. Sapins au premiers plan, une rivière coule au fond de la vallée entre les montagnes"/>
    <main className={style.textdiv}>
      <div>
        <p>Fiabilité</p>
        <button>
          <i></i>
        </button>
      </div>
      <div>
        <p>Respect</p>
        <button>
          <i></i>
        </button>
      </div>
      <div>
        <p>Service</p>
        <button>
          <i></i>
        </button>
      </div>
      <div>
        <p>Sécurité</p>
        <button>
          <i></i>
        </button>
      </div>
    </main>
    </>
  )
}

export default {Apropos}