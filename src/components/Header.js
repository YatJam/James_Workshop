import React from 'react';
import styled from 'styled-components';
import './header.css';

const HeaderWrapper = styled.header`
    color: black;
  font-weight: 800;
  font-size: 70px;
  font-family: 'poppins', sans-serif;
  background-image: url('./images/workshop.png');
  background-position: 0 0;
  font-style: italic;
    
`
const HeaderImage = styled.img`
    object-fit: cover;
`

const Header = () => {
    return (
        <>
        <HeaderWrapper>
            <h1 className='logo'>James Workshops</h1>
        </HeaderWrapper>
        </>
    );
};

export default Header;