import React, { useState } from 'react';
import style from './Slideshow.module.css'


export function Slideshow(prop) {
    const [count, setCount] = useState(0);
    console.log(prop.prop.length)
    if (prop.prop.length === 1) {
        return (<div className={style.cover}> 
            <img className={style.picture} src={prop.prop}></img>
        </div>)
    } else {

        return (
            <div className={style.cover}>
                <button className={style.minus} onClick={() => {
                    
                    if (count === 0) {
                        setCount(prop.prop.length - 1);
                    } else {
                        setCount(count - 1)
                    }
                }}> 
                   <svg className={style.button} fill="#ffffff" height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" space="preserve" transform="rotate(90)">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path>
        </g>
    </svg>
                </button>
                <img className={style.picture} src={prop.prop[count]} alt="hello" />
                <p className={style.number}>{count + 1}/{prop.prop.length}</p>
                <button className={style.plus} onClick={() => {
                    
                    if (count === prop.prop.length - 1) {
                        setCount(0)
                    } else {
                        setCount(count + 1)
                    }
                }}> 
                   <svg className={style.button} fill="#ffffff" height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" space="preserve" transform="rotate(270)">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path>
        </g>
    </svg>
                </button>
            </div>
        )
    }
}

export default Slideshow