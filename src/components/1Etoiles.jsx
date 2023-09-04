import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';


export function Etoile(grade) {
    const [rating, setRating] = useState(grade.grade)
    console.log(grade.grade)
    console.log(rating)
    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)
        console.log(rate)
        // other logic
    }
    // Optinal callback functions


    return (
        <div className='App'>
            <Rating
                fillColor='#ff6060'
                initialValue={rating}
                onClick={handleRating}
                ratingValue={rating}
            /* Available Props */
            />
        </div>
    )
}

export default Etoile;