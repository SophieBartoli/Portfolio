import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import logoEmail from '../Assets/Logos/logoEmail.webp';
import db from "../firebase";
import { v4 as uuid } from 'uuid';
import { doc, setDoc } from 'firebase/firestore';

function Contact() {
  // Initialiser les références
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const formRef = useRef(null);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      // Accéder aux valeurs via les références
      await setDoc(doc(db, "messages", uuid()), {
        nom: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
      });
      // Réinitialiser le formulaire
      formRef.current.reset();
      alert("Message envoyé !");
    } catch (error) {
      console.error("Erreur lors de l'envoi du message : ", error);
    }
  };

  return (
    <div id='contact'>
      <h2>Me contacter</h2>
      <div className="contactDivs">
        <Form className="contactForm" ref={formRef} onSubmit={submitForm}>
          <div className="contactUser">
            <div className="formLabels">
              <label for="name">Nom :</label>
              <input id="name" type="text" className="nameForm" placeholder="Nom" required={true} ref={nameRef} />
            </div>
            <div className="formLabels">
              <label for="email">Email :</label>
              <input id="email" type="email" className="emailForm" placeholder="Email" required={true} ref={emailRef} />
            </div>
          </div>
          <label for="message" className="formSubmitLabel">Message :</label>
          <textarea id="message" rows="4" className="messageForm" placeholder="Message" required={true} ref={messageRef} />
          <div>
            <button name="formSubmit" className="submitButton" type="submit">Envoyer</button>
          </div>
        </Form>
        <img src={logoEmail} alt="logo ordinateur" />
      </div>
    </div>
  );
}

export default Contact;