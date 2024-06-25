import Form from 'react-bootstrap/Form';
import logoEmail from '../Assets/Logos/logoEmail.webp';
import db from "../firebase";
import { useEffect, useState } from 'react';
import { onSnapshot, collection, addDoc, doc, setDoc } from 'firebase/firestore';


function Contact() {


  return (
    <div id='contact'>
      <h2>Me contacter</h2>
      <div className="contactDivs">

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
            <button className="submitButton">button</button>
          </div>
        </Form>

        <img src={logoEmail} alt=""/>
      </div>
    </div>
  );
}

export default Contact;