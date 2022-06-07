import styled from 'styled-components'
import {fadeIn} from "../../styles/animation"

export const Article= styled.article`
    min-height: 200px;
    max-width: 450px;
    margin: 0 auto; 
`

export const ImgWrapper= styled.div`
    border-radius: 10px;
    display: block;
    height: 0;
    overflow: hidden;
    padding: 56.25% 0 0 0;
    position: relative;
    width: 100%;
    text-decoration: none;
    width: 100%;
    margin: 0 auto;
    text-align: -webkit-auto;
    background: transparent;
`;
export const Image= styled.img`
${fadeIn({time: '1s'})}
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    height: 400px;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
    border-radius: 15px;
`;

export const Button = styled.button`
    padding-top: 8px;
    display: flex;
    align-items: center;
    font-size: 2rem;
    border: none;
    
    &:hover {
        cursor: pointer;
    }

    & svg {
        margin-right: 5px;
    }
`
