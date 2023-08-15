import React from 'react';
import styled from 'styled-components';
import './bio.css'
import csharp_icon from "../images/csharp_icon.png"
import ruby_icon from "../images/ruby_icon.png"
import java_icon from "../images/java_icon.png"
import javascript from "../images/javascript_icon.png"
import python_icon from "../images/python_icon.png"
import flask_icon from "../images/flask_icon.png"
import mongodb_icon from "../images/mongodb_icon.png"
import postgresql_icon from "../images/postgresql_icon.png"
import react_icon from "../images/react_icon.png"
import spring_icon from "../images/spring_icon.png"

const BioWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #07303e;
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
    height: 80px;
    border-radius: 5px;

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
                <a href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)" target="_blank"><Image src={csharp_icon} alt='csharp_icon' /></a>
                <a href="https://en.wikipedia.org/wiki/Ruby_(programming_language)" target="_blank"><Image src={ruby_icon} alt='ruby_icon' /><h4 className='black_bar'>Ruby</h4></a>
                <a href="https://en.wikipedia.org/wiki/Java_(programming_language)" target="_blank"><Image src={java_icon} alt='java_icon' /></a>
                <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank"><Image src={javascript} alt='javascript_icon' /><h4 className='black_bar'>Javascript</h4></a>
                <a href="https://en.wikipedia.org/wiki/Python_(programming_language)" target="_blank"><Image src={python_icon} alt='python_icon' /><h4 className='black_bar'>Python</h4></a>
            </ProjectImageContainer>
            <ProjectImageContainer>
                <a href="https://en.wikipedia.org/wiki/React_(software)" target="_blank"><Image src={react_icon} alt='react_icon' /><h4 className='black_bar'>React.js</h4></a>
                <a href="https://en.wikipedia.org/wiki/Flask_(web_framework)" target="_blank"><Image src={flask_icon} alt='flask_icon' /><h4 className='black_bar'>Flask</h4></a>
                <a href="https://en.wikipedia.org/wiki/MongoDB" target="_blank"><Image src={mongodb_icon} alt='mongodb_icon' /><h4 className='black_bar'>MongoDB</h4></a>
                <a href="https://en.wikipedia.org/wiki/PostgreSQL" target="_blank"><Image src={postgresql_icon} alt='postgresql_icon' /><h4 className='black_bar'>PostgreSQL</h4></a>
                <a href="https://en.wikipedia.org/wiki/Spring_Boot" target="_blank"><Image src={spring_icon} alt='spring_icon' /><h4 className='black_bar'>Spring Boot</h4></a>   
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