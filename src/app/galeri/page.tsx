"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryImages } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

const filters = [
  { key: "all", label: "Semua" },
  { key: "produk", label: "Produk" },
  { key: "outlet", label: "Outlet" },
  { key: "event", label: "Event" },
];

export default function GaleriPage() {
  const [active, setActive] = useState("all");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    active === "all"
      ? galleryImages
      : galleryImages.filter((g) => g.category === active);

  return (
    <>
      <section className="bg-soft/50 pt-28 pb-12 md:pt-32 md:pb-16">
        <div className="container-content text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            Galeri
          </p>
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-primary md:text-5xl">
            Momen di Super Koffee
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-charcoal/70">
            Lihat suasana outlet, hidangan andalan, dan momen spesial kami.
          </p>
        </div>
      </section>

      <section className="section-padding !pt-8">
        <div className="container-content">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setActive(f.key)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                  active === f.key
                    ? "bg-primary text-cream"
                    : "bg-soft text-charcoal hover:bg-soft/80"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {filtered.map((img) => (
              <button
                key={img.id}
                type="button"
                className="mb-4 block w-full overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
                onClick={() => setLightbox(img.image)}
              >
                <Image
                  src={img.image}
                  alt={img.alt}
                  width={800}
                  height={600}
                  className="w-full object-cover transition duration-300 hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Simple lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary/90 p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full bg-cream/20 px-3 py-1 text-sm text-cream"
            onClick={() => setLightbox(null)}
          >
            Tutup
          </button>
          <div className="relative max-h-[90vh] max-w-4xl">
            <Image
              src={lightbox}
              alt="Galeri preview"
              width={1200}
              height={800}
              className="max-h-[90vh] w-auto rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
