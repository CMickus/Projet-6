import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
//import Card from './components/card';
import logementinfo from "../logements.json"

export function Home() {
    //remplir via card et logements.json
    return(
    <>
        <div>
            {//composant bnanner ça
            }
            <img src="" alt="" />
            <p>Chez vous et partout ailleurs</p>
        </div>
        <div>
            {/*logementinfo.map((location) =>{
               //ici le composant card avec les props de map key=uneinformationunique
               location.id
                location.cover
                location.title
            })*/}
            <div>
                <p>Titre de la location</p>
            </div>
            <div>
                <p>Titre de la location</p>
            </div>
            <div>
                <p>Titre de la location</p>
            </div>
            <div>
                <p>Titre de la location</p>
            </div>
            <div>
                <p>Titre de la location</p>
            </div>
            <div>
                <p>Titre de la location</p>
            </div>
        </div>
    </>
    )
}

export default  Home;
//<Card/>