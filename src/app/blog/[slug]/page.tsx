import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/lib/data";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "Artikel tidak ditemukan" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.id !== article.id).slice(0, 2);

  return (
    <>
      <article className="pt-28 md:pt-32">
        <div className="container-content max-w-3xl">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-charcoal/60 transition hover:text-primary"
          >
            <ArrowLeft size={16} />
            Kembali ke Blog
          </Link>

          <div className="mb-4 flex items-center gap-2 text-xs text-charcoal/60">
            <span className="font-medium uppercase tracking-wider text-accent">
              {article.category}
            </span>
            <span>·</span>
            <time dateTime={article.publishedAt}>
              {new Date(article.publishedAt).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            <span>·</span>
            <span>{article.readTime} baca</span>
          </div>

          <h1 className="font-heading text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl lg:text-5xl">
            {article.title}
          </h1>

          <div className="relative my-8 aspect-[16/9] overflow-hidden rounded-2xl">
            <Image
              src={article.thumbnail}
              alt={article.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <div className="prose prose-lg max-w-none text-charcoal/85">
            <p className="text-lg leading-relaxed">{article.excerpt}</p>
            <p className="mt-6 leading-relaxed">
              Di Super Koffee, kami selalu berusaha membagikan pengetahuan dan
              pengalaman seputar kuliner. Artikel ini merupakan bagian dari
              komitmen kami untuk terus mengedukasi dan menginspirasi pecinta
              makanan dan kopi.
            </p>
            <p className="mt-4 leading-relaxed">
              Setiap hidangan yang kami sajikan memiliki cerita. Dari pemilihan
              biji kopi hingga teknik memasak tradisional yang kami modernisasi,
              semuanya dilakukan dengan penuh perhatian. Kami percaya bahwa
              pengetahuan yang dibagikan akan membuat pengalaman menikmati
              makanan menjadi lebih bermakna.
            </p>
            <h2 className="mt-8 font-heading text-2xl font-semibold text-primary">
              Tips Praktis
            </h2>
            <p className="mt-3 leading-relaxed">
              Coba praktikkan tips yang kami bagikan di rumah. Mulai dari
              teknik sederhana hingga pilihan bahan yang tepat, sedikit
              penyesuaian bisa menghasilkan perbedaan besar pada hasil akhir.
            </p>
            <p className="mt-4 leading-relaxed">
              Jika Anda ingin mencoba versi asli dari dapur kami, datanglah ke
              salah satu cabang Super Koffee. Tim kami siap menyambut dan
              merekomendasikan hidangan yang sesuai selera Anda.
            </p>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="section-padding bg-soft/40">
          <div className="container-content">
            <h2 className="mb-8 text-center font-heading text-2xl font-semibold text-primary">
              Artikel Terkait
            </h2>
            <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
              {related.map((a) => (
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
                      className="object-cover transition group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading text-lg font-semibold text-primary group-hover:text-accent">
                      {a.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
