import React, { useState } from 'react';


export function Slideshow(prop) {
    const [count, setCount] = useState(0);
    console.log(prop.prop.length)
    if (prop.prop.length === 1) {
        return (<img src={prop.prop}></img>)
    } else {

        return (
            <div>
                <button onClick={() => {
                    
                    if (count === 0) {
                        setCount(prop.prop.length - 1);
                    } else {
                        setCount(count - 1)
                    }
                }}> - </button>
                <img src={prop.prop[count]} alt="..." />
                <p>{count + 1}/{prop.prop.length}</p>
                <button onClick={() => {
                    
                    if (count === prop.prop.length - 1) {
                        setCount(0)
                    } else {
                        setCount(count + 1)
                    }
                }}> +  </button>
            </div>
        )
    }
}

export default Slideshow