import { faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function ProjetsCards({imgSource, imgAlt, imgTitle, imgText, imgUrl}) {

  return (
      <div className="card">
          <a href={imgUrl} target="_blank" rel="noopener noreferrer"> <img src={imgSource} alt={imgAlt}/> <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="imgIcon"/> </a>
        <div className="cardText">
          <h3>{imgTitle}</h3>
          <p>{imgText}</p>
        </div>
      </div>
  );
}

export default ProjetsCards;