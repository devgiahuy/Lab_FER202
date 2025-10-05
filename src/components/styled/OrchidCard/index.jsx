import { Button, Card, CardTitle } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setSelectedOrchid } from "../../../features/selectOrchidSlice";

export default function OrchidCard({ orchid }) {
  const dispatch = useDispatch();

  return (
    <Card className="h-100 shadow-sm border-1 rounded-3">
      <div className="overflow-hidden m-3 " style={{ height: "200px" }}>
        <Card.Img
          variant="top"
          src={orchid.image}
          alt={orchid.name}
          className="w-100 h-100 object-fit-cover rounded-3 shadow-lg"
        />
      </div>

      <Card.Body>
        <Card.Title>{orchid.name}</Card.Title>
        <Card.Text>
          Origin: {orchid.origin} <br />
          Color: {orchid.color} <br />
          Category: {orchid.category} <br />
          Rating: {orchid.rating} ⭐<br />
        </Card.Text>
        {/* <Button variant="primary">Add</Button> */}
        <div className="d-flex justify-content-end">
          <Button
            as={Link}
            to={`detail/${orchid.id}`}
            className=" bg-success text-white border"
            // variant="primary"
            onClick={() => {
              console.log(orchid);
              dispatch(setSelectedOrchid(orchid));
            }}
          >
            View detail
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
