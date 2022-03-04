import React from "react";
import { Form, Input, Div, Button, Select } from "./styles";

export const RegisterForm= () => {
    return (
        <Form>
            <Div>
                <Input type="text" placeholder="Digite su nombre" id="name" name="name" />
                <Input type="text" placeholder="Digite su apellido" id="last-name" name="last-name" />
                <Input type="email" placeholder="Digite su correo" id="email" name="email" />
                <Input type="password" placeholder="Digite su contraseña" id="password" name="password" />
            </Div>
            <Button type="button">Enviar</Button>
        </Form>
    )
}

