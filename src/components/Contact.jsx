import React from 'react';
import { Mail, Instagram, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Let’s create something beautiful</h2>
          <p className="mt-3 text-white/80">
            For bookings and collaborations, send a message. I typically respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <form className="md:col-span-2">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Full name"
                className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-white/30"
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-white/30"
              />
            </div>
            <textarea
              rows="5"
              placeholder="Tell me about your project..."
              className="mt-4 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-white/30"
            />
            <div className="mt-4 flex items-center gap-3">
              <a
                href="mailto:hello@example.com?subject=Booking%20Inquiry"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-black shadow/50 shadow-black/30 transition hover:bg-white/90"
              >
                <Mail className="h-4 w-4" /> Send Email
              </a>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/15"
              >
                <Phone className="h-4 w-4" /> Call
              </a>
            </div>
          </form>

          <div className="space-y-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-xl border border-white/10 bg-black/40 p-4 text-white/90 transition hover:bg-black/30"
            >
              <span className="flex items-center gap-3"><Instagram className="h-5 w-5" /> Instagram</span>
              <span className="text-white/60">@yourhandle</span>
            </a>
            <div className="rounded-xl border border-white/10 bg-black/40 p-4 text-white/80">
              <p className="text-sm">Based in</p>
              <p className="text-lg">Your City, Country</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/40 p-4 text-white/80">
              <p className="text-sm">Availability</p>
              <p className="text-lg">Worldwide • Remote friendly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
