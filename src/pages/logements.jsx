import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
//les tags sont AUSSI des composants

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
            <i className="fa-solid fa-chevron-down fa-rotate-180"></i>
            </button>
          </div>
          <div>
            <p></p>
            <button>
            <i className="fa-solid fa-chevron-down fa-rotate-180"></i>
            </button>
          </div>

        </div>
      </main>
      
    </>
  )
}

export default { Logement }