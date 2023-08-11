import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import './Projects.css';
import vrem_home from '../images/vrem_homepage.png'

function ProjectImageCarousel() {
  
  const imgs=[
    {id:0,value: vrem_home},
    {id:1,value:"https://source.unsplash.com/user/c_v_r/1900x800"},
    {id:2,value:"https://source.unsplash.com/user/c_v_r/100x100"},
  ]
  const [wordData,setWordData]=useState(imgs[0])
  const [val,setVal] = useState(0)
  const handleClick=(index)=>{
    console.log(index)
    setVal(index)
    const wordSlider=imgs[index];
    setWordData(wordSlider)
  }
  const handleNext = ()=>{
    let index = val < imgs.length -1 ? val +1 : val;
    setVal(index)
    const wordSlider=imgs[index];
    setWordData(wordSlider)
  }
  const handlePrevious = ()=>{
    let index = val <= imgs.length -1 && val > 0? val - 1 : val;
    setVal(index)
    const wordSlider=imgs[index];
    setWordData(wordSlider)
  }

const ProjectWrapper = styled.div`
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

  return (
    <ProjectWrapper>
      <TextContainer>
        <h3>Final project: VREM (React & Spring boot)</h3>
        <div className="main">
          <button className='btns' onClick={handlePrevious}>P</button>
          <img src={wordData.value} height="300" width="500" /> 
          <button className='btns' onClick={handleNext}>N</button>
          <div className='flex_row'>
            {imgs.map((data,i)=>
            <div className="thumbnail" key={i} >
              <img className={wordData.id==i?"clicked":""} src={data.value} onClick={()=>handleClick(i)} height="70" width="100" />
            </div>
            )}
          </div>
        </div>
        </TextContainer>
    </ProjectWrapper>
  );
}

export default ProjectImageCarousel;