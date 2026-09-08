"use client";

import { useState } from "react";
import MenuCard from "@/components/MenuCard";
import SectionHeading from "@/components/SectionHeading";
import { categories, menuItems } from "@/lib/data";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<number | "all">("all");

  const filtered =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((m) => m.categoryId === activeCategory);

  return (
    <>
      {/* Header */}
      <section className="bg-soft/50 pt-28 pb-12 md:pt-32 md:pb-16">
        <div className="container-content text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            Menu Kami
          </p>
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-primary md:text-5xl">
            Menu Super Koffee
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-charcoal/70">
            Jelajahi pilihan hidangan dan minuman kami. Semua dibuat segar
            setiap hari dengan bahan pilihan.
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="section-padding !pt-8">
        <div className="container-content">
          {/* Category tabs */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                activeCategory === "all"
                  ? "bg-primary text-cream"
                  : "bg-soft text-charcoal hover:bg-soft/80"
              }`}
            >
              Semua
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                  activeCategory === cat.id
                    ? "bg-primary text-cream"
                    : "bg-soft text-charcoal hover:bg-soft/80"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-16 text-center text-charcoal/60">
              Belum ada menu di kategori ini.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
