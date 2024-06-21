import Form from 'react-bootstrap/Form';
import logoEmail from '../Assets/Logos/logoEmail.webp';
import db from "../firebase";
import { useEffect, useState } from 'react';
import { onSnapshot, collection } from 'firebase/firestore';

function Contact() {

  /*
  const [messages, setMessages] = useState([]);

  console.log(messages);

  useEffect(
    () => onSnapshot(collection(db, "books"),(snapshot) => 
      setMessages(snapshot.docs.map((doc) => doc.data()))
    ),

   []);

   */

  return (
    <div id='contact'>
      <h2>Me contacter</h2>
      <div className="contactDivs">

        <form className="add">
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" required></input>
          <label htmlFor="author">Author:</label>
          <input type="text" name="author" required></input>
      
          <input type="submit" value="Envoyer" className="submitButton"/>
        </form>

        {/*   
        <Form className="contactForm">
          <div className="contactUser">

            <Form.Group className="mb-3">
              <label for="Nom">Nom :</label>
              <Form.Control type="" placeholder="Nom" required="true"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <label for="Email">Email :</label>
              <Form.Control type="email" placeholder="Nom@example.com" required="true"/>
            </Form.Group>

          </div>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <label for="Message">Message :</label>
            <Form.Control as="textarea" rows={3} placeholder="Message" required="true" />
          </Form.Group>

          <div>
            <input type="submit" value="Envoyer" className="submitButton"/>
          </div>
        </Form>
        */}

        <img src={logoEmail} alt=""/>
      </div>
    </div>
  );
}

export default Contact;