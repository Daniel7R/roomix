import React from "react";
import { Form, Input, Div, Button, Title, P, Link } from "./styles";
import {MdOutlineAccountBox} from 'react-icons/md'

export const RegisterForm= ({title}) => {
    return (
        <>
            <Title>{title}</Title>
            <MdOutlineAccountBox size={"80px"} />
            <Form>
                <Div>
                    <Input type="text" placeholder="Digite su nombre" id="name" name="name" />
                    <Input type="text" placeholder="Digite su apellido" id="last-name" name="last-name" />
                    <Input type="email" placeholder="Digite su correo" id="email" name="email" />
                    <Input type="password" placeholder="Digite su contraseña" id="password" name="password" />
                </Div>
                <Button type="button">Enviar</Button>
            </Form>
            <P>¿Ya está registrado?, 👉 <Link to={"/"}>Inicia Sesión</Link> 👈</P>
        </>
        
    )
}

