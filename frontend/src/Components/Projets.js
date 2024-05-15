import React from 'react'
import ProjetsCards from './ProjetsCards';
import Booki from '../Assets/Images/Booki.webp';
import Bluel from '../Assets/Images/Bluel.webp';
import Menu from '../Assets/Images/Menu.webp';
import Kasa from '../Assets/Images/Kasa.webp';


function Projets() {
  return (
    <div id="projets">
      <h2> Mes projets... </h2>
      <div className="projetsDiv">
        <ProjetsCards imgSource={Booki} imgAlt="" imgTitle="Booki" imgText="Site internet de location immobilière."/>
        <ProjetsCards imgSource={Bluel} imgAlt="" imgTitle="Sophie Bluel" imgText="Site internet de photographie."/>
        <ProjetsCards imgSource={Menu} imgAlt="" imgTitle="Menu Maker" imgText="Site internet de restauration."/>
        <ProjetsCards imgSource={Kasa} imgAlt="" imgTitle="Grimoire" imgText="Site internet de notation littéraire."/>
      </div>
    </div>

  )
}

export default Projets