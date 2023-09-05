import React from 'react'
import style from './Taglist.module.css'

/*simple .map pour generer les tag des logements en fonction de la liste de tag de l'élément en question*/
export function Tag(taglist){
    console.log(taglist.taglist)
    const length = taglist.taglist.length
    console.log(length)
    
    return(taglist.taglist.map((item) =><li className={style.tag}>{item}</li>))
    
}

export default Tag