import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './header.css';

const Header = () => {

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

    return (
        <>
        <HeaderWrapper>
            <Link to='/James_Workshop'>
            <h1 className='logo'>James Workshops</h1>
            </Link>
        </HeaderWrapper>
        </>
    );
};

export default Header;