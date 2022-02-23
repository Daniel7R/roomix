import React from "react";
import {AiOutlineHome} from 'react-icons/ai'
import { MdOutlineFavoriteBorder } from 'react-icons/md'; 
import {VscAccount} from 'react-icons/vsc'
import { Nav, Link, List, ListItem } from "./styles";

export const MenuMobile = ()=> {
    return( 
        <Nav className="mobile-menu" >
            <List>
                <ListItem>
                    <Link to="/">
                        <AiOutlineHome  size={"32px"}/>
                    </Link> 
                </ListItem>
                <ListItem>
                    <Link to="/favorites">
                        <MdOutlineFavoriteBorder size={"32px"}/>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="/account">
                        <VscAccount size={"32px"}/>
                    </Link>
                </ListItem>
            </List>
        </Nav>
    )
}