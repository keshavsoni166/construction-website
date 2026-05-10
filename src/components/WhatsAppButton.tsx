"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {

  const phoneNumber = "919630787857"; // Replace with your WhatsApp number (in international format)

  const message =
    "Hello! I want to discuss a construction project.";

  const whatsappURL =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (

    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-[9999]

        flex
        items-center
        gap-3

        bg-[#25D366]
        hover:scale-110

        px-5
        py-4

        rounded-full

        shadow-2xl

        transition
        duration-300
      "
    >

      <FaWhatsapp className="text-3xl text-white" />

      <span className="text-white font-medium hidden md:block">
        Chat with us
      </span>

    </a>
  );
}