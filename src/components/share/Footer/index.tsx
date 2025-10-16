"use client";
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "@heroui/react";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function FooterOrchide() {
  return (
    <footer
      className="
        mt-10 border-t border-gray-200 dark:border-gray-700
        bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-950
        rounded-t-2xl shadow-sm transition-colors duration-300
      "
    >
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* 🌿 Logo + mô tả */}
          <div>
            <h5 className="text-2xl font-bold text-green-600 mb-2">
              🌿 Orchide
            </h5>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Orchide mang đến những sản phẩm tự nhiên, tinh tế và thân thiện
              với môi trường. Cảm ơn bạn đã đồng hành cùng chúng tôi 🌸
            </p>
          </div>

          {/* 🔗 Liên kết nhanh */}
          <div>
            <h6 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
              Liên kết nhanh
            </h6>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/home"
                  className="text-green-600 dark:text-green-400 hover:underline transition-colors"
                >
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-green-600 dark:text-green-400 hover:underline transition-colors"
                >
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link
                  to="/natural"
                  className="text-green-600 dark:text-green-400 hover:underline transition-colors"
                >
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-green-600 dark:text-green-400 hover:underline transition-colors"
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* 📱 Mạng xã hội */}
          <div>
            <h6 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
              Kết nối với chúng tôi
            </h6>
            <div className="flex gap-4 text-green-600 dark:text-green-400">
              <Link
                to="/home"
                title="Facebook"
                className="hover:text-green-800 dark:hover:text-green-300 transition-transform transform hover:scale-110"
              >
                <Facebook size={22} />
              </Link>
              <Link
                to="/home"
                title="Instagram"
                className="hover:text-green-800 dark:hover:text-green-300 transition-transform transform hover:scale-110"
              >
                <Instagram size={22} />
              </Link>
              <Link
                to="/home"
                title="YouTube"
                className="hover:text-green-800 dark:hover:text-green-300 transition-transform transform hover:scale-110"
              >
                <Youtube size={22} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <hr className="my-8 border-gray-200 dark:border-gray-700" />
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          © 2025{" "}
          <span className="font-semibold text-green-600 dark:text-green-400">
            Orchide
          </span>
          . All rights reserved.
        </div>
      </div>
    </footer>
  );
}
