import React from 'react';
import styled from 'styled-components';
import './bio.css'
import csharp_icon from "../images/csharp_icon.png"
import ruby_icon from "../images/ruby_icon.png"
import java_icon from "../images/java_icon.png"
import javascript from "../images/javascript_icon.png"
import python_icon from "../images/python_icon.png"

const BioWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: grey;
    width: 70%;
    border-radius: 5px;
    margin: 10px;
`

const ProjectImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 5px;
`
const Image = styled.img`
    height: 300px;
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
            <ProjectImageContainer>
                <Image src={csharp_icon} alt='csharp_icon' />
                <Image src={ruby_icon} alt='ruby_icon' />
                <Image src={java_icon} alt='java_icon' />
                <Image src={javascript} alt='javascript_icon' />
                <Image src={python_icon} alt='python_icon' />
            </ProjectImageContainer>
        </TextContainer>
        <TextContainer>
            <h2>My Portfolio</h2>
            <h3>Projects completed at CodeClan</h3>
            <p>Please click on each one to take you to their respective GitHub repo.</p>
        </TextContainer>
            </BioWrapper>
        </>
    );
};

export default Bio;