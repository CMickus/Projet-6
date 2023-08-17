import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';/*
import Header from '../components/header';
import Footer from '../components/footer';*/

//c'est pas des select mais simplement des bloc avec un bouton, pour un déroulement ety affiché un texte

export function Apropos(){
  return(
    <div>
    <img src="./components/images/paysage_montagne.jpg" alt="..."/>
    <main>
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
    </div>
  )
}

export default {Apropos}