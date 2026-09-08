import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { branches, siteConfig } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lokasi & Cabang",
  description: `Temukan cabang ${siteConfig.name} terdekat. Alamat, jam operasional, dan kontak lengkap.`,
};

export default function LokasiPage() {
  return (
    <>
      <section className="bg-soft/50 pt-28 pb-12 md:pt-32 md:pb-16">
        <div className="container-content text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            Lokasi
          </p>
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-primary md:text-5xl">
            Cabang Super Koffee
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-charcoal/70">
            Kunjungi salah satu outlet kami di Surabaya. Kami tunggu kedatangan
            Anda.
          </p>
        </div>
      </section>

      <section className="section-padding !pt-8">
        <div className="container-content space-y-12">
          {branches.map((b) => (
            <div
              key={b.id}
              id={b.slug}
              className="scroll-mt-28 overflow-hidden rounded-2xl border border-soft bg-white"
            >
              <div className="grid lg:grid-cols-2">
                {/* Map placeholder / embed */}
                <div className="relative min-h-[280px] bg-soft">
                  <iframe
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(
                      b.address
                    )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Peta ${b.name}`}
                  />
                </div>

                <div className="flex flex-col justify-center p-6 md:p-10">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="font-heading text-2xl font-semibold text-primary">
                      {b.name}
                    </h2>
                    <span
                      className={`badge shrink-0 ${
                        b.isOpen
                          ? "bg-sage/20 text-sage"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {b.isOpen ? "Buka Sekarang" : "Tutup"}
                    </span>
                  </div>

                  <ul className="mt-5 space-y-3 text-sm text-charcoal/80">
                    <li className="flex items-start gap-3">
                      <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
                      <span>{b.address}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Clock size={18} className="shrink-0 text-accent" />
                      <span>{b.hours} (Setiap hari)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone size={18} className="shrink-0 text-accent" />
                      <a
                        href={`tel:${b.phone}`}
                        className="hover:text-primary"
                      >
                        {b.phone}
                      </a>
                    </li>
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={`https://wa.me/${b.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <MessageCircle size={16} />
                      WhatsApp
                    </a>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        b.address
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      <MapPin size={16} />
                      Buka di Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
