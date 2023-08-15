import React from 'react';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PortfolioMain from './PortfolioMain'
import About from '../components/About'

const Main = () =>{

  const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransitionStage] = useState('fadeIn');

  useEffect(() => {
    if (location !== displayLocation) setTransitionStage('fadeOut');
    }, [location, displayLocation]);


    return (
      <>
       <section
            className={`${transitionStage}`}
            onAnimationEnd={() => {
                if (transitionStage === 'fadeOut') {
                    setTransitionStage('fadeIn');
                    setDisplayLocation(location);
                }
            }}>
        <Routes location={displayLocation}>
            <Route path='/James_Workshop' element={<PortfolioMain />} />
            <Route path='/about' element={<About /> } />
            <Route path='/' element={<PortfolioMain />} />
        </Routes>
        </section>
      </>
    );
  }
  
  export default Main;
  