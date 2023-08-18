import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import Header from '../components/header';
import Footer from '../components/footer';

//c'est pas des select mais simplement des bloc avec un bouton, pour un déroulement ety affiché un texte


export function Logement() {
  return (
    <>
      
      <main>
        <img src="" />
        <div>
          <div>
            <h1>appart</h1>
            <p>lieu</p>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div>
            <p>Proprio</p>
            <img src="" alt="" />
            <div>les ctit etoiles</div>
          </div>
        </div>
        <div>
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

        </div>
      </main>
      
    </>
  )
}

export default { Logement }