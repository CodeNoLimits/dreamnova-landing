import { useTranslation } from '@/lib/LanguageContext';
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";

export default function SuccessPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-sacred-black text-white flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="text-center max-w-2xl">
          {/* Animated Checkmark */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24">
              <div className="absolute inset-0 bg-green-500/20 rounded-full animate-pulse" />
              <CheckCircle className="w-full h-full text-green-400 drop-shadow-lg" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-gold via-gold to-gold/60 bg-clip-text text-transparent">
            Your Hafatsa Journey Begins
          </h1>

          {/* Message */}
          <p className="text-xl text-gray-300 mb-8">Order confirmed</p>

          {/* Sacred Note */}
          <div className="bg-sacred-surface border border-gold/20 rounded-lg p-6 mb-10 text-gray-300">
            <p className="text-sm">
              Your Nova Key is being prepared in Jerusalem. You will receive
              your activation link and NFC key details via email shortly.
            </p>
          </div>

          {/* Action Links */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <Link
              href="/portal"
              className="bg-gradient-to-r from-gold to-gold/80 hover:from-gold/90 hover:to-gold/70 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300"
            >
              Access Digital Content
            </Link>
            <a
              href={`https://dreamnova.com?ref=${Date.now()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sacred-surface border border-gold/40 hover:border-gold text-gold font-bold py-3 px-6 rounded-lg transition-all duration-300"
            >
              Share with a Friend
            </a>
          </div>

          {/* Back Home */}
          <Link
            href="/"
            className="inline-block text-gold hover:text-gold/80 underline transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
