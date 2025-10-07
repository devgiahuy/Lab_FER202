import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function FooterOrchide() {
  return (
    <footer
      className="mt-5 border-top shadow-sm"
      style={{
        background: "linear-gradient(180deg, #e8f3ec 0%, #ffffff 100%)",
        borderTopLeftRadius: "16px",
        borderTopRightRadius: "16px",
        transition: "background 0.3s ease",
      }}
    >
      <Container className="py-4">
        <Row className="gy-3">
          {/* Logo + mô tả */}
          <Col md={4} sm={12}>
            <h5 className="fw-bold text-success">🌿 Orchide</h5>
            <p className="small text-muted">
              Orchide mang đến những sản phẩm tự nhiên, tinh tế và thân thiện
              với môi trường. Cảm ơn bạn đã đồng hành cùng chúng tôi 🌸
            </p>
          </Col>

          {/* Liên kết nhanh */}
          <Col md={4} sm={6}>
            <h6 className="fw-semibold mb-3">Liên kết nhanh</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/home" className="text-success text-decoration-none">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-success text-decoration-none">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link
                  to="/natural"
                  className="text-success text-decoration-none"
                >
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-success text-decoration-none"
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </Col>

          {/* Mạng xã hội */}
          <Col md={4} sm={6}>
            <h6 className="fw-semibold mb-3">Kết nối với chúng tôi</h6>
            <div className="d-flex gap-3 fs-5">
              <Link
                to="/home"
                className="text-success hover-icon"
                title="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </Link>
              <Link
                to="/home"
                className="text-success hover-icon"
                title="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </Link>
              <Link
                to="/home"
                className="text-success hover-icon"
                title="YouTube"
              >
                <i className="bi bi-youtube"></i>
              </Link>
            </div>
          </Col>
        </Row>

        <hr className="my-4" />
        <div className="text-center small text-muted">
          © 2025 <span className="fw-semibold text-success">Orchide</span>. All
          rights reserved.
        </div>
      </Container>
    </footer>
  );
}
