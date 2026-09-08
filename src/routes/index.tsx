import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import logoAsset from "@/assets/logo.png.asset.json";
import heroImg from "@/assets/hero.jpg";
import lineupImg from "@/assets/lineup.jpg";
import butterImg from "@/assets/butter.jpg";
import giftImg from "@/assets/gift.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alashi Naturals — Pure Oils. Pure Care. Naturally You." },
      {
        name: "description",
        content:
          "Seven cold-pressed, unrefined single-origin oils and a nourishing hair & scalp butter. Luxury botanical care for hair, skin and body.",
      },
      { property: "og:title", content: "Alashi Naturals — Pure Oils. Pure Care." },
      {
        property: "og:description",
        content:
          "Seven cold-pressed, unrefined single-origin oils for hair, skin and body. Cruelty free, chemical free, made with care.",
      },
    ],
  }),
  component: Landing,
});

const oils = [
  { name: "Baobab Oil", note: "Deep repair", detail: "Omega-rich, featherlight" },
  { name: "Avocado Oil", note: "Rich moisture", detail: "For dry, thirsty skin" },
  { name: "Castor Oil", note: "Growth ritual", detail: "Edges, brows, lashes" },
  { name: "Argan Oil", note: "Liquid gold", detail: "Shine without weight" },
  { name: "Jojoba Oil", note: "Balance", detail: "Closest to skin's own oil" },
  { name: "Coconut Oil", note: "Softness", detail: "Cold-pressed, virgin" },
  { name: "Moringa Oil", note: "Clarity", detail: "Antioxidant defence" },
];

const products = [
  {
    name: "Baobab Oil",
    size: "50 ml",
    price: "£24",
    blurb: "The everyday repair oil — sinks in fast, leaves no film.",
  },
  {
    name: "Argan Oil",
    size: "50 ml",
    price: "£28",
    blurb: "Moroccan cold-pressed argan for high-shine hair and soft skin.",
  },
  {
    name: "Avocado Oil",
    size: "50 ml",
    price: "£22",
    blurb: "A deeply cushioning oil for dry ends and dehydrated skin.",
  },
  {
    name: "Hair & Scalp Butter",
    size: "250 g",
    price: "£32",
    blurb: "Whipped baobab and avocado butter for a weekly scalp ritual.",
  },
];

function Leaf({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        d="M24 42V18M24 18c0-8 6-12 14-12 0 10-6 14-14 14Zm0 8c0-6-5-9-11-9 0 7 5 9 11 9Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Rule({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center gap-4 sm:gap-6">
      <span className="h-px w-10 flex-1 bg-gold/50 sm:w-24" />
      <span className="tracking-brand text-[0.68rem] uppercase text-olive sm:text-xs">{label}</span>
      <span className="h-px w-10 flex-1 bg-gold/50 sm:w-24" />
    </div>
  );
}

function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { label: "Our Oils", href: "#oils" },
    { label: "Shop", href: "#shop" },
    { label: "Gifting", href: "#gifting" },
    { label: "Our Promise", href: "#promise" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-gold/25 bg-background/90 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:px-10">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Alashi Naturals"
              width={140}
              height={112}
              className="h-10 w-auto shrink-0 object-contain"
            />
          </a>
          <nav className="hidden items-center gap-9 md:flex">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="tracking-[0.18em] text-[0.7rem] uppercase text-olive transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#shop"
              className="border border-olive px-5 py-2 tracking-[0.18em] text-[0.7rem] uppercase text-olive transition-colors hover:bg-olive hover:text-primary-foreground"
            >
              Shop Now
            </a>
          </nav>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-label="Menu"
            className="shrink-0 border border-olive/40 px-3 py-2 tracking-[0.18em] text-[0.65rem] uppercase text-olive md:hidden"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
        {menuOpen && (
          <nav className="grid gap-1 border-t border-gold/25 px-5 pb-5 pt-3 md:hidden">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="py-2 tracking-[0.18em] text-[0.72rem] uppercase text-olive"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#shop"
              onClick={() => setMenuOpen(false)}
              className="mt-2 border border-olive px-5 py-3 text-center tracking-[0.18em] text-[0.72rem] uppercase text-olive"
            >
              Shop Now
            </a>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:gap-16 md:px-10 md:py-24">
          <div className="min-w-0">
            <p className="tracking-brand text-[0.65rem] uppercase text-gold sm:text-xs">
              Pure oils. Pure care. Naturally you.
            </p>
            <h1 className="mt-6 text-4xl leading-[1.05] text-olive-deep sm:text-5xl lg:text-6xl">
              Cold-pressed botanical oils,
              <span className="italic text-olive"> bottled unrefined</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Seven single-origin oils and one whipped butter — pressed slowly, never diluted, and
              made for hair, skin and body. Nothing added that your skin does not need.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#shop"
                className="bg-olive px-8 py-4 text-center tracking-[0.2em] text-[0.7rem] uppercase text-primary-foreground transition-colors hover:bg-olive-deep"
              >
                Shop the collection
              </a>
              <a
                href="#oils"
                className="border border-gold px-8 py-4 text-center tracking-[0.2em] text-[0.7rem] uppercase text-olive transition-colors hover:bg-gold/15"
              >
                Discover the oils
              </a>
            </div>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-gold/30 pt-6">
              {[
                ["100%", "Natural"],
                ["7", "Single oils"],
                ["0", "Fillers"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="font-display text-2xl text-olive">{n}</dt>
                  <dd className="tracking-[0.16em] text-[0.62rem] uppercase text-muted-foreground">
                    {l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative min-w-0">
            <div className="absolute -inset-3 hidden border border-gold/40 md:block" />
            <img
              src={heroImg}
              alt="Amber glass dropper bottle of Alashi Naturals oil on stone with olive leaves"
              width={1600}
              height={1200}
              className="relative h-[320px] w-full object-cover sm:h-[420px] lg:h-[560px]"
            />
          </div>
        </div>
      </section>

      {/* Oils */}
      <section id="oils" className="border-y border-gold/25 bg-secondary/50 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Rule label="Our Oils" />
          <div className="mt-10 grid grid-cols-2 gap-px bg-gold/25 sm:grid-cols-3 lg:grid-cols-7">
            {oils.map((o) => (
              <article
                key={o.name}
                className="group bg-background px-4 py-8 text-center transition-colors hover:bg-card"
              >
                <Leaf className="mx-auto h-9 w-9 text-gold transition-colors group-hover:text-olive" />
                <h3 className="mt-5 tracking-[0.12em] text-[0.72rem] uppercase text-olive">
                  Alashi
                </h3>
                <p className="font-display text-lg text-olive-deep">{o.name}</p>
                <p className="mt-3 tracking-[0.14em] text-[0.6rem] uppercase text-gold">{o.note}</p>
                <p className="mt-2 text-xs text-muted-foreground">{o.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Shop */}
      <section id="shop" className="py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Rule label="The Collection" />
          <h2 className="mx-auto mt-6 max-w-2xl text-center text-3xl text-olive-deep sm:text-4xl">
            Small batches, honest labels
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p, i) => (
              <article key={p.name} className="group flex flex-col">
                <div className="overflow-hidden bg-secondary">
                  <img
                    src={i === 3 ? butterImg : i === 1 ? lineupImg : i === 2 ? butterImg : lineupImg}
                    alt={`Alashi Naturals ${p.name}`}
                    loading="lazy"
                    width={1200}
                    height={1200}
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-72"
                  />
                </div>
                <div className="mt-5 grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3">
                  <h3 className="min-w-0 truncate font-display text-xl text-olive-deep">{p.name}</h3>
                  <span className="shrink-0 font-display text-lg text-gold">{p.price}</span>
                </div>
                <p className="mt-1 tracking-[0.16em] text-[0.6rem] uppercase text-muted-foreground">
                  {p.size} · 100% pure &amp; natural
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.blurb}
                </p>
                <a
                  href="#shop"
                  className="mt-5 border border-olive/50 py-3 text-center tracking-[0.2em] text-[0.65rem] uppercase text-olive transition-colors hover:bg-olive hover:text-primary-foreground"
                >
                  Add to bag
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gifting */}
      <section id="gifting" className="bg-olive text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:gap-16 md:px-10 md:py-24">
          <img
            src={giftImg}
            alt="Olive green Alashi Naturals gift bag with gold rope handles"
            loading="lazy"
            width={1200}
            height={1008}
            className="h-[300px] w-full object-cover sm:h-[420px]"
          />
          <div className="min-w-0">
            <p className="tracking-brand text-[0.65rem] uppercase text-gold-soft">
              Gifting &amp; packaging
            </p>
            <h2 className="mt-5 text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Wrapped in olive, tied in gold
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/80">
              Every order arrives in our matte olive bag with gold rope handles, tissue lining and a
              hand-written card. Choose any three oils and we will build the set for you.
            </p>
            <ul className="mt-8 grid gap-3 text-sm text-primary-foreground/85">
              {[
                "Complimentary gift wrap on every order",
                "Build-your-own trio of any three oils",
                "Recyclable glass, aluminium and paper",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 bg-gold-soft" />
                  <span className="min-w-0">{t}</span>
                </li>
              ))}
            </ul>
            <a
              href="#shop"
              className="mt-9 inline-block border border-gold-soft px-8 py-4 tracking-[0.2em] text-[0.7rem] uppercase text-gold-soft transition-colors hover:bg-gold-soft hover:text-accent-foreground"
            >
              Build a gift set
            </a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section id="promise" className="border-b border-gold/25 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Rule label="Our Promise" />
          <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {[
              ["100% Natural", "Botanical, nothing synthetic"],
              ["Cold Pressed", "Unrefined, nutrient intact"],
              ["Cruelty Free", "Never tested on animals"],
              ["Chemical Free", "No parabens or sulphates"],
              ["Made With Care", "Blended in small batches"],
            ].map(([t, d]) => (
              <div key={t} className="text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/60">
                  <Leaf className="h-7 w-7 text-gold" />
                </span>
                <h3 className="mt-4 tracking-[0.16em] text-[0.66rem] uppercase text-olive">{t}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center font-display text-2xl italic text-olive sm:text-3xl">
            For hair. For skin. For body. For everyone.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-olive-deep text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-10">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
            <div className="min-w-0">
              <img
                src={logoAsset.url}
                alt="Alashi Naturals"
                loading="lazy"
                width={280}
                height={224}
                className="h-16 w-auto object-contain brightness-0 invert opacity-90"
              />
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
                Cold-pressed single-origin oils and butters, made with care for every hair type and
                skin tone.
              </p>
            </div>
            {[
              { title: "Shop", items: ["All oils", "Hair & scalp butter", "Gift sets", "Trios"] },
              { title: "Company", items: ["Our story", "Sourcing", "Journal", "Contact"] },
            ].map((col) => (
              <div key={col.title}>
                <h3 className="tracking-[0.2em] text-[0.65rem] uppercase text-gold-soft">
                  {col.title}
                </h3>
                <ul className="mt-4 grid gap-2 text-sm text-primary-foreground/75">
                  {col.items.map((i) => (
                    <li key={i}>
                      <a href="#shop" className="transition-colors hover:text-gold-soft">
                        {i}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="min-w-0">
              <h3 className="tracking-[0.2em] text-[0.65rem] uppercase text-gold-soft">
                The letter
              </h3>
              <p className="mt-4 text-sm text-primary-foreground/70">
                Rituals, restocks and quiet offers.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-4 grid grid-cols-[minmax(0,1fr)_auto]"
              >
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  aria-label="Email address"
                  className="min-w-0 border border-gold-soft/40 bg-transparent px-4 py-3 text-sm placeholder:text-primary-foreground/45 focus:outline-none focus:ring-1 focus:ring-gold-soft"
                />
                <button
                  type="submit"
                  className="shrink-0 border border-gold-soft bg-gold-soft px-5 py-3 tracking-[0.16em] text-[0.62rem] uppercase text-accent-foreground"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-3 border-t border-gold-soft/20 pt-6 text-[0.68rem] uppercase tracking-[0.16em] text-primary-foreground/55 sm:flex-row sm:justify-between">
            <p>© {new Date().getFullYear()} Alashi Naturals</p>
            <p>Pure oils. Pure care. Naturally you.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
