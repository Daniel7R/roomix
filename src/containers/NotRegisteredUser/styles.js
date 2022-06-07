import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const FragmentStyled= styled.div`
    margin: 0 auto ;
    max-width: 400px ;
    height: 500px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items:  center;
    color: unset;
    box-shadow: 0 0 20px #fff;
    border: 1px solid #fff;
`

export const H1= styled.h1 `
    font-size: 3rem;
    text-align: center ;
    color: #ffffff;
`

export const H3= styled.h3`
    font-size: 2rem ;
    color: #ffffff;
`

export const Div= styled.div`
    display: flex ;
    justify-content: space-evenly;
    width: 100% ;

`

export const Link= styled(NavLink)`
    color: #fefefe;
    font-size: 2rem ;
    border: 1px solid transparent;
    background-color: #1eff00;
    padding:5px 10px ;
    transition: 1s all ease;
    border-radius: 15px;
    text-decoration: none ;

    &:hover {
        color: #fefefe ;
        background-color: #370FFF;
        transform: scale(1.09);
    }
`