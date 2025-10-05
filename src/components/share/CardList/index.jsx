import { Col, Container, Row } from "react-bootstrap";
import { ListOfOrchids } from "../../../data/ListOfOrchids";
import { OrchidCard } from "../../styled";
import { useState } from "react";
import ModalStyled from "../../styled/ModalStyled";
import ProductDetail from "../../../pages/ProductDetail";

export default function OrchidsList() {
  const orchids = ListOfOrchids;
  const [item, setItem] = useState([]);
  return (
    <div className="d-flex justify-content-center items-center ">
      <Container className="my-4 d-flex flex-column">
        <h2 className="mb-4 text-center">Orchid Shop</h2>
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
                <OrchidCard orchid={orchid} handleViewDetail={setItem} />
              </Col>
            );
          })}
        </Row>
      </Container>
      {/* <ModalStyled item={item} /> */}
      {/* <ProductDetail item={item} /> */}
    </div>
  );
}
