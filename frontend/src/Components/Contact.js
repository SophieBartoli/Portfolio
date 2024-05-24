import Form from 'react-bootstrap/Form';
import logoEmail from '../Assets/Logos/logoEmail.webp';

function Contact() {
  return (
    <div id='contact'>
      <h2>Me contacter</h2>
      <div className="contactDivs">
        <Form className="contactForm">
          <div className="contactUser">

            <Form.Group className="mb-3">
              <Form.Label>Nom :</Form.Label>
              <Form.Control type="" placeholder="Nom" required="true"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email :</Form.Label>
              <Form.Control type="email" placeholder="Nom@example.com" required="true"/>
            </Form.Group>

          </div>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message :</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Message" required="true" />
          </Form.Group>

          <input type="submit" value="Envoyer" />
        </Form>
        <img src={logoEmail} alt=""/>
      </div>
    </div>
  );
}

export default Contact;