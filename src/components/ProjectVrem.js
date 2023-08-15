import React, { useState } from 'react';
import styled from 'styled-components';
import './Projects.css';
import vrem_home from '../images/vrem_homepage.png'
import vrem_create from '../images/vrem_create_player.png'
import vrem_adventure from '../images/vrem_adventure_screen.png'
import vrem_combat from '../images/vrem_combat.png'
import vrem_equipment from '../images/vrem_equipment.png'

function ProjectVrem() {

  const images=[
    {id:0, value: vrem_home},
    {id:1, value: vrem_create},
    {id:2, value: vrem_adventure},
    {id:3, value: vrem_equipment},
    {id:4, value: vrem_combat},
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
        <h3>Final project: VREM (React & Spring boot)</h3>
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

export default ProjectVrem;