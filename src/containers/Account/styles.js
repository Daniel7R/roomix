import styled from 'styled-components'

export const Button= styled.button`
    font-size: 2.5rem;
    background-color: #1eff00;
    width: 60%;
    border-radius: 30px;
    padding: 10px ;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 1s all;

    & svg {
        background: none;
        font-size: 30px;
        width: 10%;

        & path {
            color: #fff;
            font-weight: 900;
        }
    }

    &:hover {
        width: 65%;
        background-color: #370ff0;
    }

    @media only screen and (max-width: 840px) {
        width: 80%;
    
        &:hover {
            width: 83%;
        }
    }
`

export const Div= styled.div`
    max-width: 600px;
    width: 100%;
    text-align: center;
    margin: 0 auto;
    display: flex;
    justify-content: center;
`