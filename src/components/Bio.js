import React from 'react';
import styled from 'styled-components';
import './bio.css'
import deathball_home from '../images/deathball_home.png'
import deathball_players from '../images/deathball_players.png'
import space_saga1 from '../images/Space_Saga1.png'
import space_saga2 from '../images/space_saga2.png'
import vrem_home from '../images/vrem_homepage.png'
import vrem_create from '../images/vrem_create_player.png'
import vrem_adventure from '../images/vrem_adventure_screen.png'
import vrem_combat from '../images/vrem_combat.png'

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