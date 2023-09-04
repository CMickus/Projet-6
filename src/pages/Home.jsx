import React from 'react';
import '../index.css';
import Card from '../components/1Card';
import logementinfo from "../logements.json";
import style from './Home.module.css';
import Banner from '../components/1Banner';
import banner1 from '../components/images/bord_de_mer_falaise.png';


//utiliser le composant comme fonction en sympe JS et non se buter sur du react tester 
export function Home() {
    console.log(logementinfo)
    //remplir via card et logements.json
    return(
    <>
       <Banner title='Chez vous, partout et ailleurs' image={banner1}/>
        <div className={style.bigcard}>
            {logementinfo.map((location) =>{
                return(
                <Card key={location.id} location={location} className={style.content}/>)
            })}
        </div>
    </>
    )
}

export default  Home;
//<Card/>