import React from 'react';
import grey from './images/greystar.svg'
import red from './images/redstar.svg'

/* ici par soucis de simplicité import d'un systeme de rating
inclu un hover et le changement des couleurs
initial value est necessaire popur les premières etoiles creer 
il sera possible plus tard de récupérer la note de l'utilisateur*/
export function Etoile(grade) {
   /* const [rating, setRating] = useState(grade.grade)
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
    )*/
        
        let rendu = []

        for(let i=1; i<= grade; i++){
           rendu.push(<img src={red} alt="..."></img>)  
        };
        
        for(let j = grade+1; j<=5; j++){
            rendu.push(<img src={grey} alt="..."></img>)
        };
        console.log(rendu)
    return(
        <div>{rendu.map((picturecontent) =>
        picturecontent)}
        </div>
    )
}

export default Etoile;