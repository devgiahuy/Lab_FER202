"use client";
import React from "react";
import { ListOfOrchids } from "@/data/ListOfOrchids";
import OrchidCard from "@/components/styled/OrchidCard";

/**
 * 🌸 OrchidsCardList
 * Hiển thị toàn bộ bộ sưu tập hoa lan Orchide
 * - Dùng Tailwind responsive grid
 * - Hỗ trợ dark mode
 * - Giao diện HeroUI đồng bộ
 */
export default function OrchidsCardList() {
  const orchids = ListOfOrchids;

  return (
    <section
      className="
        py-12 
        bg-green-50 dark:bg-gray-900
        transition-colors duration-300
      "
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* 🌿 Tiêu đề */}
        <div className="text-center mb-10">
          <h2
            className="
              text-3xl font-extrabold text-green-600 
              dark:text-green-400 mb-3
            "
          >
            🌸 Our Orchids Collection
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            Discover the natural beauty of Orchide – pure, vibrant, and unique.
          </p>
        </div>

        {/* 🪴 Danh sách thẻ hoa lan */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
            gap-6 place-items-center
          "
        >
          {orchids.map((orchid) => (
            <OrchidCard key={orchid.id} orchid={orchid} />
          ))}
        </div>
      </div>
    </section>
  );
}
