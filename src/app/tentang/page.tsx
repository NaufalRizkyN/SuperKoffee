import Image from "next/image";
import { Leaf, Target, Eye, Award } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: `Cerita di balik ${siteConfig.name} — filosofi, visi misi, dan komitmen kami pada rasa lokal yang modern.`,
};

const values = [
  {
    icon: Leaf,
    title: "Bahan Berkualitas",
    text: "Kami hanya menggunakan bahan segar harian dari pemasok terpercaya.",
  },
  {
    icon: Target,
    title: "Konsistensi Rasa",
    text: "Setiap hidangan dibuat dengan standar resep yang terjaga ketat.",
  },
  {
    icon: Eye,
    title: "Pengalaman Menyeluruh",
    text: "Dari suasana ruang hingga pelayanan, kami perhatikan setiap detail.",
  },
  {
    icon: Award,
    title: "Standar Higienis",
    text: "Sertifikasi Halal MUI dan proses dapur berstandar kebersihan tinggi.",
  },
];

export default function TentangPage() {
  return (
    <>
      {/* Hero small */}
      <section className="relative flex min-h-[45vh] items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&h=800&fit=crop"
          alt="Dapur Super Koffee"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/55" />
        <div className="container-content relative z-10 py-24 text-center text-cream">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-cream/80">
            Tentang Kami
          </p>
          <h1 className="font-heading text-4xl font-bold md:text-5xl">
            Cerita Super Koffee
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-cream">
        <div className="container-content">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              eyebrow="Awal Mula"
              title="Dari Kecintaan pada Rasa Lokal"
              description=""
            />
            <div className="space-y-4 text-left text-base leading-relaxed text-charcoal/80">
              <p>
                Super Koffee hadir di Surabaya dengan satu tujuan sederhana:
                menyajikan kopi yang enak, konsisten, dan mudah dijangkau —
                mulai dari cabang di jalan raya hingga di dalam stasiun kereta.
              </p>
              <p>
                Signature kami, <strong>Kopi Susu Maksud Hati</strong>, menjadi
                favorit pelanggan. Dari satu outlet hingga multi-cabang, kami
                terus menjaga rasa dan pelayanan agar setiap kunjungan terasa
                familiar dan menyenangkan.
              </p>
              <p>
                Tagline kami — <em>Cerita Hati Melalui Kopi</em> — mencerminkan
                harapan bahwa setiap cangkir bisa jadi bagian dari cerita harian
                Anda, baik sebelum kerja, saat transit, maupun saat berkumpul
                dengan teman.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission */}
      <section className="section-padding bg-soft/40">
        <div className="container-content">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 md:p-10">
              <h2 className="font-heading text-2xl font-semibold text-primary">
                Visi
              </h2>
              <p className="mt-4 leading-relaxed text-charcoal/75">
                Menjadi coffee shop pilihan masyarakat Surabaya — dikenal karena
                rasa kopi yang konsisten, harga bersahabat, dan lokasi yang mudah
                dijangkau di berbagai titik kota.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 md:p-10">
              <h2 className="font-heading text-2xl font-semibold text-primary">
                Misi
              </h2>
              <ul className="mt-4 space-y-2 leading-relaxed text-charcoal/75">
                <li>• Menjaga kualitas & konsistensi rasa di semua cabang</li>
                <li>• Membuka akses kopi enak di lokasi strategis (termasuk stasiun)</li>
                <li>• Memberikan pengalaman ramah dan harga affordable</li>
                <li>• Terus berkembang bersama komunitas Surabaya</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-cream">
        <div className="container-content">
          <SectionHeading
            eyebrow="Nilai Kami"
            title="Yang Kami Pegang Teguh"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-xl border border-soft bg-white p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <v.icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-primary">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-charcoal/70">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-soft/40">
        <div className="container-content text-center">
          <SectionHeading
            eyebrow="Sertifikasi"
            title="Standar yang Kami Jaga"
            description="Kepercayaan Anda adalah prioritas kami."
          />
          <div className="flex flex-wrap justify-center gap-6">
            {["Halal MUI", "BPOM", "Higienis Bersertifikat"].map((cert) => (
              <div
                key={cert}
                className="flex h-24 w-40 items-center justify-center rounded-xl border border-soft bg-white px-4 text-center text-sm font-medium text-primary shadow-sm"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
