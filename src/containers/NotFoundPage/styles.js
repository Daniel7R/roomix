import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container= styled.div`
    height: 100% ;
    display: flex;
    align-items:center ;
    flex-direction: column;
    justify-content: center;
`

export const Error= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
`

export const Number= styled.div`
    font-weight: 900;
    font-size: 15rem;
    line-height: 1;
`

export const Illustation= styled.div`
    position: relative;
    width: 13rem ;
    margin:0 2rem ;
`

export const Circle= styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 13rem;
    height: 12rem;
    border-radius: 50%;
    background-color: #fff;
`

export const Clip= styled.div`
    position: absolute;
    bottom: 0.3rem;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
    width:  13rem;
    height: 13rem;
    border-radius: 0 0 50% 50%;
`

export const Paper= styled.div`
    position: absolute;
    bottom: -0.3rem;
    left: 50%;
    transform: translateX(-50%);
    width: 9rem;
    height: 13rem;
    border: 0.3rem solid #1eff00 ;
    background-color: #fff;
    border-radius: 0.8rem;

    &::before {
        content: "";
        position: absolute;
        top: -0.7rem;
        right:-0.7rem ;
        width: 1.4rem;
        height: 1rem;
        background: #fff;
        border-bottom: 0.3rem solid #1eff00;
        transform: rotate(45deg);
    }
`

export const Face= styled.div`
    position: relative;
    margin-top: 2.3rem;
`

export const Eyes= styled.div`
    position: absolute;
    top: 0;
    left: 2rem;
    width: 4.6rem;
    height: 0.8rem;
    background-color: #fff;
`

export const Eye= styled.div`
    position:absolute ;
    bottom: 0;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background-color: #370f37;
    animation-name: eye;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;

    &.left {
        left: 0;
    }
    &.right {
        right: 0;
    }
`

export const Cachete= styled.div`
    position: absolute;
    top: 1.6rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: #370ff0;

    &.cachete__left{
        left: 1rem;
    }

    &.cachete__right{
        right: 1rem;
    }
`

export const Mouth= styled.div`
     position: absolute;
    top: 3.1rem;
    left: 50%;
    width: 2rem;
    height: 0.2rem;
    border-radius: 0.1rem;
    transform: translateX(-50%);
    background-color: #000;
`

export const Text= styled.div`
    margin-top: 5rem;
    font-weight: 600;
    font-size: 2rem;
`

export const Link= styled(NavLink)`
    margin-top: 4rem;
    text-decoration: none ;
    padding: 1rem 1.5rem;
    color: #2e2e2e;
    background: #1eff00;
    border: 1px solid transparent;
    border-radius: 25px;
    transition-property: background, color;
    transition-duration: 1s,1s;
    font-size: 2rem;
    transition:1.3s all ;
    
    &:hover{
        padding: 1rem 1.9rem;
        background: #370ff0;
        border: 1px solid #1eff00;
        color: #fefefe;
        transition-property: background, border, color;
        transition-duration: 1s,1s, 1s;
        transition: 1.3s all;
    }
`
