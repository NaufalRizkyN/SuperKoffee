"use client";

import { useState, FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { siteConfig, branches } from "@/lib/data";

export default function KontakPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-soft/50 pt-28 pb-12 md:pt-32 md:pb-16">
        <div className="container-content text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            Kontak
          </p>
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-primary md:text-5xl">
            Hubungi Kami
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-charcoal/70">
            Ada pertanyaan, ingin reservasi, atau sekadar menyapa? Kami siap
            membantu.
          </p>
        </div>
      </section>

      <section className="section-padding !pt-8">
        <div className="container-content">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-semibold text-primary">
                Informasi Kontak
              </h2>
              <ul className="mt-6 space-y-5 text-sm text-charcoal/80">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="mt-0.5 shrink-0 text-accent" />
                  <div>
                    <p className="font-medium text-primary">Alamat Pusat</p>
                    <p className="mt-0.5">{siteConfig.address}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={20} className="mt-0.5 shrink-0 text-accent" />
                  <div>
                    <p className="font-medium text-primary">Telepon</p>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="mt-0.5 hover:text-primary"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={20} className="mt-0.5 shrink-0 text-accent" />
                  <div>
                    <p className="font-medium text-primary">Email</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="mt-0.5 hover:text-primary"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={20} className="mt-0.5 shrink-0 text-accent" />
                  <div>
                    <p className="font-medium text-primary">Jam Operasional</p>
                    <p className="mt-0.5">Setiap hari 08:00 – 22:00</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                    `Halo ${siteConfig.name}, saya ingin bertanya.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent w-full justify-center sm:w-auto"
                >
                  Chat via WhatsApp
                </a>
              </div>

              <div className="mt-10">
                <h3 className="font-heading text-lg font-semibold text-primary">
                  Cabang Lain
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-charcoal/70">
                  {branches.map((b) => (
                    <li key={b.id}>
                      <span className="font-medium text-primary">{b.name}</span>
                      <br />
                      {b.address}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-soft bg-white p-6 md:p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle size={48} className="text-sage" />
                    <h3 className="mt-4 font-heading text-xl font-semibold text-primary">
                      Pesan Terkirim!
                    </h3>
                    <p className="mt-2 text-sm text-charcoal/70">
                      Terima kasih. Tim kami akan segera menghubungi Anda.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="btn-secondary mt-6"
                    >
                      Kirim Pesan Lain
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-heading text-2xl font-semibold text-primary">
                      Kirim Pesan
                    </h2>
                    <p className="mt-1 text-sm text-charcoal/60">
                      Isi formulir di bawah, kami akan membalas secepatnya.
                    </p>
                    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="nama"
                            className="mb-1.5 block text-sm font-medium text-primary"
                          >
                            Nama Lengkap *
                          </label>
                          <input
                            id="nama"
                            name="nama"
                            type="text"
                            required
                            className="w-full rounded-lg border border-soft bg-cream/50 px-4 py-2.5 text-sm outline-none transition focus:border-accent focus:ring-1 focus:ring-accent"
                            placeholder="Nama Anda"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="mb-1.5 block text-sm font-medium text-primary"
                          >
                            Email *
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="w-full rounded-lg border border-soft bg-cream/50 px-4 py-2.5 text-sm outline-none transition focus:border-accent focus:ring-1 focus:ring-accent"
                            placeholder="email@contoh.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="telepon"
                          className="mb-1.5 block text-sm font-medium text-primary"
                        >
                          Nomor Telepon
                        </label>
                        <input
                          id="telepon"
                          name="telepon"
                          type="tel"
                          className="w-full rounded-lg border border-soft bg-cream/50 px-4 py-2.5 text-sm outline-none transition focus:border-accent focus:ring-1 focus:ring-accent"
                          placeholder="08xxxxxxxxxx"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="pesan"
                          className="mb-1.5 block text-sm font-medium text-primary"
                        >
                          Pesan *
                        </label>
                        <textarea
                          id="pesan"
                          name="pesan"
                          required
                          rows={5}
                          className="w-full resize-none rounded-lg border border-soft bg-cream/50 px-4 py-2.5 text-sm outline-none transition focus:border-accent focus:ring-1 focus:ring-accent"
                          placeholder="Tulis pesan Anda di sini..."
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary w-full justify-center disabled:opacity-60"
                      >
                        {loading ? (
                          "Mengirim..."
                        ) : (
                          <>
                            <Send size={16} />
                            Kirim Pesan
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
