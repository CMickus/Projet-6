import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import {Card} from '../components/card';
import logementinfo from "../logements.json"
import {Banner} from '../components/banner'


//utiliser le composant comme fonction en sympe JS et non se buter sur du react tester 
export function Home() {
    //remplir via card et logements.json
    return(
    <>
       <Banner/>
        <div>
            {logementinfo.map((location) =>{
                Card(location);
               //<Card key={location.id} id={location.id} title={location.title} cover={location.cover}/>
            })}
        </div>
    </>
    )
}

export default  Home;
//<Card/>