import React, {useContext, useEffect} from 'react'
import { PhotoCard } from '../PhotoCard'
import { Context } from '../../context/Context';

export const ListOfPhotoCards= ({categoryId}) => {
    
    const {data}= useContext(Context);
    return(
        <ul>
            {
                // data
                data.map( photo => <li key={photo.id} > <PhotoCard src={photo.src} id={photo.id} {...photo} />  </li>)
            }
        </ul>
    )
}

