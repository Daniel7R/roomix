import React from "react";
import {Form, Input,Button, Title} from '../RegisterForm/styles'
import { MdOutlineAccountBox } from 'react-icons/md'

export const LoginForm= ({title}) => {
    return (
      <>
        <Title>{title}</Title>
        <MdOutlineAccountBox size={"80px"} />
        <Form autoComplete="off">
          <Input
            type="email"
            placeholder="Digite su correo"
            id="new-email"
            name="email"
          />
          <Input type="password" id="password" name="password" autoComplete="password" placeholder="Digite su contraseña" />

          <Button type="button">Iniciar Sesión</Button>
        </Form>
      </>
    );
}

