import React from 'react';
import '../index.scss';
import Card from '../components/Card';
import logementinfo from "../logements.json";
import style from './Home.module.scss';
import Banner from '../components/Banner';
import banner1 from '../components/images/bord_de_mer_falaise.png';


/*le .map pour afficher les cartes de chaque images*/
export function Home() {
    console.log(logementinfo)
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