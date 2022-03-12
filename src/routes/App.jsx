import React, { useContext } from 'react'
import {  Routes, Route } from 'react-router-dom';
import { GlobalStyle } from '../styles/GlobalStyle';
import { Layout } from '../containers/Layout';
import { Register} from '../containers/Register';
import { Home } from '../containers/Home';
import { Login } from '../containers/Login'
import { NotRegisteredUser } from '../containers/NotRegisteredUser';
import { Favorites } from '../containers/Favorites';
import { Account } from '../containers/Account';
import { Context } from '../context/Context'
import { NotFoundPage } from '../containers/NotFoundPage'
import { Header } from '../components/Header';
import { MenuMobile } from '../components/MenuMobile';

export const App = () => {

  const { getAuth }= useContext(Context);

  console.log(getAuth);
  return (
    <>
    <GlobalStyle />
    <Header />
      <Layout>
          <Routes>
            <Route exact path="/" element={ <Home /> }/>
            <Route  exact path="/favs" element={ getAuth !== false ? <Favorites />: <NotRegisteredUser />} />            
            <Route exact path="/account" element={ getAuth !== false ? <Account /> : <NotRegisteredUser />} />
            <Route exact path="/registro" element={<Register />  } />
            <Route exact path="/login" element={ <Login /> } />
            <Route path="*" element={<NotFoundPage />} /> 
          </Routes>
      </Layout>
      <MenuMobile />
    </>
  )
}

