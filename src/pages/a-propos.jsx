import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import Header from '../components/header';
import Footer from '../components/footer';
import 'logement.json'

//c'est pas des select mais simplement des bloc avec un bouton, pour un déroulement ety affiché un texte

export function Apropos(){
  return(
    <>
    <Header/>
    <img src="" alt=""/>
    <main>
      <div>
        <p></p>
        <button>
          <i></i>
        </button>
      </div>
      <div>
        <p></p>
        <button>
          <i></i>
        </button>
      </div>
      <div>
        <p></p>
        <button>
          <i></i>
        </button>
      </div>
      <div>
        <p></p>
        <button>
          <i></i>
        </button>
      </div>
    </main>
    <Footer/>
    </>
  )
}

export default {Apropos}