# Super Koffee — Website Company Profile

Website company profile untuk **Super Koffee**, coffee shop multi-cabang di Surabaya.

Dibangun dengan **Next.js 15**, **TypeScript**, dan **Tailwind CSS**.

## Brand

- **Nama:** Super Koffee
- **Tagline:** Cerita Hati Melalui Kopi
- **Instagram:** [@superkoffee](https://www.instagram.com/superkoffee/)
- **Lokasi:** Surabaya (Manukan, Wiyung, Perak, Stasiun Pasar Turi, Stasiun Gubeng, Jemursari)

## Warna Brand

| Peran | Hex | Keterangan |
|-------|-----|------------|
| Primary | `#1C1410` | Deep espresso |
| Accent | `#C4783A` | Warm caramel / kopi susu |
| Background | `#FBF7F2` | Soft cream |
| Text | `#3D322C` | Charcoal |

## Menjalankan

```bash
cd super-koffee
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Deploy ke Vercel

1. Upload ke GitHub
2. Import project di [vercel.com](https://vercel.com)
3. Deploy

## Struktur

```
src/
  app/           # Halaman
  components/    # Navbar, Footer, MenuCard, dll
  lib/data.ts    # Data menu, cabang, artikel (edit di sini)
```

Ganti gambar di `src/lib/data.ts` (field `image`) atau taruh file di folder `public/`.
