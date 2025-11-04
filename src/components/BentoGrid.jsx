import React from 'react';

const items = [
  {
    title: 'Portraits',
    subtitle: 'Human stories up close',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2000&auto=format&fit=crop',
    className: 'md:col-span-2',
  },
  {
    title: 'Lifestyle',
    subtitle: 'Everyday moments, elevated',
    img: 'https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?q=80&w=2000&auto=format&fit=crop',
    className: 'row-span-2',
  },
  {
    title: 'Editorial',
    subtitle: 'Visual narratives for brands',
    img: 'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: 'Travel',
    subtitle: 'Places that breathe',
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: 'Studio',
    subtitle: 'Controlled light, bold results',
    img: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=2000&auto=format&fit=crop',
    className: 'md:col-span-2',
  },
];

function Card({ title, subtitle, img }) {
  return (
    <div className="group relative h-64 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/30 shadow-xl backdrop-blur-sm sm:h-80">
      <img
        src={img}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute inset-0 p-5 sm:p-6">
        <div className="mt-auto flex h-full flex-col justify-end">
          <h3 className="text-xl font-semibold text-white sm:text-2xl">{title}</h3>
          <p className="mt-1 text-sm text-white/80">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default function BentoGrid() {
  return (
    <section id="portfolio" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Portfolio</h2>
          <p className="mt-2 text-white/70">A curated selection presented in a bento grid layout.</p>
        </div>
        <a href="#contact" className="hidden rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur hover:bg-white/10 sm:block">
          Get in touch
        </a>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3">
        {items.map((item, i) => (
          <div key={i} className={item.className || ''}>
            <Card {...item} />
          </div>
        ))}
      </div>
    </section>
  );
}
