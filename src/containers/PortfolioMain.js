import React from 'react';
import Header from '../components/Header';
import Bio from '../components/Bio';
import ProjectDeathball from '../components/ProjectDeathball';
import ProjectPokemon from '../components/ProjectPokemon'
import ProjectSpaceExplorers from '../components/ProjectSpaceExplorers'
import ProjectAdventure from '../components/ProjectAdventure'
import ProjectVrem from '../components/ProjectVrem'

const PortfolioMain = () =>{
    return (
      <>
        <div className="PortfolioMain">
          <Header/>
            <p>under constructions</p>
          <Bio/>
          <ProjectDeathball/>
          <ProjectPokemon/>
          <ProjectSpaceExplorers/>
          <ProjectAdventure/>
          <ProjectVrem/>
        </div>
      </>
    );
  }
  
  export default PortfolioMain;
  