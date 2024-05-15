
function ProjetsCards({imgSource, imgAlt, imgTitle, imgText}) {
  return (
      <div className="card">
        <button> <img src={imgSource} alt={imgAlt}/> </button>
        <div className="cardText">
          <h3>{imgTitle}</h3>
          <p>{imgText}</p>
        </div>
      </div>
  );
}

export default ProjetsCards;