import styled from 'styled-components'
import { NavLink  as Router } from 'react-router-dom'


export const Link= styled(Router)`
    border-radius: 12px;
    box-shadow: 0 0 8px rgb(0, 0, 0);
    display: inline-block;
    margin: 1%;
    overflow: hidden; 
    width: 31.33%;
    position: relative;
    height: 200px;
    width: 200px;

    &::after {
        content: "";
        display: block;
        padding-bottom: 100%;
    }
`

export const Grid= styled.div`
    padding-top: 30px;
    text-align: initial;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    
`

export const Img= styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    // position: inherit;
`