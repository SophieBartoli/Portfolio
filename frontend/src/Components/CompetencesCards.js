import Card from 'react-bootstrap/Card';

function CompetencesCards( {cardImg, cardTitle, cardText, cardAlt}) {
  return (
    <Card className="competencesCards" style={{ width: '18rem' }}>
      <img variant="top" src={cardImg} alt={cardAlt}/>
      <Card.Body className="cardBody">
        <Card.Title className="cardTitle">{cardTitle}</Card.Title>
        <Card.Text className="cardText">{cardText}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CompetencesCards;