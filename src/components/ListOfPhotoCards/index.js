import React from 'react'
import { PhotoCard } from '../PhotoCard'
import Test from '../../assets/test.jpg';

export const ListOfPhotoCards= ({categoryId}) => {
    
    const data= []

    return(
        <ul>
            {
                // data
                [1,2,3,4,5].map((photo, i) => <li> <PhotoCard key={i} src={Test} {...photo} /> </li>)
            }
        </ul>
    )
}

