// import { Button, Card, CardTitle } from "react-bootstrap";
// import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { setSelectedOrchid } from "../../../features/selectOrchidSlice";

// export default function OrchidCard({ orchid }) {
//   const dispatch = useDispatch();

//   return (
//     <Card className="h-100 shadow-sm border-1 rounded-3">
//       <div className="overflow-hidden m-3 " style={{ height: "200px" }}>
//         <Card.Img
//           variant="top"
//           src={orchid.image}
//           alt={orchid.name}
//           className="w-100 h-100 object-fit-cover rounded-3 shadow-lg"
//         />
//       </div>

//       <Card.Body>
//         <Card.Title>{orchid.name}</Card.Title>
//         <Card.Text>
//           Origin: {orchid.origin} <br />
//           Color: {orchid.color} <br />
//           Category: {orchid.category} <br />
//           Rating: {orchid.rating} ⭐<br />
//         </Card.Text>
//         {/* <Button variant="primary">Add</Button> */}
//         <div className="d-flex justify-content-end">
//           <Button
//             as={Link}
//             to={`detail/${orchid.id}`}
//             className=" text-white border"
//             style={{ background: "#3a7055ff" }}
//             onClick={() => {
//               dispatch(setSelectedOrchid(orchid));
//             }}
//           >
//             View detail
//           </Button>
//         </div>
//       </Card.Body>
//     </Card>
//   );
// }
import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setSelectedOrchid } from "../../../features/selectOrchidSlice";

export default function OrchidCard({ orchid }) {
  const dispatch = useDispatch();

  return (
    <Card
      className="h-100 border-0 shadow-sm rounded-4 overflow-hidden position-relative bg-body"
      style={{
        transition: "all 0.3s ease",
      }}
    >
      {/* Hình ảnh */}
      <div
        className="overflow-hidden position-relative"
        style={{ height: "220px" }}
      >
        <Card.Img
          variant="top"
          src={orchid.image}
          alt={orchid.name}
          className="w-100 h-100 object-fit-cover rounded-top-4"
          style={{
            transition: "transform 0.4s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>

      {/* Nội dung */}
      <Card.Body className="px-3 py-3">
        <Card.Title className="fw-bold text-success mb-2">
          {orchid.name}
        </Card.Title>
        <Card.Text className="text-muted small mb-3">
          <span className="d-block">Origin: {orchid.origin}</span>
          <span className="d-block">Color: {orchid.color}</span>
          <span className="d-block">Category: {orchid.category}</span>
          <span className="d-block">Rating: {orchid.rating} ⭐</span>
        </Card.Text>

        <div className="d-flex justify-content-end">
          <Button
            as={Link}
            to={`detail/${orchid.id}`}
            onClick={() => dispatch(setSelectedOrchid(orchid))}
            className="border-0 text-white px-3 rounded-pill shadow-sm"
            style={{
              backgroundColor: "#3a7055ff",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#2d5b44")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#3a7055ff")
            }
          >
            View detail
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
