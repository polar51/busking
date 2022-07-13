import * as React from 'react'
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { reset } from "styled-reset";
import { createGlobalStyle } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./Routers/Layout";
import HomePage from "./Routers/HomePage";
import AboutPage from "./Routers/AboutPage";
import LoginPage from "./Routers/LoginPage";
import JoinPage from "./Routers/JoinPage";
import Detail from "./Routers/Detail";
import Create from './Routers/Create';
import Update from './Routers/Update';
import Loading from './Components/Loading';
import './global.css';



const GlobalStyle = createGlobalStyle`
  ${reset}
  body{
    font-family:'Happiness-Sans-Title';
    line-height: 1.5;
  }
`

function App() {
  const [ready, setReady] = useState(false);

  useEffect(()=> {
    setTimeout(()=>{
      setReady(true)
    },1000)
  })



  return ready ? 
    <Routes>
        <Route element={<Layout />}>
          <Route path="/busking" element={<HomePage />} />
          <Route path="/About/" element={<AboutPage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Join" element={<JoinPage />} />
          <Route path="/Detail/:num" element={<Detail />} />
          <Route path="/Detail/Create" element={<Create />} />
          <Route path='/Detail/Update' element={<Update />} />
        </Route>
      </Routes>
  : <Loading />
};

const AppWrapper =() => {
  return(
    <Router>
    <GlobalStyle />
      <App />
    </Router>
  )
}

export default AppWrapper;
