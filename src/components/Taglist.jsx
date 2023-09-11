import React from 'react'
import style from './Taglist.module.scss'

/*simple .map pour generer les tag des logements en fonction de la liste de tag de l'élément en question*/
export function Tag({content}){
   return(<li className={style.tag}>{content}</li>)
}
export default Tag