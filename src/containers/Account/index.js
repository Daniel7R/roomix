import React, { useContext } from "react";
import { Context } from '../../context/Context';
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";
import { Button, Div } from "./styles";
import {RiLogoutBoxLine} from 'react-icons/ri'

export const Account= () => {

    const { getAuth, removeAuth }= useContext(Context)

    const cerrarSesion= ()=> {
        signOut(auth)
        removeAuth()
    }

    return(
        <Div>
            <Button onClick={cerrarSesion}> <RiLogoutBoxLine />  Cerrar Sesión </Button>   
        </Div>
    )
}
