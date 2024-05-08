import React from 'react'
import ProjetsCards from './ProjetsCards';


function Projets() {
  return (
    <div id="projets" className="projetsDiv">
      <div>
        <h2> Mes projets... </h2>
        <ProjetsCards/>
        <ProjetsCards/>
        <ProjetsCards/>
        <ProjetsCards/>
        <ProjetsCards/>
      </div>
    </div>

  )
}

export default Projets