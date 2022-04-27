import React from 'react'
import { Cachete, Circle, Clip, Container, Error, Eye, Eyes, Face, Illustation, Link, Mouth, Number, Paper, Text } from './styles'
import '../../styles/Animation.css'

export const NotFoundPage= () => {
    return(
        <Container>
            <Error>
                <Number>4</Number>
                <Illustation>
                    <Circle></Circle>
                    <Clip>
                        <Paper>
                            <Face>
                                <Eyes>
                                    <Eye className='left'></Eye>
                                    <Eye className='right' ></Eye>
                                </Eyes>
                                <Cachete className='cachete__left'></Cachete>
                                <Cachete className='cachete__right' ></Cachete>
                                <Mouth></Mouth>
                            </Face>
                        </Paper>
                    </Clip>
                </Illustation>
                <Number>4</Number>
            </Error>
            <Text>Ooops, la págína a la que estás intentando acceder no existe 😒 </Text>
            <Link to="/">Regresar</Link>
        </Container>
    )
}
