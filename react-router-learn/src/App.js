import React from 'react';
import 'typeface-roboto';
import './App.css';
import Layout from './main/layout'
import { BrowserRouter } from 'react-router-dom'
import TopBar from './patial/TopBar'

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <TopBar />
        <Layout />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
