import React, { useContext } from 'react'
import { GlobalStyle } from '../styles/GlobalStyle';
import { Layout } from '../containers/Layout';
import { Register} from '../containers/Register';
import { Home } from '../containers/Home';
import {  Routes, Route } from 'react-router-dom';
import { Login } from '../containers/Login'
import { NotRegisteredUser } from '../containers/NotRegisteredUser';
import { Favorites } from '../containers/Favorites';
import { Account } from '../containers/Account';
import { Context } from '../context/Context'

export const App = () => {

  const {getAuth}= useContext(Context);

  console.log(getAuth);

  // console.log(value);
  return (
    <>
    <GlobalStyle />
      <Layout>
          <Routes>
            <Route exact path="/" element={ <Home /> }/>
            <Route exact path="/favs" element={getAuth? <Favorites /> : <NotRegisteredUser /> } />
            <Route exact path="/account" element={getAuth? <Account /> : <NotRegisteredUser />} />
            <Route exact path="/registro" element={<Register />  } />
            <Route exact path="/login" element={ <Login /> } />
            <Route path="*" element={<p>No existe</p>} /> 
          </Routes>
      </Layout>
    </>
  )
}

