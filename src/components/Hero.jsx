import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Spline 3D cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Contrast overlays that do not block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/40" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl text-white">
          <p className="mb-3 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-white/80 backdrop-blur">
            Photography • Creative • Minimal
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-6xl">
            Capturing stories in light
          </h1>
          <p className="mt-4 text-white/80 sm:text-lg">
            A modern portfolio blending craft and technology. Explore portraits, lifestyle, and editorial work presented in a clean bento layout.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-medium text-black shadow/50 shadow-black/30 transition hover:bg-white/90"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/15"
            >
              Book a Session
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
