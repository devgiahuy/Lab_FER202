import React from "react";

export default function AboutPage() {
  return (
    <div
      className="container my-5   rounded shadow-sm"
      style={{
        backgroundColor: "#F4F4F4",
        marginTop: "40px",
        maxWidth: "1440px",
        minHeight: "200px",
      }}
    >
      <div className="text-center mb-5">
        <h2 className="fw-bold text-success">🌿 Về Chúng Tôi</h2>
        <p className="text-secondary fs-5">
          Orchid Shop – Nơi lan tỏa vẻ đẹp tự nhiên qua từng cánh hoa.
        </p>
      </div>

      <div className="row align-items-center gy-4">
        <div
          className="col-md-6"
          style={{ paddingLeft: "10vh", width: "50vh" }}
        >
          <img
            src="https://live.staticflickr.com/2883/9382584371_54ce992224_b.jpg"
            alt="Orchid garden"
            className="img-fluid rounded shadow"
            style={{
              maxHeight: "400px",
              maxWidth: "420px",
              objectFit: "contain",
            }}
          />
        </div>
        <div className="col-md-6">
          <h4 className="fw-semibold mb-3 text-dark">Sứ mệnh của chúng tôi</h4>
          <p className="text-secondary">
            Orchid Shop ra đời với mong muốn mang đến những bông hoa lan chất
            lượng, tinh tế và tràn đầy sức sống. Chúng tôi hợp tác cùng các nhà
            vườn uy tín trong và ngoài nước để mang đến cho bạn trải nghiệm tốt
            nhất.
          </p>
          <ul className="list-unstyled text-secondary">
            <li>🌸 Chất lượng luôn đặt lên hàng đầu.</li>
            <li>🌸 Đội ngũ yêu lan, am hiểu về từng loài.</li>
            <li>🌸 Lan tỏa vẻ đẹp thiên nhiên đến mọi nhà.</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-5">
        <blockquote className="blockquote text-success">
          “Hoa lan không chỉ là một loài hoa — mà là niềm đam mê và nghệ thuật.”
        </blockquote>
      </div>
    </div>
  );
}
