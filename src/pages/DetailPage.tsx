"use client";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardBody, Image, Button } from "@heroui/react";
import {
  MapPin,
  Palette,
  Flower2,
  Star,
  Heart,
  TreePine,
  ShoppingCart,
  ArrowLeft,
} from "lucide-react";

export default function DetailPage() {
  const orchid = useSelector((state: any) => state.selectedOrchid.current);

  if (!orchid) {
    return (
      <div className="flex flex-col justify-center items-center py-20 text-center">
        <h4 className="text-gray-600 dark:text-gray-400 text-lg">
          Không tìm thấy thông tin hoa lan 🌸
        </h4>
        <Link
          to="/home"
          className="
            mt-4 px-5 py-2 rounded-full bg-green-600 text-white 
            hover:bg-green-700 transition-colors font-semibold shadow-sm
          "
        >
          Quay lại trang chủ
        </Link>
      </div>
    );
  }

  return (
    <section
      className="
        max-w-6xl mx-auto my-12 px-6 py-10 
        rounded-3xl shadow-sm 
        bg-gradient-to-b from-green-50 to-white 
        dark:from-gray-900 dark:to-gray-950 
        border border-green-100 dark:border-gray-800
        transition-colors duration-300
      "
    >
      {/* 🌿 Tiêu đề */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-green-600 dark:text-green-400">
          🌸 Thông tin chi tiết
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Tất cả những gì bạn cần biết về loài lan này
        </p>
      </div>

      {/* 🪴 Nội dung chính */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Hình ảnh */}
        <Card shadow="sm" className="bg-white dark:bg-gray-800 rounded-2xl">
          <Image
            src={orchid.image}
            alt={orchid.name}
            radius="lg"
            className="
              w-full h-[420px] object-contain 
              transition-transform duration-500 hover:scale-105
            "
          />
        </Card>

        {/* Thông tin mô tả */}
        <div>
          <h2 className="text-2xl font-bold mb-3 text-green-600 dark:text-green-400">
            {orchid.name}
          </h2>

          <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            {(orchid.price ?? 590000).toLocaleString()} VNĐ{" "}
            <span className="text-gray-500 dark:text-gray-400 text-base font-normal">
              / Cây
            </span>
          </h4>

          {/* Thông tin chi tiết */}
          <div
            className="
              bg-white dark:bg-gray-800 border border-green-100 dark:border-gray-700
              rounded-2xl p-5 shadow-sm text-gray-700 dark:text-gray-300
            "
          >
            <div className="grid grid-cols-2 gap-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="text-green-500" size={18} />
                <b>Nguồn gốc:</b> {orchid.origin}
              </div>
              <div className="flex items-center gap-2">
                <Palette className="text-green-500" size={18} />
                <b>Màu sắc:</b> {orchid.color}
              </div>
              <div className="flex items-center gap-2">
                <Flower2 className="text-green-500" size={18} />
                <b>Loại:</b> {orchid.category ?? "Không rõ"}
              </div>
              <div className="flex items-center gap-2">
                <Star className="text-yellow-500" size={18} />
                <b>Đánh giá:</b> {orchid.rating} ⭐
              </div>
              <div className="flex items-center gap-2">
                <Heart className="text-red-500" size={18} />
                <b>Lượt thích:</b> {orchid.numberOfLike}
              </div>
              <div className="flex items-center gap-2">
                <TreePine className="text-green-600" size={18} />
                <b>Đặc biệt:</b> {orchid.isSpecial ? "Có" : "Không"}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <Button
              color="success"
              radius="full"
              className="flex-1 font-semibold"
              startContent={<ShoppingCart size={18} />}
            >
              Đặt Mua Ngay
            </Button>
            <Link
              to="/home"
              className="
                flex items-center justify-center gap-2
                border border-green-500 text-green-600 dark:text-green-400
                rounded-full px-5 py-2 font-semibold hover:bg-green-50 dark:hover:bg-gray-800
                transition-colors
              "
            >
              <ArrowLeft size={18} /> Quay lại
            </Link>
          </div>
        </div>
      </div>

      {/* 🎥 Video */}
      <div className="mt-10 pt-8 border-t border-green-200 dark:border-gray-700">
        <h4 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-5 text-center">
          🎥 Video mô tả chi tiết
        </h4>
        <div className="flex justify-center">
          <div
            className="
              rounded-2xl overflow-hidden shadow-md border border-green-100 dark:border-gray-700
              w-[560px] h-[315px] max-w-full
            "
          >
            <iframe
              src={orchid.linkVideo}
              title="Orchid Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full block"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
