import React, { useState } from "react";
import {Form, Input,Button, Title} from '../RegisterForm/styles'
import { MdOutlineAccountBox } from 'react-icons/md'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";

export const LoginForm= ({title}) => {
  
  const [email,setEmail]= useState('')
  const [password,setPassword]= useState('')
  const [error, setError]= useState(null)
  const navigate= useNavigate()

  const signUp = (e)=> {
    e.preventDefault()
 
    signInWithEmailAndPassword(auth, email, password)
      .then( r => navigate('/') )
      .catch(e => {
        if(e.code === 'auth/user-not-found') {
          setError("Usuario no Encontrado :(")
        }
        if(e.code === 'auth/wrong-password') {
          setError('Contraseña Equivocada :(')
        }

        console.log(e.code);
      })

  }

  return (
    <>
      <Title>{title}</Title>
      <MdOutlineAccountBox size={"80px"} />
      <Form autoComplete="off" onSubmit={signUp}>
        <Input
          type="email"
          placeholder="Digite su correo"
          id="new-email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          id="password"
          name="password"
          autoComplete="password"
          placeholder="Digite su contraseña"
          onChange={e => setPassword(e.target.value) }
        />

        <Button>Iniciar Sesión</Button>
      </Form>
    </>
  );
}

