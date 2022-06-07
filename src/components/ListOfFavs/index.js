import React, {useContext} from 'react'
import { Grid, Link, Img } from './styles'
import Test from '../../assets/test.jpg'
import { Context } from '../../context/Context'

export const ListOfFavs= ({favs= []}) => {
    const {data}= useContext(Context);
    console.log(data);
    
    return(
        <Grid>
            {
                // favs
                data.map((fav) => {
                    if(fav.liked === true) {
                        return (<Link key={fav.id} to={`/detail/${fav.id}`}>
                            <Img src={fav.src} />
                        </Link>)
                    }
                }
                )
            }
        </Grid>
    )
}
