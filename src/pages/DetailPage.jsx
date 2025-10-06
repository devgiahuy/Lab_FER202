import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Card } from "react-bootstrap";

export default function DetailPage() {
  const { id } = useParams();
  const orchid = useSelector((state) => state.selectedOrchid.current);

  if (!orchid) {
    return (
      <div className="text-center py-5">
        <p className="text-danger">Không tìm thấy dữ liệu cho id: {id}</p>
        <Link to="/home" className="btn btn-outline-primary">
          ← Quay lại danh sách
        </Link>
      </div>
    );
  }

  return (
    <div
      className="container rounded"
      style={{
        backgroundColor: "#F4F4F4",
        marginTop: "40px",
        maxWidth: "1440px",
        minHeight: "200px",
      }}
    >
      <div>
        <h2 className="fs-1" style={{ padding: "30px" }}>
          Thông tin chi tiết
        </h2>
      </div>
      <div className="row g-4 align-items-center">
        {/* picture */}
        <div className="col-lg-6 col-md-6 col-sm-12 text-center">
          <Card className="border-2 shadow-md m-3">
            <Card.Img
              src={orchid.image}
              alt={orchid.name}
              className="img-fluid rounded-3"
              style={{
                maxHeight: "420px",
                objectFit: "contain",
                padding: "1rem",
              }}
            />
          </Card>
        </div>

        {/* des*/}
        <div className="col-lg-6 col-md-6 col-sm-12 rounded h-100 w-50">
          <h2 className="fw-bold mb-3 text-dark">{orchid.name}</h2>

          <h4 className="text-success fw-bold mb-3">
            {(orchid.price ?? 590000).toLocaleString()} VNĐ
            <small className="text-muted fs-6 fw-normal">/Cây</small>
          </h4>

          <div className="bg-light rounded px-3 py-2 d-inline-block mb-3">
            <small className="text-secondary">
              Miễn phí vận chuyển toàn quốc
            </small>
          </div>

          <div className="border rounded-3 p-3 mb-4">
            <div className="row gy-2">
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
                <b>Đột biến:</b> {orchid.isSpecial ? "Có" : "Không"}
              </div>
            </div>
          </div>

          {/* button */}
          <div className="d-flex gap-3">
            <button className="btn btn-success flex-grow-1 py-2 fw-semibold">
              Đặt Mua Ngay
            </button>
            <Link to="/" className="btn btn-outline-secondary fw-semibold px-4">
              Quay lại
            </Link>
          </div>
        </div>
      </div>

      <div>
        <h2 className="fs-4" style={{ marginTop: "40px" }}>
          Video miêu tả
        </h2>
      </div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          minHeight: "60vh",
        }}
      >
        <div
          className="shadow-lg rounded overflow-hidden"
          style={{
            width: "560px",
            height: "400px",
            border: "4px solid #fff",
          }}
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/VVQ0p-9PdWM?si=8XakEDEJp0bD4K_N"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
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
  );
}
