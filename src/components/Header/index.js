import React from 'react'
import NavIcon from '../../assets/icons/icon.png'
import { ListItem, MenuList,Link, Nav } from './styles'
import {AiOutlineHome} from 'react-icons/ai'
import { MdOutlineFavoriteBorder } from 'react-icons/md'; 
import {VscAccount} from 'react-icons/vsc'

export const Header = () => {
  return (
    <Nav>
        <MenuList>
            <ListItem>
                <Link to='/'>
                    <img src={NavIcon} alt="logo"/>
                </Link>    
            </ListItem>
            <ListItem className='desktop-item'>
                <Link to='/'>
                    <AiOutlineHome size={'20px'} />
                    Home
                </Link>
            </ListItem>
            <ListItem className='desktop-item'>
                <Link to='/favs'>
                    <MdOutlineFavoriteBorder size={'20px'} />
                    Favoritos
                </Link>
            </ListItem>
            <ListItem className='desktop-item'>
                <Link to='/account'>
                    <VscAccount size={'20px'} />
                    Cuenta
                </Link>
            </ListItem>
        </MenuList>
    </Nav>
  )
}
