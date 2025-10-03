import { Button, Card, CardTitle } from "react-bootstrap";

export function OrchidCard({ orchid, handleViewDetail }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={orchid.image}
        alt={orchid.name}
        className="img-fluid object-fit-contain"
        style={{ maxHeight: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{orchid.name}</Card.Title>
        <Card.Text>
          Origin: {orchid.origin} <br />
          Color: {orchid.color} <br />
          Category: {orchid.category} <br />
          Rating: {orchid.rating} ⭐<br />
        </Card.Text>
        <Button variant="primary">Add</Button>
        <Button
          variant="secondary"
          onClick={() => {
            console.log(orchid);
            handleViewDetail(orchid);
          }}
        >
          Details
        </Button>
      </Card.Body>
    </Card>
  );
}
