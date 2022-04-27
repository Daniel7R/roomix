import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Form= styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 400px;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
`

export const Div= styled.div`
    width: 100%;
    text-align: center;

    & input:last-child {
        margin-bottom: 20px;
    }
`

export const Input= styled.input`
    width: 60%;
    margin-top: 10px;
    border-radius: 20px;
    padding: 10px 0;
    background-color: rgb(28,30,33);
    border: 2px solid #370fff;
    transition: 1s all ease;
    color: #ffffff;
    text-align: center;
    outline: none;

    &:focus {
        width: 65%;
        border: 2px solid #1eff00;
        text-align: center;
        background-color: rgb(153,152,150);
    }

    &[type=email]{
        background-color: rgb(28,30,33);
        color: #ffffff;
        &:focus {
            background-color: rgb(153,152,150);
        }
    }
    &:active {
        border: 2px solid #1eff00;
    }

    &::placeholder {
        text-align: center;
        color: rgb(100,100,140);
    }

    &:-webkit-color-swatch-wrapper,:-webkit-color-swatch {
        border: 2px solid #1eff00;
    }
`
export const Select = styled.select`
    width: 60%;
    margin-top: 10px;
    padding: 10px 0;
    border-radius: 20px;
    text-align: center;
    margin-bottom: 30px;
    background-color: rgb(28,30,33);
    color: #ffffff;
    border: 2px solid #370fff;
    transition: 1s all ease;

    &:focus {
        width: 65%;
        border: 2px solid #1eff00;  
    }
`


export const Button= styled.button`
    width: 70%;
    padding: 15px;
    background-color: #1eff00;
    border-radius: 20px;
    border: 1px transparent;
    transition: 1s all ease;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 1.8rem;
    margin-top: 40px ;
    &:hover {
        width: 75%;
        background-color: #370fff;
        cursor: pointer;
    }
`

export const Title= styled.h2`
    text-align: center ;
    color: #fff ;
    font-size: 3rem ;
`

export const P= styled.p`
    font-size: 1.6rem ;
    margin-top: -60px;
`

export const Link= styled(NavLink)`
    font-size: 1.6rem ;
    color: #1eff00;
    background-color: rgb(153,152,150);
    padding: 5px 10px;
    border-radius: 15px;
    text-decoration: none;
`

export const Error= styled.span`
    font-size: 1.5rem ;
    color:rgb(255,43,43) ;
`