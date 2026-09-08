import Image from "next/image";
import { menuItems } from "@/lib/data";

type MenuItem = (typeof menuItems)[number];

function formatPrice(price: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
}

const badgeClass: Record<string, string> = {
  best_seller: "badge-best",
  new: "badge-new",
  promo: "badge-promo",
};

const badgeLabel: Record<string, string> = {
  best_seller: "Best Seller",
  new: "New",
  promo: "Promo",
};

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article className="group overflow-hidden rounded-xl bg-white transition-all duration-300 hover:shadow-md">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {item.badge && (
          <span className={`absolute left-3 top-3 ${badgeClass[item.badge]}`}>
            {badgeLabel[item.badge]}
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-heading text-lg font-semibold leading-snug text-primary">
            {item.name}
          </h3>
          <span className="shrink-0 text-sm font-semibold text-accent">
            {formatPrice(item.price)}
          </span>
        </div>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-charcoal/70">
          {item.description}
        </p>
      </div>
    </article>
  );
}
