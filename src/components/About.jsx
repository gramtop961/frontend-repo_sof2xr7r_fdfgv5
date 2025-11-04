import React from 'react';
import { Camera, Users, Award } from 'lucide-react';

export default function About() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">About the Photographer</h2>
          <p className="mt-4 text-white/80">
            I create images that feel timeless yet modern—balancing authentic emotion with clean, intentional composition. My work spans portrait, lifestyle, editorial, and travel, with a focus on crafting visual stories for people and brands.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center text-white/80">
              <Camera className="mx-auto h-6 w-6" />
              <p className="mt-2 text-sm">700+ Shoots</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center text-white/80">
              <Users className="mx-auto h-6 w-6" />
              <p className="mt-2 text-sm">200+ Clients</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center text-white/80">
              <Award className="mx-auto h-6 w-6" />
              <p className="mt-2 text-sm">Featured Work</p>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/30 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=2000&auto=format&fit=crop"
              alt="Photographer at work"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
