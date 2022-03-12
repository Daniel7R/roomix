import React, {useState, useContext } from "react";
import { Form, Input, Div, Button, Title, P, Link, Error } from "./styles";
import {MdOutlineAccountBox} from 'react-icons/md'
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Context } from "../../context/Context";

export const RegisterForm= ({title}) => {

    const {activeAuth}= useContext(Context)
    const[email,setEmail]= useState('')
    const[password,setPassword]= useState('')
    const [error, setError]= useState(null)
    const navigate= useNavigate()

    const signUp= (e)=> {
        e.preventDefault()
        createUserWithEmailAndPassword(auth,email,password)
            .then(r => navigate("/")) 
            .then(() => activeAuth())  
            .catch((e)=> {
                if(e.code === "auth/invalid-email") {
                    setError("Correo no valido =(")
                }
                if(e.code === 'auth/weak-password') {
                    setError('La contraseña debe tener al menos 6 caracteres :(')
                }
                if(e.code === 'auth/email-already-in-use') {
                    setError('Este correo ya se encuentra en uso')
                }
                console.log(e.code);
            })
    }

    return (
        <>
            <Title>{title}</Title>
            <MdOutlineAccountBox size={"80px"} />
            <Form onSubmit={signUp}>
                <Div>
                    <Input type="email" onChange={e => setEmail(e.target.value)} placeholder="Digite su correo" id="email" name="email" />
                    <Input type="password" onChange={e => setPassword(e.target.value)} placeholder="Digite su contraseña" id="password" name="password" />
                </Div>
                {
                    error ? <Error>{error}</Error> :<span></span>
                }
                <Button>Enviar</Button>
            </Form>
            <P>¿Ya está registrado?, 👉 <Link to={"/"}>Inicia Sesión</Link> 👈</P>
        </>
        
    )
}

