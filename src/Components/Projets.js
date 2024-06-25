import React from 'react'
import ProjetsCards from './ProjetsCards';
import Booki from '../Assets/Images/Booki.webp';
import Bluel from '../Assets/Images/Bluel.webp';
import Grimoire from '../Assets/Images/Grimoire.webp';
import Kasa from '../Assets/Images/Kasa.webp';

import db from "../firebase";
import { useEffect, useState } from 'react';
import { onSnapshot, collection } from 'firebase/firestore';


function Projets() {

  const [websites, setWebsites] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "projets"), (snapshot) =>
        setWebsites(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  return (
    <div id="projets">
      <h2> Mes projets</h2>
      <div>

        <ul className="projetsDiv">
          {websites.map((website) => (
            <li key={website.id}>
              <ProjetsCards imgUrl={website.url} imgSource={ Booki } imgAlt={website.alt} imgTitle={website.title} imgText={website.texte}/>
            </li>
          ))}
        </ul>
        
        {/*
        <ProjetsCards imgUrl="https://github.com/SophieBartoli/Booki.git" imgSource={Booki} imgAlt="" imgTitle="Booki" imgText="Site internet de réservation de vacances."/>
        <ProjetsCards imgUrl="https://github.com/SophieBartoli/ArchiWebos.git" imgSource={Bluel} imgAlt="" imgTitle="Sophie Bluel" imgText="Site internet de photographie."/>
        <ProjetsCards imgUrl="https://github.com/SophieBartoli/Grimoire.git" imgSource={Grimoire} imgAlt="" imgTitle="Grimoire" imgText="Site internet de notation littéraire."/>
        <ProjetsCards imgUrl="https://github.com/SophieBartoli/Kasa.git" imgSource={Kasa} imgAlt="" imgTitle="Kasa" imgText="Site internet de location immobilière."/>
      */}
      </div>
    </div>

  )
}

export default Projets