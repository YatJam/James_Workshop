import React from 'react';
import styled from 'styled-components';


const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const TextContainer = styled.div`
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    background: #07303e;
    width: 70%;
    border-radius: 5px;
    margin: 10px;
`

const About = () => {
    return (
        <>
        <div className="AboutWrapper">
            <div className="AboutContainer">
                <h2 className="About">ABOUT</h2>
                <AboutWrapper>
                    <TextContainer>
                        <p>Hello, my name is James.</p>
                    </TextContainer>
                </AboutWrapper>
            </div>
        </div>
        </>
    );
};

export default About;