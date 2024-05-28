import React from 'react'
import logo from '../Assets/Logos/Logo.webp';
import coding from '../Assets/Images/Coding.webp';
import travel from '../Assets/Images/Travel.webp';
import videogames from '../Assets/Images/Videogames.webp';
import lanterne1 from '../Assets/Images/Lanterne1.webp';
import { useState } from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Apropos () {

  const [slide, setSlide] = useState(true);

  function Toggle() {
    return setSlide(!slide);
}

  return (
    <div id="apropos" className="aProposDiv">
      <button onClick={Toggle}> <FontAwesomeIcon icon={faAngleLeft} size="4x"/> </button>
      <img className="lanterneLogo" id="lanterneUne" src={lanterne1} alt=""/>
      <img className="lanterneLogo" id="lanterneDeux" src={lanterne1} alt=""/>
       {slide ? (
          <div className="firstSlide">
            <div>
              <h1>Quelques mots sur moi...</h1>
              <p>Passionnée par la programmation et l'audiovisuel depuis l'enfance,<br></br> j'ai d'abord effectué une licence cinématographique.<br>
        </br><br></br>Très intéressée par les jeux vidéos et les applications mobiles,<br></br> j'ai décidé d'obtenir un premier diplôme en développement web.</p>
            </div>
            <img  className="logoImg" src={ logo } alt="portrait Sophie Bartoli" />
          </div>
        ) : (
          <div className="secondSlide">
            <h2>Mes passions...</h2>
            <div className="hobbies">
              <div>
                <img src={videogames} alt=""/>
                <p>Jeux vidéo<br>
                </br>Dessin<br>
                </br>Animation</p>
              </div>
              <div>
                <img src={travel} alt=""/>
                <p>Voyages<br>
                </br>Langues<br>
                </br>Animés</p>
              </div>
              <div>
                <img src={coding} alt=""/>
                <p>Informatique<br>
                </br>Programmation<br>
                </br>Cinéma</p>
              </div>
            </div>
          </div>
                )}
      <button onClick={Toggle}> <FontAwesomeIcon icon={faAngleRight} size="4x"/> </button>
      <img className="lanterneLogo" id="lanterneTrois" src={lanterne1} alt=""/>
      <img className="lanterneLogo" id="lanterneQuatre" src={lanterne1} alt=""/>
    </div>
  )
}

export default Apropos

