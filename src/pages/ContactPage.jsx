import React from "react";
import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <div
      className="container py-5 px-4 my-5 rounded-4 shadow-sm"
      style={{
        background: "linear-gradient(180deg, #e8f3ec 0%, #ffffff 100%)",
        maxWidth: "1200px",
      }}
    >
      {/* Tiêu đề */}
      <div className="text-center mb-5">
        <h2 className="fw-bold text-success">Liên Hệ Với Orchide</h2>
        <p className="text-muted">
          Hãy để lại thông tin, chúng tôi sẽ phản hồi sớm nhất 🌸
        </p>
      </div>

      <div className="row gy-4">
        {/* Form bên trái */}
        <div className="col-md-6">
          <form className="bg-white p-4 rounded-4 shadow-sm border border-success-subtle">
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-semibold">
                Họ và tên
              </label>
              <input
                type="text"
                className="form-control rounded-pill"
                id="name"
                placeholder="Nhập họ tên của bạn"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">
                Email
              </label>
              <input
                type="email"
                className="form-control rounded-pill"
                id="email"
                placeholder="name@gmail.com"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label fw-semibold">
                Nội dung liên hệ
              </label>
              <textarea
                className="form-control rounded-4"
                id="message"
                rows="4"
                placeholder="Hãy để lại lời nhắn cho chúng tôi..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-success w-100 fw-semibold rounded-pill shadow-sm"
              style={{ backgroundColor: "#3a7055ff", border: "none" }}
            >
              <i className="bi bi-send me-2"></i>Gửi Liên Hệ
            </button>
          </form>
        </div>

        {/* Thông tin bên phải */}
        <div className="col-md-6">
          <div className="bg-white p-4 rounded-4 h-100 shadow-sm border border-success-subtle d-flex flex-column justify-content-center">
            <h5 className="text-success fw-bold mb-3">🌿 Thông Tin Liên Hệ</h5>
            <p className="mb-2 text-secondary">
              <i className="bi bi-geo-alt-fill text-success me-2"></i>
              123 FPT, TP.HCM
            </p>
            <p className="mb-2 text-secondary">
              <i className="bi bi-telephone-fill text-success me-2"></i>
              (+84) 123 456 789
            </p>
            <p className="mb-3 text-secondary">
              <i className="bi bi-envelope-fill text-success me-2"></i>
              orchid.support@gmail.com
            </p>

            <div className="d-flex gap-4 mt-3">
              <a
                href="#"
                className="text-success fs-4 hover-opacity"
                title="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="#"
                className="text-success fs-4 hover-opacity"
                title="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="#"
                className="text-success fs-4 hover-opacity"
                title="YouTube"
              >
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
