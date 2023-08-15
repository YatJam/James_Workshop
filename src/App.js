import React from 'react';
import Main from './containers/Main';
import Header from './components/Header'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Navigation/>
          <Main/>
          <Footer/>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
