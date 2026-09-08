"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    `Halo ${siteConfig.name}, saya ingin bertanya tentang menu/reservasi.`
  );
  const url = `https://wa.me/${siteConfig.whatsapp}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" />
    </a>
  );
}
