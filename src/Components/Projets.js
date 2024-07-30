import React from 'react'
import ProjetsCards from './ProjetsCards';
import { useState, useEffect } from 'react';
import db from "../firebase";
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
              <ProjetsCards imgUrl={website.url} imgSource={website.image} imgAlt={website.alt} imgTitle={website.title} imgText={website.texte}/>
            </li>
          ))}
        </ul>
      </div>
    </div>

  )
}

export default Projets