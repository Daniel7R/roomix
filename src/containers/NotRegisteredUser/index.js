import React from 'react'
import { Link,Div, FragmentStyled, H1, H3} from './styles'
import {MdOutlineDoNotDisturbOff} from 'react-icons/md'

const iconStyle= {fontSize: '90px', color: "red "}

export const NotRegisteredUser = () => {
  return (
    <FragmentStyled>
        <H1>NO ESTÁS REGISTRADO</H1>
        <MdOutlineDoNotDisturbOff style={iconStyle} id='icon-notRegistered' />
        <H3>Debes Iniciar Sesión o Crear Una Nueva Cuenta</H3>
        <Div>
            <Link to='/login'>Iniciar Sesión</Link>
            <Link to='/registro'>Registrarse</Link>
        </Div>
    </FragmentStyled>
  )
}
