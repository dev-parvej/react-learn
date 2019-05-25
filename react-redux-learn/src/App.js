import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import 'typeface-roboto';
import TopBar from './partial/TopBar'
import MainLayout from './main/MainLayout'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <MainLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;
