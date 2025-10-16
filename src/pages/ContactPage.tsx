"use client";
import React from "react";
import { Input, Textarea, Button, Card, CardBody } from "@heroui/react";
import {
  Facebook,
  Instagram,
  Youtube,
  Send,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

/**
 * 🌿 ContactPage
 * - Dùng Tailwind + HeroUI
 * - Responsive + Dark mode + Form đẹp
 */
export default function ContactPage() {
  return (
    <section
      className="
        max-w-6xl mx-auto my-12 px-6 py-10
        bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-950
        rounded-3xl shadow-sm border border-green-100 dark:border-gray-800
        transition-colors duration-300
      "
    >
      {/* Tiêu đề */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-green-600 dark:text-green-400">
          Liên Hệ Với Orchide
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Hãy để lại thông tin, chúng tôi sẽ phản hồi sớm nhất 🌸
        </p>
      </div>

      {/* Lưới chia đôi 2 phần */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 🌿 Form liên hệ */}
        <Card
          shadow="sm"
          className="border border-green-100 dark:border-gray-800"
        >
          <CardBody className="p-6">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Gửi liên hệ thành công 🌿");
              }}
              className="flex flex-col gap-4"
            >
              <Input
                label="Họ và tên"
                placeholder="Nhập họ tên của bạn"
                radius="full"
                variant="bordered"
                color="success"
                required
              />
              <Input
                type="email"
                label="Email"
                placeholder="name@gmail.com"
                radius="full"
                variant="bordered"
                color="success"
                required
              />
              <Textarea
                label="Nội dung liên hệ"
                placeholder="Hãy để lại lời nhắn cho chúng tôi..."
                minRows={4}
                radius="lg"
                variant="bordered"
                color="success"
              />
              <Button
                type="submit"
                color="success"
                radius="full"
                className="mt-2 font-semibold"
                startContent={<Send size={18} />}
              >
                Gửi Liên Hệ
              </Button>
            </form>
          </CardBody>
        </Card>

        {/* 🌼 Thông tin liên hệ */}
        <Card
          shadow="sm"
          className="border border-green-100 dark:border-gray-800"
        >
          <CardBody className="p-6 flex flex-col justify-center space-y-3">
            <h5 className="text-green-600 dark:text-green-400 font-bold text-lg mb-3">
              🌿 Thông Tin Liên Hệ
            </h5>

            <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <MapPin size={18} className="text-green-500" /> 123 FPT, TP.HCM
            </p>
            <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <Phone size={18} className="text-green-500" /> (+84) 123 456 789
            </p>
            <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <Mail size={18} className="text-green-500" />{" "}
              orchid.support@gmail.com
            </p>

            {/* Mạng xã hội */}
            <div className="flex gap-5 mt-4">
              <a
                href="#"
                title="Facebook"
                className="text-green-600 dark:text-green-400 hover:scale-110 transition-transform"
              >
                <Facebook size={22} />
              </a>
              <a
                href="#"
                title="Instagram"
                className="text-green-600 dark:text-green-400 hover:scale-110 transition-transform"
              >
                <Instagram size={22} />
              </a>
              <a
                href="#"
                title="YouTube"
                className="text-green-600 dark:text-green-400 hover:scale-110 transition-transform"
              >
                <Youtube size={22} />
              </a>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
