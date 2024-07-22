import Logo from '../Assets/Logos/Logo.webp';
import logoGit from '../Assets/Logos/logoGit.webp';
import logoLinkedin from '../Assets/Logos/logoLinkedin.webp';

const Footer = () => {
    return (
        <div className="footerDiv">
            <div className="footerLinksDiv">
                <a href="https://github.com/SophieBartoli" target="_blank" rel="noopener noreferrer" className="linkLogo"> <img src={logoGit} alt="logo GitHub"/> </a>
                <a href="https://www.linkedin.com/in/sophie-olivia-bartoli" target="_blank" rel="noopener noreferrer" className="linkLogo"> <img src={logoLinkedin} alt="logo Linkedin"/> </a>
           </div>
           <p>Par Sophie Bartoli</p>
           <img className="footerLogo" src={Logo} alt="logo Sophie Bartoli"/>
        </div>
    );
};

export default Footer;