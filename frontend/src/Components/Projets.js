import React from 'react'
import ProjetsCards from './ProjetsCards';
import Booki from '../Assets/Images/Booki.webp';
import Bluel from '../Assets/Images/Bluel.webp';
import Grimoire from '../Assets/Images/Grimoire.webp';
import Kasa from '../Assets/Images/Kasa.webp';


function Projets() {
  return (
    <div id="projets">
      <h2> Mes projets</h2>
      <div className="projetsDiv">
        <ProjetsCards imgUrl="https://github.com/SophieBartoli/Booki.git" imgSource={Booki} imgAlt="" imgTitle="Booki" imgText="Site internet de réservation de vacances."/>
        <ProjetsCards imgUrl="https://github.com/SophieBartoli/ArchiWebos.git" imgSource={Bluel} imgAlt="" imgTitle="Sophie Bluel" imgText="Site internet de photographie."/>
        <ProjetsCards imgUrl="https://github.com/SophieBartoli/Grimoire.git" imgSource={Grimoire} imgAlt="" imgTitle="Grimoire" imgText="Site internet de notation littéraire."/>
        <ProjetsCards imgUrl="https://github.com/SophieBartoli/Kasa.git" imgSource={Kasa} imgAlt="" imgTitle="Kasa" imgText="Site internet de location immobilière."/>
      </div>
    </div>

  )
}

export default Projets