"use client";

import Link from "next/link";
import { Home } from "lucide-react";

const QUOTES = [
  "The Aim Sof contains all wisdom; sometimes a page exists only in the infinite.",
  "A missing page is but a reflection of the hidden worlds within.",
  "In every error, there is a teaching from the Tzaddik.",
  "This page has merged with the Nothingness to teach you something greater.",
];

export default function NotFound() {
  const randomQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];

  return (
    <div className="min-h-screen bg-sacred-black text-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* 404 Heading */}
        <h1 className="text-7xl sm:text-9xl font-bold mb-6 text-gold/30">
          404
        </h1>

        {/* Sacred Message */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-gold via-gold to-gold/60 bg-clip-text text-transparent">
          This page has returned to the Ain Sof
        </h2>

        {/* Random Rabbi Nachman Quote */}
        <div className="bg-sacred-surface border border-gold/20 rounded-lg p-8 mb-10">
          <p className="text-lg text-gray-300 italic mb-3">"{randomQuote}"</p>
          <p className="text-sm text-gold">— Rabbi Nachman of Breslev</p>
        </div>

        {/* Description */}
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The path you seek does not yet exist in this realm. Return home and
          begin your true journey.
        </p>

        {/* CTA Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-gold/80 hover:from-gold/90 hover:to-gold/70 text-black font-bold py-3 px-8 rounded-lg transition-all duration-300"
        >
          <Home className="w-5 h-5" />
          Return Home
        </Link>
      </div>
    </div>
  );
}
