import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Assets/Logos/Logo.webp';

function Header() {
  return (
    <Navbar fixed="top" className="headerNavbar">
          <Nav className="headerNav">
            <img src={ logo } alt="dessin Sophie Bartoli de profil" />
            <Nav.Link className="liens" href="#apropos">A propos</Nav.Link>
            <Nav.Link className="liens" href="#competences">Compétences</Nav.Link>
            <Nav.Link className="liens" href="#projets">Projets</Nav.Link>
            <Nav.Link className="liens" href="#contact">Contact</Nav.Link>
          </Nav>
    </Navbar>
  );
}

export default Header;