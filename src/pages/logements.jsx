import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import { useParams } from 'react-router-dom';
//import { HiddenText } from '../components/Hidden-text';
//les tags sont AUSSI des composants
import LogementListe from '../logements.json'

export function Logement() {
  const LogementId = useParams();
  console.log(LogementId)
  LogementListe.forEach((item) =>{
    console.log(item.id)
    if (item.id === LogementId.id) {
      console.log(item.id)
      console.log(LogementId.id)
      return (
      <>
        <main>
          <img src={item.cover} />
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
              <p>{item.host.name}</p>
              <img src={item.host.picture} alt="" />
              <div>les ctit etoiles</div>
            </div>
          </div>
          <div>
          </div>
        </main>
      </>
      )}
      })
}
/*
{HiddenText(Descriprition)}
{HiddenText(Equipement)}
*/
//pour les étoiles faire un composant qui posera les étoiles en couleur jusqu'au rating (une liste et index et après sont gris jouer avec classes et css)
//idem pour les tags c'est une liste a generer via logement
export default { Logement }