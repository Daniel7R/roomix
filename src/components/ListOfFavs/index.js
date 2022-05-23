import React from 'react'
import { Grid, Link, Img } from './styles'
import Test from '../../assets/test.jpg'

export const ListOfFavs= ({favs= []}) => {
    
    return(
        <Grid>
            {
                // favs
                [1,2,3].map((fav, i) => <Link key={i} to={`/detail/${fav.id}`}>
                    <Img src={Test} />
                </Link>)
            }
        </Grid>
    )
}
