import React from 'react'
import CompetencesCards from './CompetencesCards';


function Competences() {
  return (
    <div id="competences" className="competencesDiv">
      <div>
        <h2> Mes compétences... </h2>
        <CompetencesCards/>
        <CompetencesCards/>
        <CompetencesCards/>
        <CompetencesCards/>
      </div>


    </div>

  )
}

export default Competences