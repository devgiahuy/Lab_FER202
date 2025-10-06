import React from "react";
import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <div
      className="container my-5 p-4 rounded shadow-sm"
      style={{
        backgroundColor: "#F4F4F4",
        marginTop: "40px",
        maxWidth: "1440px",
        minHeight: "200px",
      }}
    >
      <div className="text-center mb-5">
        <h2 className="fw-bold text-success">Liên Hệ Với Chúng Tôi</h2>
        <p className="text-secondary">
          Hãy để lại thông tin, chúng tôi sẽ phản hồi trong thời gian sớm nhất.
        </p>
      </div>

      <div className="row gy-4">
        {/* Form bên trái */}
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-semibold">
                Họ và tên
              </label>
              <input
                type="text"
                className="form-control"
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
                className="form-control"
                id="email"
                placeholder="name@gmail.com"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label fw-semibold">
                Nội dung liên hệ
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Hãy để lại lời nhắn cho chúng tôi..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-success w-100 fw-semibold">
              Gửi Liên Hệ
            </button>
          </form>
        </div>

        {/* Thông tin liên hệ bên phải */}
        <div className="col-md-6">
          <div className="bg-light p-4 rounded h-100 d-flex flex-column justify-content-center">
            <h5 className="text-success fw-bold mb-3">🌿 Thông Tin Liên Hệ</h5>
            <p className="mb-2">
              <i className="bi bi-geo-alt-fill text-success me-2"></i>
              123 Orchid Street, TP.HCM, Việt Nam
            </p>
            <p className="mb-2">
              <i className="bi bi-telephone-fill text-success me-2"></i>
              (+84) 123 321 345
            </p>
            <p className="mb-3">
              <i className="bi bi-envelope-fill text-success me-2"></i>
              orchid.support@gmail.com
            </p>

            <div className="d-flex gap-3 mt-2">
              <Link href="#" className="text-success fs-4">
                <i className="bi bi-facebook"></i>
              </Link>
              <Link href="#" className="text-success fs-4">
                <i className="bi bi-instagram"></i>
              </Link>
              <Link href="#" className="text-success fs-4">
                <i className="bi bi-youtube"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
