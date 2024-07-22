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


async function resultDoc(e) {
  setDoc(doc(db, "messages", uuid()), {
    nom: nameForm.value,
    email: emailForm.value,
    message: messageForm.value,
  }).then(() => {
    contactForm.reset();
    alert("Message envoyé !");
  });
};


async function submitForm(e) {
  e.preventDefault();
  await resultDoc(e);
};


function Contact() {


  return (
    <div id='contact'>
      <h2>Me contacter</h2>
      <div className="contactDivs">

        <Form className="contactForm">

          <div className="contactUser">
            <input type="text" className="nameForm" placeholder="Nom" required={true}/>
            <input type="text" className="emailForm" placeholder="Email" required={true}/>
          </div>

          <textarea rows="4" className="messageForm" placeholder="Message" required={true}/>

          <div>
            <button className="submitButton" type="submit" onClick={submitForm}>Envoyer</button>
          </div>

        </Form>

        <img src={logoEmail} alt="logo ordinateur"/>
      </div>
    </div>
  );
}

export default Contact;