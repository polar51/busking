import * as React from 'react'
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import { reset } from "styled-reset";
import { createGlobalStyle } from 'styled-components'
import Layout from "./Routers/Layout";
import HomePage from "./Routers/HomePage";
import AboutPage from "./Routers/AboutPage";
import LoginPage from "./Routers/LoginPage";
import JoinPage from "./Routers/JoinPage";
import Detail from "./Routers/Detail";
import Create from './Routers/Create';



const GlobalStyle = createGlobalStyle`
  ${reset}
  body{
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
  }
`

function App() {
  return (
      <Routes>
          <Route element={<Layout />}>
            <Route path="/busking" element={<HomePage />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/Join" element={<JoinPage />} />
            <Route path="/Detail/:num" element={<Detail />} />
            <Route path="/Detail/Create" element={<Create />} />
          </Route>
        </Routes>
  );
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
