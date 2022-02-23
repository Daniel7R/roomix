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
                <Input type="password" placeholder="Digite nuevamente su contraseña" id="re-password" name="re-password" />
                <Select>
                    <option value="renter">Rentador</option>
                    <option value="searcher">Buscador</option>
                </Select>
            </Div>
            <Button type="button">Enviar</Button>
        </Form>
    )
}

