import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function FooterOrchide() {
  return (
    <footer
      className="bg-light text-dark mt-5 border-top"
      style={{
        borderTopLeftRadius: "16px",
        borderTopRightRadius: "16px",
      }}
    >
      <Container className="py-4">
        <Row className="gy-3">
          {/* Logo & mô tả */}
          <Col md={4} sm={12}>
            <h5 className="fw-bold text-success">🌿 Orchide</h5>
            <p className="small text-muted">
              Orchide mang đến những sản phẩm tự nhiên, tinh tế và thân thiện
              với môi trường. Cảm ơn bạn đã đồng hành cùng chúng tôi 🌸
            </p>
          </Col>

          {/* Liên kết nhanh */}
          <Col md={4} sm={6}>
            <h6 className="fw-semibold">Liên kết nhanh</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-decoration-none text-secondary">
                  Trang chủ
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-decoration-none text-secondary"
                >
                  Giới thiệu
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="text-decoration-none text-secondary"
                >
                  Sản phẩm
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-decoration-none text-secondary"
                >
                  Liên hệ
                </a>
              </li>
            </ul>
          </Col>

          {/* Mạng xã hội */}
          <Col md={4} sm={6}>
            <h6 className="fw-semibold">Mạng xã hội</h6>
            <div className="d-flex gap-3 fs-5">
              <a href="#" className="text-success">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-success">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-success fs-4">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </Col>
        </Row>

        <hr className="my-3" />
        <div className="text-center small text-muted">
          © 2025 Orchide. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
