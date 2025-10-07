import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

export default function DetailPage() {
  const orchid = useSelector((state) => state.selectedOrchid.current);

  if (!orchid) {
    return (
      <div className="container text-center py-5">
        <h4 className="text-secondary">Không tìm thấy thông tin hoa lan 🌸</h4>
        <Link to="/home" className="btn btn-success mt-3">
          Quay lại trang chủ
        </Link>
      </div>
    );
  }

  return (
    <section
      className="container rounded-4 shadow-sm py-5 my-5 px-4"
      style={{
        background: "linear-gradient(180deg, #e8f3ec 0%, #ffffff 100%)",
        maxWidth: "1200px",
      }}
    >
      {/* Tiêu đề */}
      <div className="text-center mb-5">
        <h2 className="fw-bold text-success">🌸 Thông tin chi tiết</h2>
        <p className="text-muted">
          Tất cả những gì bạn cần biết về loài lan này
        </p>
      </div>

      <div className="row g-4 align-items-center">
        {/* Hình ảnh */}
        <div className="col-lg-6 col-md-6 col-sm-12 text-center">
          <Card className="border-0 shadow-sm rounded-4 p-3 bg-white">
            <Card.Img
              src={orchid.image}
              alt={orchid.name}
              className="img-fluid rounded-4"
              style={{
                maxHeight: "420px",
                objectFit: "contain",
                transition: "transform 0.4s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.04)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </Card>
        </div>

        {/* Thông tin mô tả */}
        <div className="col-lg-6 col-md-6 col-sm-12">
          <h2 className="fw-bold mb-3 text-success">{orchid.name}</h2>

          <h4 className="text-dark fw-bold mb-3">
            {(orchid.price ?? 590000).toLocaleString()} VNĐ{" "}
            <small className="text-muted fs-6 fw-normal">/ Cây</small>
          </h4>

          {/* <div className="bg-light rounded-pill px-4 py-2 d-inline-block mb-3 shadow-sm">
            <small className="text-secondary">
              Miễn phí vận chuyển toàn quốc
            </small>
          </div> */}

          <div className="border rounded-4 p-4 mb-4 bg-white shadow-sm">
            <div className="row gy-3">
              <div className="col-6">
                <i className="bi bi-geo-alt-fill me-2 text-success"></i>
                <b>Nguồn gốc:</b> {orchid.origin}
              </div>
              <div className="col-6">
                <i className="bi bi-palette-fill me-2 text-success"></i>
                <b>Màu sắc:</b> {orchid.color}
              </div>
              <div className="col-6">
                <i className="bi bi-flower1 me-2 text-success"></i>
                <b>Loại:</b> {orchid.category}
              </div>
              <div className="col-6">
                <i className="bi bi-star-fill text-warning me-2"></i>
                <b>Đánh giá:</b> {orchid.rating} ⭐
              </div>
              <div className="col-6">
                <i className="bi bi-heart-fill text-danger me-2"></i>
                <b>Lượt thích:</b> {orchid.numberOfLike}
              </div>
              <div className="col-6">
                <i className="bi bi-tree-fill text-success me-2"></i>
                <b>Đặc biệt:</b> {orchid.isSpecial ? "Có" : "Không"}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="d-flex flex-wrap gap-3">
            <button className="btn btn-success flex-grow-1 py-2 fw-semibold rounded-pill shadow-sm">
              Đặt Mua Ngay
            </button>
            <Link
              to="/home"
              className="btn btn-outline-success fw-semibold px-4 rounded-pill"
            >
              Quay lại
            </Link>
          </div>
        </div>
      </div>

      {/* Video */}
      <div className="mt-5 pt-4 border-top">
        <h4 className="fw-semibold text-success mb-3 text-center">
          🎥 Video mô tả chi tiết
        </h4>
        <div className="d-flex justify-content-center align-items-center">
          <div
            className="shadow-lg rounded-4 overflow-hidden border border-success-subtle"
            style={{
              width: "560px",
              height: "315px",
              maxWidth: "100%",
            }}
          >
            <iframe
              src={orchid.linkVideo}
              title="Orchid Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                width: "100%",
                height: "100%",
                display: "block",
              }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
