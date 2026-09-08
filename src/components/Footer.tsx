import Link from "next/link";
import { Instagram, Facebook, Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/lib/data";

const footerLinks = [
  {
    title: "Navigasi",
    links: [
      { href: "/", label: "Home" },
      { href: "/menu", label: "Menu" },
      { href: "/tentang", label: "Tentang Kami" },
      { href: "/galeri", label: "Galeri" },
    ],
  },
  {
    title: "Informasi",
    links: [
      { href: "/lokasi", label: "Lokasi & Cabang" },
      { href: "/blog", label: "Blog" },
      { href: "/kontak", label: "Kontak" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-soft bg-primary text-cream">
      <div className="container-content section-padding !py-12 md:!py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-heading text-2xl font-semibold">
              {siteConfig.name}
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-cream/70">
              {siteConfig.tagline}
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 transition hover:bg-cream/20"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 transition hover:bg-cream/20"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-cream/90">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream/70 transition hover:text-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact info */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-cream/90">
              Hubungi Kami
            </h4>
            <ul className="space-y-3 text-sm text-cream/70">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-cream">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-cream">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock size={16} className="shrink-0" />
                <span>Setiap hari 08:00 – 22:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-6 text-center text-xs text-cream/50">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
