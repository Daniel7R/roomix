import React, {useContext, useEffect} from 'react'
import { PhotoCard } from '../PhotoCard'
import Test from '../../assets/test.jpg';
import { Context } from '../../context/Context';
import Db from '../../../api/db.json';

export const ListOfPhotoCards= ({categoryId}) => {
    
    const {data, setData}= useContext(Context);

    useEffect(() => {
        console.log(Db.photos);
        setData(Db.photos);
    }, [])

    return(
        <ul>
            {
                // data
                data.map( photo => <li key={photo.id} > <PhotoCard src={photo.src} id={photo.id} {...photo} />  </li>)
            }
        </ul>
    )
}

