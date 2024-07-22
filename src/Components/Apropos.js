import React from 'react'
import logo from '../Assets/Logos/Logo.webp';
import coding from '../Assets/Images/Coding.webp';
import travel from '../Assets/Images/Travel.webp';
import videogames from '../Assets/Images/Videogames.webp';
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
       {slide ? (
          <div className="firstSlide">
            <div>
              <h1>Quelques mots sur moi...</h1>
              <p>Passionnée par la programmation et l'audiovisuel depuis l'enfance,<br></br> j'ai d'abord effectué une licence cinématographique.<br>
        </br><br></br>Très intéressée par les jeux vidéo et les applications mobiles,<br></br> j'ai décidé d'obtenir un premier diplôme en développement web.</p>
            </div>
            <img  className="logoImg" src={ logo } alt="logo Sophie Bartoli" />
          </div>
        ) : (
          <div className="secondSlide">
            <h2>Mes passions...</h2>
            <div className="hobbies">
              <div>
                <img src={videogames} alt="manette de playstation"/>
                <p>Jeux vidéo<br>
                </br>Dessin<br>
                </br>Animation</p>
              </div>
              <div>
                <img src={travel} alt="rue japonaise"/>
                <p>Voyages<br>
                </br>Langues<br>
                </br>Animés</p>
              </div>
              <div>
                <img src={coding} alt="programmation sur un écran d'ordinateur"/>
                <p>Informatique<br>
                </br>Programmation<br>
                </br>Cinéma</p>
              </div>
            </div>
          </div>
                )}
      <button onClick={Toggle}> <FontAwesomeIcon icon={faAngleRight} size="4x"/> </button>
    </div>
  )
}

export default Apropos

