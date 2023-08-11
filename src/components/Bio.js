import React from 'react';
import styled from 'styled-components';
import './bio.css'

const BioWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const TextContainer = styled.div`
    background: grey;
    width: 60%;
    border-radius: 5px;
    margin: 10px;
`

const Bio = () => {
    return (
        <>
        <BioWrapper>
        <TextContainer>
            <h2 className='logo'>Hello there, I am James Yates.</h2>
                <p> A graduate of CodeClan's SQA Accredited 16-week Professional
                Software Development Course. Please continue to scroll to see examples of my technical proficinecy. If
                you would like to know more about my professional and personal background, please click here.</p>
            <p>sausages</p>
            </TextContainer>
        <TextContainer>
            <p>Here are some of the codeing badges I have earned for my tech sash</p>
        </TextContainer>
        <TextContainer>
            <h2>My Portfolio</h2>
            <h3>Projects completed at CodeClan</h3>
            <p>Please click on each one to take you to their respective GitHub repo.</p>
        </TextContainer>
        <TextContainer>
            <h3>DeathBall</h3>
        </TextContainer>
        <TextContainer>
            <h3>Pokemon API</h3>
        </TextContainer>
        <TextContainer>
            <h3>Space Explorers</h3>
        </TextContainer>
        <TextContainer>
            <h3>Fantasy Adventure Game</h3>
        </TextContainer>
        <TextContainer>
            <h3>VREM</h3>
        </TextContainer>
            </BioWrapper>
        </>
    );
};

export default Bio;