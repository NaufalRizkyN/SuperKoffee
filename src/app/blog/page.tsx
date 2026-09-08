import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/data";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description: `Artikel, tips, dan resep dari ${siteConfig.name}. Konten seputar kuliner, kopi, dan di balik dapur.`,
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-soft/50 pt-28 pb-12 md:pt-32 md:pb-16">
        <div className="container-content text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            Blog
          </p>
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-primary md:text-5xl">
            Artikel & Cerita
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-charcoal/70">
            Tips kuliner, resep, dan kisah di balik dapur Super Koffee.
          </p>
        </div>
      </section>

      <section className="section-padding !pt-8">
        <div className="container-content">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <Link
                key={a.id}
                href={`/blog/${a.slug}`}
                className="group overflow-hidden rounded-xl border border-soft bg-white transition hover:shadow-md"
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
                    <time dateTime={a.publishedAt}>
                      {new Date(a.publishedAt).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <span>·</span>
                    <span>{a.readTime}</span>
                  </div>
                  <h2 className="font-heading text-xl font-semibold leading-snug text-primary transition-colors group-hover:text-accent">
                    {a.title}
                  </h2>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-charcoal/70">
                    {a.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
