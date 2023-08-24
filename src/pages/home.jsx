import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import Card from '../components/Card';
import logementinfo from "../logements.json";
import Banner from '../components/Banner';
import banner1 from '../components/images/bord_de_mer_falaise.png';


//utiliser le composant comme fonction en sympe JS et non se buter sur du react tester 
export function Home() {
    console.log(logementinfo)
    //remplir via card et logements.json
    return(
    <>
       <Banner title='Chez vous, partout et ailleurs' image={banner1}/>
        <div>
        <h2>hello</h2>
            {logementinfo.map((location) =>{
                return(
                <Card key={location.id} location={location}/>)
            })}
        </div>
    </>
    )
}

export default  Home;
//<Card/>