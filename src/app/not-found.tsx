import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-28 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-accent">
        404
      </p>
      <h1 className="mt-2 font-heading text-3xl font-semibold text-primary md:text-4xl">
        Halaman Tidak Ditemukan
      </h1>
      <p className="mt-3 max-w-md text-charcoal/70">
        Maaf, halaman yang Anda cari tidak ada atau sudah dipindahkan.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Kembali ke Home
      </Link>
    </section>
  );
}
