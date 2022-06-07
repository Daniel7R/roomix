import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Nav= styled.nav`
    border-bottom: 1px solid #1EFF00;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0 0 15px #370FFF;
    margin-bottom: 200px;
    z-index: 2;

    @media only screen and (max-width: 840px){
        .desktop-item {
            display: none;
        }
    }
`

export const MenuList= styled.ul`
    display: flex;   
    flex-direction: row;
    align-items: center;
    list-style: none;
    justify-content: space-evenly;
`
export const Link = styled(LinkRouter)`
    text-decoration: none;
    cursor: pointer;
    color: white;
    transition: 1s color ease;
    font-size: inherit;
    font-size: 2rem;
    display: flex;
    align-items: center;

    &:hover {
        color: #1eff00;
        transition: 1s color ease;
    }

    & svg {
        margin-right: 6px;
        color: white;
        transition: 1s color ease;
    }

    &:focus {
        color: #1eff00;
        transition: 1s color ease;
    }
`

export const ListItem = styled.li`
    font-size: 2rem;
`
