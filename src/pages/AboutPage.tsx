"use client";
import React from "react";

/**
 * 🌿 AboutPage
 * Trang giới thiệu Orchide Shop
 * - Dùng TailwindCSS + HeroUI
 * - Hỗ trợ dark mode
 * - Responsive tự nhiên
 */
export default function AboutPage() {
  return (
    <section
      className="
        max-w-6xl mx-auto my-12 px-6 py-10 rounded-3xl shadow-sm
        bg-gradient-to-b from-green-50 to-white 
        dark:from-gray-900 dark:to-gray-950
        transition-colors duration-300
      "
    >
      {/* Tiêu đề */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-green-600 dark:text-green-400">
          🌿 Về Orchide Shop
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
          Nơi lan tỏa vẻ đẹp tự nhiên qua từng cánh hoa.
        </p>
      </div>

      {/* Nội dung chính */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Ảnh minh họa */}
        <div className="flex justify-center">
          <img
            src="https://24hstore.vn/upload_images/images/hinh-nen-hoa-linh-lan/hinh-nen-hoa-linh-lan-cute-4.jpg"
            alt="Orchid garden"
            className="
              w-full max-w-md h-[380px] object-cover rounded-3xl shadow-sm
              transform transition-transform duration-500 hover:scale-105
            "
          />
        </div>

        {/* Mô tả */}
        <div className="px-2">
          <h4 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400">
            Sứ mệnh của chúng tôi 🌸
          </h4>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Orchide Shop ra đời với mong muốn mang đến những bông hoa lan chất
            lượng, tinh tế và tràn đầy sức sống. Chúng tôi hợp tác cùng các nhà
            vườn uy tín trong và ngoài nước để mang đến cho bạn trải nghiệm tốt
            nhất.
          </p>

          <ul className="text-gray-700 dark:text-gray-400 text-sm space-y-2">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">🌼</span>
              Chất lượng luôn đặt lên hàng đầu.
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">😊</span>
              Đội ngũ yêu lan, am hiểu về từng loài.
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">💚</span>
              Lan tỏa vẻ đẹp thiên nhiên đến mọi nhà.
            </li>
          </ul>
        </div>
      </div>

      {/* Trích dẫn */}
      <div className="text-center mt-10">
        <blockquote
          className="
            text-green-600 dark:text-green-400 italic
            border-l-4 border-green-500 dark:border-green-400
            pl-4 mx-auto max-w-xl
          "
        >
          “Hoa lan không chỉ là một loài hoa — mà là niềm đam mê và nghệ thuật.”
        </blockquote>
      </div>
    </section>
  );
}
