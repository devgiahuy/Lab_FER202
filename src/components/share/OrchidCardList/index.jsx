import { Col, Container, Row } from "react-bootstrap";
import { ListOfOrchids } from "../../../data/ListOfOrchids";
import OrchidCard from "../../styled/OrchidCard";

export default function OrchidsCardList() {
  const orchids = ListOfOrchids;
  return (
    <div
      className="d-flex justify-content-center items-center rounded"
      style={{
        backgroundColor: "#F4F4F4",
        marginTop: "40px",
        maxWidth: "1440px",
        minHeight: "200px",
      }}
    >
      <Container className="my-4 d-flex flex-column">
        <Row>
          {orchids.map((orchid) => {
            // console.log(orchid);
            return (
              <Col
                key={orchid.id}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className="mb-4"
              >
                <OrchidCard orchid={orchid} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
