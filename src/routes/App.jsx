import React, { useState } from 'react'
import { GlobalStyle } from '../styles/GlobalStyle';
import { Layout } from '../containers/Layout';
import { Register} from '../containers/Register';
import { Home } from '../containers/Home';
import {  Routes, Route } from 'react-router-dom';
import { Login } from '../containers/Login'

export const App = () => {

  return (
    <>
    <GlobalStyle />
      <Layout>
          <Routes>
            <Route exact path="/" element={ <Home /> }/>  
            <Route exact path="/registro" element={<Register />  } />
            <Route exact path="/login" element={ <Login /> } />
            <Route path="*" element={<p>No existe</p>} /> 
          </Routes>
      </Layout>
    </>
  )
}

