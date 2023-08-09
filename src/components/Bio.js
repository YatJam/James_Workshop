import React from 'react';
import styled from 'styled-components';
import './bio.css'

const BioWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const BioContainer = styled.div`
    background: grey;
    width: 60%;
    border-radius: 5px;
`

const Bio = () => {
    return (
        <>
        <BioWrapper>
        <BioContainer>
            <h2 className='logo'>Hello, my name is James Yates</h2>
            <p>sausages</p>
            </BioContainer>
            </BioWrapper>
        </>
    );
};

export default Bio;