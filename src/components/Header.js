import React from 'react';
import styled from 'styled-components';
import './header.css';

const HeaderWrapper = styled.header`
    background: blueviolet;
    
`
const HeaderImage = styled.img`
    object-fit: cover;
`

const Header = () => {
    return (
        <>
        <HeaderWrapper>
            <HeaderImage src='/images/workshop.png' alt='pictureOfWorkshop' />
            <h1 className='logo'>James Workshop</h1>
        </HeaderWrapper>
        </>
    );
};

export default Header;