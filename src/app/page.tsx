import Image from "next/image";
import Link from "next/link";
import { Coffee, MapPin, Smartphone, Heart, Star, ArrowRight } from "lucide-react";
import MenuCard from "@/components/MenuCard";
import SectionHeading from "@/components/SectionHeading";
import {
  siteConfig,
  menuItems,
  features,
  testimonials,
  articles,
  branches,
} from "@/lib/data";

const iconMap = {
  Coffee,
  MapPin,
  Smartphone,
  Heart,
};

export default function HomePage() {
  const featuredMenu = menuItems.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop"
          alt="Interior Super Koffee"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/70" />
        <div className="container-content relative z-10 py-32 text-center text-cream">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-cream/80">
            Coffee Shop Surabaya
          </p>
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-cream/90 md:text-xl">
            {siteConfig.tagline}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/menu" className="btn-accent">
              Lihat Menu
            </Link>
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-cream/40 bg-transparent px-6 py-3 text-sm font-medium text-cream transition hover:bg-cream/10"
            >
              Reservasi
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-cream">
        <div className="container-content">
          <SectionHeading
            eyebrow="Mengapa Kami"
            title="Keunggulan Super Koffee"
            description="Kami percaya makanan enak dimulai dari bahan terbaik dan pelayanan tulus."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => {
              const Icon = iconMap[f.icon as keyof typeof iconMap];
              return (
                <div
                  key={f.title}
                  className="rounded-xl border border-soft bg-white p-6 text-center transition hover:shadow-sm"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-primary">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                    {f.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Menu */}
      <section className="section-padding bg-soft/40">
        <div className="container-content">
          <SectionHeading
            eyebrow="Menu Favorit"
            title="Hidangan Andalan Kami"
            description="Pilihan terbaik yang paling sering dipesan pelanggan."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredMenu.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/menu" className="btn-primary">
              Lihat Semua Menu
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="section-padding bg-cream">
        <div className="container-content">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop"
                alt="Suasana Super Koffee"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                Cerita Kami
              </p>
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-primary md:text-4xl">
                Cerita Hati Melalui Kopi
              </h2>
              <p className="mt-4 leading-relaxed text-charcoal/75">
                Super Koffee hadir untuk menemani hari-hari Anda di Surabaya —
                dari cabang di Manukan dan Wiyung hingga di dalam stasiun
                kereta. Signature kami, Kopi Susu Maksud Hati, jadi pilihan
                banyak pelanggan.
              </p>
              <p className="mt-3 leading-relaxed text-charcoal/75">
                Kami percaya kopi yang enak tidak harus rumit. Rasa konsisten,
                harga bersahabat, dan lokasi yang mudah dijangkau adalah
                komitmen kami.
              </p>
              <Link href="/tentang" className="btn-secondary mt-6">
                Selengkapnya
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-soft/40">
        <div className="container-content">
          <SectionHeading
            eyebrow="Testimoni"
            title="Apa Kata Pelanggan"
            description="Ulasan jujur dari mereka yang sudah merasakan Super Koffee."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.id}
                className="rounded-xl border border-soft bg-white p-6"
              >
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-charcoal/80">
                  &ldquo;{t.text}&rdquo;
                </p>
                <footer className="mt-4 flex items-center gap-3">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <cite className="not-italic text-sm font-medium text-primary">
                    {t.name}
                  </cite>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Blog preview */}
      <section className="section-padding bg-cream">
        <div className="container-content">
          <SectionHeading
            eyebrow="Blog"
            title="Artikel Terbaru"
            description="Tips, resep, dan cerita di balik dapur Super Koffee."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {articles.map((a) => (
              <Link
                key={a.id}
                href={`/blog/${a.slug}`}
                className="group overflow-hidden rounded-xl bg-white transition hover:shadow-md"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={a.thumbnail}
                    alt={a.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <div className="mb-2 flex items-center gap-2 text-xs text-charcoal/60">
                    <span className="font-medium uppercase tracking-wider text-accent">
                      {a.category}
                    </span>
                    <span>·</span>
                    <span>{a.readTime}</span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold leading-snug text-primary group-hover:text-accent transition-colors">
                    {a.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-charcoal/70">
                    {a.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/blog" className="btn-secondary">
              Semua Artikel
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Locations teaser */}
      <section className="section-padding bg-soft/40">
        <div className="container-content">
          <SectionHeading
            eyebrow="Lokasi"
            title="Kunjungi Cabang Kami"
            description="Beberapa lokasi strategis di Surabaya, siap menyambut Anda."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {branches.map((b) => (
              <div
                key={b.id}
                className="rounded-xl border border-soft bg-white p-6"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-heading text-xl font-semibold text-primary">
                    {b.name}
                  </h3>
                  <span
                    className={`badge ${
                      b.isOpen ? "bg-sage/20 text-sage" : "bg-red-100 text-red-700"
                    }`}
                  >
                    {b.isOpen ? "Buka Sekarang" : "Tutup"}
                  </span>
                </div>
                <p className="mt-2 text-sm text-charcoal/70">{b.address}</p>
                <p className="mt-1 text-sm text-charcoal/60">
                  Jam operasional: {b.hours}
                </p>
                <div className="mt-4 flex gap-3">
                  <Link href={`/lokasi#${b.slug}`} className="btn-secondary text-xs px-4 py-2">
                    Lihat Detail
                  </Link>
                  <a
                    href={`https://wa.me/${b.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs px-4 py-2"
                  >
                    Hubungi
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-cream">
        <div className="container-content text-center">
          <h2 className="font-heading text-3xl font-semibold md:text-4xl">
            Siap Ngopi di Super Koffee?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-cream/80">
            Datang langsung, reservasi meja, atau tanyakan menu favorit Anda
            melalui WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/kontak" className="btn-accent">
              Reservasi Sekarang
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-cream/30 px-6 py-3 text-sm font-medium text-cream transition hover:bg-cream/10"
            >
              Lihat Menu
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
