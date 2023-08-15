import React from 'react';
import Main from './containers/Main';
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Main/>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
