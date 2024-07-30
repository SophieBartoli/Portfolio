import React from 'react'
import ProjetsCards from './ProjetsCards';
import { useState, useEffect } from 'react';

import db from "../firebase";
import { onSnapshot, collection } from 'firebase/firestore';


/*
import { storage } from "../firebase";
import { ref, listAll, getDownloadURL } from 'firebase/storage';
*/


function Projets() {

  const [websites, setWebsites] = useState([]);

  /*
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, "images/");
  const imagesArray = [];
  */

  useEffect(
    () =>
      onSnapshot(collection(db, "projets"), (snapshot) =>
        setWebsites(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

      ),
    []
  );

  /*useEffect( () => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
          imagesArray.push(url); 
        })
        console.log(imagesArray);
      })
    })
  }, []);
  */

  return (
    <div id="projets">
      <h2> Mes projets</h2>
      <div>

        {/*
        {imageList.map((url) => {
          return <img src={url}/>;
        })}
        */}

        <ul className="projetsDiv">
          {websites.map((website) => (
            <li key={website.id}>
              <ProjetsCards imgUrl={website.url} imgSource={website.image} imgAlt={website.alt} imgTitle={website.title} imgText={website.texte}/>
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