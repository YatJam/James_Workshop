import React from 'react';
import styled from 'styled-components';


const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const AboutTextContainer = styled.div`
    color: whitesmoke;
    background: #07303e;
    width: 70%;
    padding: 20px;
    border-radius: 5px;
    margin: 10px;
    text-align: left;
`

const About = () => {
    return (
        <>
        <div className="AboutWrapper">
            <div className="AboutContainer">
                <h2 className="About">ABOUT</h2>
                <AboutWrapper>
                    <AboutTextContainer>
                        <p>Hello there...</p>
                        <p>Originally educated in Marine Biology & Oceanography at the University of Plymouth, I have held several professional careers 
                            from volunteering at the National Marine Aquarium, selling books for Waterstones, working with evidence for Police Scotland, and a respectible 
                            career in student support for the University of Edinburgh. Throughout all of these positions, there have been convoluted processes that eat up 
                            a substantial part of the working day or days. Prompting a work ethic of working smarter not harder, to see how we can improve these processes, to 
                            use the data to work for us. 
                        </p>
                        <p>So far in my tech development journey, I have gained experience in the following:</p>
                        <ul>
                            <li>C# (I am currently studying this langauge through Udemy)</li>
                            <li>Ruby</li>
                            <li>Java (my favourite at present)</li>
                            <li>Javascript (including React)</li>
                            <li>Python</li>
                            <li>Object Oriented Programming</li>
                            <li>Test Driven Development</li>
                            <ul>
                                <li>Unit testing</li>
                                <li>Cypress testing</li>
                                <li>N unit testing</li>
                                <li>Insomnia testing</li>
                            </ul>
                            <li>PostgreSQL, MongoDB, Spring Boot</li>
                            <li>UML Diagramming</li>
                            <li>Using Git and GitHub version control</li>
                            <li>The fundamentals of UX</li>
                            <li>Agile methodologies</li>
                            <li>SDLC (Software Development Life Cycle)</li>

                        </ul>
                    </AboutTextContainer>
                </AboutWrapper>
            </div>
        </div>
        </>
    );
};

export default About;