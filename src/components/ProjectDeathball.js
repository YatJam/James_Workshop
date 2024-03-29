import React, { useState } from 'react';
import styled from 'styled-components';
import './Projects.css';
import deathball_home from '../images/deathball_home.png'
import deathball_players from '../images/deathball_players.png'


function ProjectDeathball() {
  
  const images=[
    {id:0, value: deathball_home},
    {id:1, value: deathball_players},
  ]

  const [projectImage,setProjectImage]=useState(images[0])
  const [imageValue,setImageValue] = useState(0)
  
  const handleClick=(index)=>{
    console.log(index)
    setImageValue(index)
    const imageSlider = images[index];
    setProjectImage(imageSlider)
  }

  const handleNext = ()=>{
    let index = imageValue < images.length -1 ? imageValue +1 : imageValue;
    setImageValue(index)
    const imageSlider = images[index];
    setProjectImage(imageSlider)
  }

  const handlePrevious = ()=>{
    let index = imageValue <= images.length -1 && imageValue > 0? imageValue - 1 : imageValue;
    setImageValue(index)
    const imageSlider = images[index];
    setProjectImage(imageSlider)
  }

const ProjectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #07303e;
    width: 70%;
    border-radius: 5px;
    margin: 10px;
`

  return (
    <ProjectWrapper>
      <ProjectContainer>
        <h3>First project: DeathBall (Python, Flask, PostgreSQL)</h3>
        <div className="main">
          <button className='btns' onClick={handlePrevious}>P</button>
          <img src={projectImage.value} height="300" width="500" /> 
          <button className='btns' onClick={handleNext}>N</button>
          <div className='flex_row'>
            {images.map((data,i)=>
            <div className="thumbnail" key={i} >
              <img className={projectImage.id==i?"clicked":""} src={data.value} onClick={()=>handleClick(i)} height="70" width="100" />
            </div>
            )}
          </div>
        </div>
        </ProjectContainer>
    </ProjectWrapper>
  );
}

export default ProjectDeathball;