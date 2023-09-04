import React from 'react'
import style from './Taglist.module.css'

export function Tag(taglist){
    console.log(taglist.taglist)
    const length = taglist.taglist.length
    console.log(length)
    
    return(taglist.taglist.map((item) =><span className={style.tag}>{item}</span>))
    
}

export default Tag