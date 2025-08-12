import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

type MyCardProps = {
  title: string;
  text: string;
  img: string;
  link: string;
};

function MyCard({ title, text, img, link }: MyCardProps) {
  return (
    <Card className='MyCard'
      style={{
        width: '18rem',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
      }}
    >
      {/* Render the passed img prop */}
      <Card.Img className='cardImage' variant="top" src={img} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary" href={link}>
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;