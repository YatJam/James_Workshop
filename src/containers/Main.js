import React from 'react';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PortfolioMain from './PortfolioMain'
import About from '../components/About'

const Main = () =>{
    
    return (
      <>
        <Routes>
            <Route path='/James_Workshop' element={<PortfolioMain />} />
            <Route path='/about' element={<About /> } />
            <Route path='/' element={<PortfolioMain />} />
        </Routes>
      </>
    );
  }
  
  export default Main;
  