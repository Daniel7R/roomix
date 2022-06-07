import React, { useState, useContext } from "react";
import {Form, Input,Button, Title} from '../RegisterForm/styles'
import { MdOutlineAccountBox } from 'react-icons/md'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";
import Swal from "sweetalert2";


export const LoginForm= ({title}) => {
  
  const {activeAuth}= useContext(Context)
  const [email,setEmail]= useState('')
  const [password,setPassword]= useState('')
  const navigate= useNavigate()

  const Modal= (title,color)=> {
    Swal.fire({
      title:title,
      background: 'rgb(28,30,33)',
      color: color,
      buttonsStyling: 'width: 50px',
      timer: 3000
    })
  }

  const signUp = (e)=> {
    e.preventDefault()
 
    signInWithEmailAndPassword(auth, email, password)
      .then( r =>{
        Modal("Inicio de sesión exitoso ╰(*°▽°*)╯",'#1eff00')
        navigate('/')} )
      .then(() => activeAuth())
      .catch(e => {
        if(e.code === 'auth/user-not-found') {
          Modal("Usuario no encontrado ;-;", '#f27474')
        }
        if(e.code === 'auth/wrong-password') {
          Modal("Contraseña equivocada ;-;", '#f27474')
        }
        if(e.code === 'auth/invalid-email') {
          Modal("Correo inválido (❁´◡`❁)", "#fe7474")
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
          type="text"
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

