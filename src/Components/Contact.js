import Form from 'react-bootstrap/Form';
import logoEmail from '../Assets/Logos/logoEmail.webp';
import db from "../firebase";
import { useEffect, useState } from 'react';
import { onSnapshot, collection, addDoc, doc, setDoc } from 'firebase/firestore';
import { v4 as uuid } from 'uuid';



const contactForm = document.querySelector(".contactForm");
const nameForm = document.querySelector(".nameForm");
const emailForm = document.querySelector(".emailForm");
const messageForm = document.querySelector(".messageForm");
const submitButton = document.querySelector(".submitButton");


async function submitForm(e) {
  e.preventDefault();
  await setDoc(doc(db, "messages", uuid()), {
    nom: nameForm.value,
    email: emailForm.value,
    message: messageForm.value,
  }).then(() => {
    contactForm.reset();
  });
};


/*
function helloWorld() {
}
*/

function Contact() {


  /*
  function submitForm() {
    db.collection("messages").doc().set({
      nom: "sophie",
      email: "emailForm.value",
      message: "messageForm.value",
    }).then(() => {
      contactForm.reset();
    })
  }
    */
  
    /*
    db.collection("messages").doc().set({
      nom: nameForm.value,
      email: emailForm.value,
      message: messageForm.value,
    }).then(() => {
      contactForm.reset();
    })
      */
  



  return (
    <div id='contact'>
      <h2>Me contacter</h2>
      <div className="contactDivs">

        <Form className="contactForm">

          <div className="contactUser">
            <input type="search" className="nameForm" placeholder="Nom"/>
            <input type="search" className="emailForm" placeholder="Email"/>
          </div>

          <textarea rows="4" className="messageForm" placeholder="Message"/>
          <button className="submitButton" type="submit" onClick={submitForm}>Envoyer</button>

        </Form>



        {/*
        <Form className="contactForm">
          <div className="contactUser">

            <Form.Group className="mb-3">
              <label htmlFor="Nom">Nom :</label>
              <Form.Control type="" placeholder="Nom"  required={true}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <label htmlFor="Email">Email :</label>
              <Form.Control type="email" placeholder="Nom@example.com"  required={true}/>
            </Form.Group>

          </div>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <label htmlFor="Message">Message :</label>
            <Form.Control as="textarea" rows={3} placeholder="Message"  required={true} />
          </Form.Group>

          <div>
            <button className="submitButton" type="submit">Envoyer</button>
          </div>
        </Form>
        */}

        <img src={logoEmail} alt=""/>
      </div>
    </div>
  );
}

export default Contact;