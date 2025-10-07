import React from "react";

export default function AboutPage() {
  return (
    <section
      className="container py-5 my-5 rounded-4 shadow-sm"
      style={{
        background: "linear-gradient(180deg, #e8f3ec 0%, #ffffff 100%)",
        maxWidth: "1300px",
      }}
    >
      {/* Tiêu đề */}
      <div className="text-center mb-5">
        <h2 className="fw-bold text-success">🌿 Về Orchide Shop</h2>
        <p className="text-muted fs-5">
          Nơi lan tỏa vẻ đẹp tự nhiên qua từng cánh hoa.
        </p>
      </div>

      {/* Nội dung chính */}
      <div className="row align-items-center gy-5">
        {/* Ảnh minh họa */}
        <div className="col-md-6 d-flex justify-content-center">
          <img
            src="https://24hstore.vn/upload_images/images/hinh-nen-hoa-linh-lan/hinh-nen-hoa-linh-lan-cute-4.jpg"
            alt="Orchid garden"
            className="img-fluid rounded-4 shadow-sm"
            style={{
              maxHeight: "380px",
              objectFit: "cover",
              transition: "transform 0.4s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.03)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>

        {/* Mô tả */}
        <div className="col-md-6 px-4">
          <h4 className="fw-semibold mb-3 text-success">
            Sứ mệnh của chúng tôi 🌸
          </h4>
          <p className="text-secondary lh-lg">
            Orchide Shop ra đời với mong muốn mang đến những bông hoa lan chất
            lượng, tinh tế và tràn đầy sức sống. Chúng tôi hợp tác cùng các nhà
            vườn uy tín trong và ngoài nước để mang đến cho bạn trải nghiệm tốt
            nhất.
          </p>

          <ul className="list-unstyled text-secondary small ps-2">
            <li className="mb-2">
              <i className="bi bi-flower1 text-success me-2"></i>
              Chất lượng luôn đặt lên hàng đầu.
            </li>
            <li className="mb-2">
              <i className="bi bi-emoji-smile text-success me-2"></i>
              Đội ngũ yêu lan, am hiểu về từng loài.
            </li>
            <li className="mb-2">
              <i className="bi bi-heart text-success me-2"></i>
              Lan tỏa vẻ đẹp thiên nhiên đến mọi nhà.
            </li>
          </ul>
        </div>
      </div>

      {/* Trích dẫn */}
      <div className="text-center mt-5">
        <blockquote className="blockquote text-success fst-italic">
          “Hoa lan không chỉ là một loài hoa — mà là niềm đam mê và nghệ thuật.”
        </blockquote>
      </div>
    </section>
  );
}
