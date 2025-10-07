import React from "react";
import { ListOfOrchids } from "../../../data/ListOfOrchids";
import { Container, Row, Col } from "react-bootstrap";
import OrchidCard from "../../styled/OrchidCard";

export default function NaturalCardList() {
  const orchids = ListOfOrchids.filter((val) => val.isSpecial === true);
  return (
    <section
      className="py-5"
      style={{
        // backgroundColor: "var(--bs-body-bg)",
        backgroundColor: "#e8f3ec",
      }}
    >
      <Container>
        {/* Tiêu đề */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-success">
            🌸 Natural Orchids Collection
          </h2>
          <p className="text-muted">
            Discover the natural beauty of Orchide – pure, vibrant, and unique.
          </p>
        </div>

        {/* Danh sách card */}
        <Row className="g-4 justify-content-center">
          {orchids.map((orchid) => (
            <Col key={orchid.id} xs={12} sm={6} md={4} lg={3}>
              <OrchidCard orchid={orchid} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
