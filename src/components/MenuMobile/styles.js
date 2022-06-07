import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Nav = styled.nav`

    position: fixed;
    z-index: 3;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    border-top: 1px solid #1eff00;
    box-shadow: 0 0 15px #370fff;

    @media only screen and (min-width: 841px) {
        display: none;
    }

`

export const List = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 50px;
`

export const ListItem = styled.li`
    font-size: 2rem;
`


export const Link= styled(LinkRouter)`
    text-decoration: none;
    & svg {
        color: white;
        transition: 1s color ease;

        &:hover {
            color: #370fff;
            transition: 1s color ease;
            cursor: pointer;
        }
    }

    &:focus {
            background-color: #1eff00;
        }
`


