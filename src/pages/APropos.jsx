import React from 'react';
import '../index.scss';
import style from './APropos.module.scss';
import Banner from '../components/Banner'
import HiddenText  from '../components/HiddenText';
import banner2 from '../components/images/paysage_montagne.jpg';
import data from '../aproposinfo.json'


/*ici un fichier json a été creer permettant de reprendre le composant hiddentext plutot que de repeter les balises le sunes apres les autres
comme ils restent néanmoins fixe pas de .map mais simplement le numero d'index de chaque element
le contenu du ficher json vient de la maquette il est possible de le modifier par la suite*/ 
export function Apropos() {
  console.log(data)
  return (
    <>
      <Banner title='' image={banner2} altName="paysage de montagne"/>
      <main className={style.textdiv}>
        <div className={style.card}>
         <HiddenText info={data[0].description} fixe='Fiabilité'/>
        </div>
        <div className={style.card}>
          <HiddenText info={data[1].description} fixe='Respect'/>
        </div>
        <div className={style.card}>
         <HiddenText info={data[2].description} fixe='Service'/>
        </div>
        <div className={style.card}>
          <HiddenText info={data[3].description} fixe='Sécurité'/>
        </div>
      </main>
    </>
  )
}

// faire un composant banner qui va changer je lui passe les props pour changer les images et le title 

export default  Apropos 