import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

/* ici par soucis de simplicité import d'un systeme de rating
inclu un hover et le changement des couleurs
initial value est necessaire popur les premières etoiles creer 
il sera possible plus tard de récupérer la note de l'utilisateur*/
export function Etoile(grade) {
    const [rating, setRating] = useState(grade.grade)
    console.log(grade.grade)
    console.log(rating)
    const handleRating = (rate) => {
        setRating(rate)
        console.log(rate)
        
    }


    return (
        <div className='App'>
            <Rating
                fillColor='#ff6060'
                initialValue={rating}
                onClick={handleRating}
                ratingValue={rating}
            />
        </div>
    )
}

export default Etoile;