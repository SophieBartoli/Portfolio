import Logo from '../Assets/Logos/Logo.webp';
import logoGit from '../Assets/Logos/logoGit.webp';
import logoLinkedin from '../Assets/Logos/logoLinkedin.webp';

const Footer = () => {
    return (
        <div className="footerDiv">
            <div className="buttonDiv">
                <button> <img clasName="buttonLogo" src={logoGit} alt="logo GitHub"/> </button>
                <button> <img clasName="buttonLogo" src={logoLinkedin} alt="logo Linkedin"/> </button>
           </div>
           <p>Par Sophie Bartoli</p>
           <img className="footerLogo" src={Logo} alt=""/>
        </div>
    );
};

export default Footer;