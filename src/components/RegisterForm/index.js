import React, {useState, useContext } from "react";
import { Form, Input, Div, Button, Title, P, Link } from "./styles";
import {MdOutlineAccountBox} from 'react-icons/md'
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Context } from "../../context/Context";
import Swal from "sweetalert2";


export const RegisterForm= ({title}) => {

    const {activeAuth}= useContext(Context)
    const[email,setEmail]= useState('')
    const[password,setPassword]= useState('')
    const navigate= useNavigate()

    const signUp= (e)=> {
        e.preventDefault()
        createUserWithEmailAndPassword(auth,email,password)
            .then(r => {
                Modal("Genial","Registro Exitoso","#1eff00","#1eff00")
                setTimeout(()=> {
                    navigate("/")
                },1000)
            }) 
            .then(() => activeAuth())  
            .catch((e)=> {
                if(e.code === "auth/invalid-email") {
                    Modal('Error',"Correo no valido (●'◡'●)",'#f27474','#f27474')
                }
                if(e.code === 'auth/weak-password') {
                    Modal('Error',"La contraseña debe tener al menos 6 caracteres -_-",'#f27474','#f27474')
                }
                if(e.code === 'auth/email-already-in-use') {
                    Modal('Este correo ya se encuentra en uso (┬┬﹏┬┬)',"#f27474","#f27474")
                }
                console.log(e.code);
            })
    }

    const Modal= (tipo,mensaje,color,iconCol) => {
        Swal.fire({
            title: tipo,
            text: mensaje,
            background: 'rgb(28,30,33)',
            color: color,
            iconColor: iconCol ,
            confirmButtonColor: '#f27474',
            width: "300px",
            timer: 3000
        })
    }

    return (
        <>
            <Title>{title}</Title>
            <MdOutlineAccountBox size={"80px"} />
            <Form onSubmit={signUp}>
                <Div>
                    <Input type="text" onChange={e => setEmail(e.target.value)} placeholder="Digite su correo" id="email" name="email" />
                    <Input type="password" onChange={e => setPassword(e.target.value)} placeholder="Digite su contraseña" id="password" name="password" />
                </Div>
                <Button>Enviar</Button>
            </Form>
            <P>¿Ya está registrado?, 👉 <Link to={"/"}>Inicia Sesión</Link> 👈</P>
        </>
        
    )
}

