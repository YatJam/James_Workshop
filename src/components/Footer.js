import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './header.css';

const Footer = () => {

    const FooterWrapper = styled.footer`
        color: black;
        font-weight: 800;
        font-size: 70px;
        font-family: 'poppins', sans-serif;
        background-image: url('./images/workshop.png');
        background-position: 0 0;
        font-style: italic;  
    `
    const FooterImage = styled.img`
        object-fit: cover;
    `
    
    return (
        <>
        <FooterWrapper>
            <Link to='/James_Workshop'>
            <h1 className='logo'>This is the footer</h1>
            </Link>
        </FooterWrapper>
        </>
    );
};

export default Footer;