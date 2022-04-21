import * as React from 'react'
import { reset } from "styled-reset";
import { createGlobalStyle } from 'styled-components'
import Layout from "./Routers/Layout";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body{
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
  }
`

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Layout />
    </React.Fragment>
  );
}

export default App;
