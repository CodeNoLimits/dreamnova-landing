"use client";

import { useState } from "react";
import { Package, Crown, Users, Loader2, ArrowRight, AlertCircle } from "lucide-react";
import { PRODUCTS } from "@/lib/constants";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { useTranslation } from "@/lib/LanguageContext";
import { formatPrice } from "@/lib/i18n";
import { HolographicShimmer } from "@/components/shared/holographic-effects";
import { playHover, playSacred } from "@/lib/sound-manager";

type ProductKey = keyof typeof PRODUCTS;
type ProductType = (typeof PRODUCTS)[ProductKey] & { key: string };

const productList: ProductType[] = Object.entries(PRODUCTS).map(([key, val]) => ({
  ...val,
  key,
}));

const iconMap: Record<string, typeof Package> = {
  standard: Package,
  platinum: Crown,
  pair: Users,
};

function ProductCard({
  product,
  onCheckout,
  isLoading,
}: {
  product: ProductType;
  onCheckout: (slug: string, quantity: number) => void;
  isLoading: boolean;
}) {
  const [quantity, setQuantity] = useState(1);
  const Icon = iconMap[product.key] || Package;
  const { t, config } = useTranslation();
  const variant = product.key as 'standard' | 'platinum' | 'pair';
  const localPrice = formatPrice(config.code, variant);

  return (
    <div
      className="relative bg-gradient-to-br from-sacred-surface to-sacred-black border border-gold/20 rounded-lg p-6 hover:border-gold/50 transition-all duration-300 group"
      onMouseEnter={() => playHover()}
    >
      <HolographicShimmer />
      <div className="absolute inset-0 rounded-lg opacity-0 hover:opacity-10 bg-gradient-to-br from-gold to-transparent transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <Icon className="w-6 h-6 text-gold" />
          <h3 className="text-xl font-bold text-white">{product.name}</h3>
        </div>
        <div className="mb-2">
          <span className="text-3xl font-bold text-gold">{localPrice}</span>
        </div>
        <p className="text-sm text-[#8A8A9A] mb-4">{product.description}</p>
        <ul className="space-y-2 mb-6 text-sm text-gray-300">
          {product.includes.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-gold mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-300 mb-2">Quantity</label>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3 py-1 bg-sacred-surface border border-gold/30 rounded text-white hover:bg-gold/10 transition-colors"
              disabled={isLoading}
            >−</button>
            <input
              type="number"
              min="1"
              max="10"
              value={quantity}
              onChange={(e) => setQuantity(Math.min(10, Math.max(1, parseInt(e.target.value) || 1)))}
              className="w-12 text-center bg-sacred-black border border-gold/30 rounded text-white"
              disabled={isLoading}
            />
            <button
              onClick={() => setQuantity(Math.min(10, quantity + 1))}
              className="px-3 py-1 bg-sacred-surface border border-gold/30 rounded text-white hover:bg-gold/10 transition-colors"
              disabled={isLoading}
            >+</button>
          </div>
        </div>
        <button
          onClick={() => { playSacred(); onCheckout(product.slug, quantity); }}
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-gold to-gold/80 hover:from-gold/90 hover:to-gold/70 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <><Loader2 className="w-4 h-4 animate-spin" /> Creating Session...</>
          ) : (
            <><ArrowRight className="w-4 h-4" /> {t('checkout.cta')} — {localPrice}</>
          )}
        </button>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  const [loadingSlug, setLoadingSlug] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { t } = useTranslation();

  const handleCheckout = async (slug: string, quantity: number) => {
    try {
      setError(null);
      setLoadingSlug(slug);

      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, quantity }),
      });

      // Parse response JSON (even for errors)
      const data = await response.json();

      if (!response.ok) {
        // Show the API's error message (friendly, translated)
        setError(data.error || t('checkout.error.generic'));
        setLoadingSlug(null);
        return;
      }

      // Redirect to Stripe checkout
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(t('checkout.error.generic'));
        setLoadingSlug(null);
      }
    } catch (err) {
      // Network error or JSON parse error
      console.error('Checkout error:', err);
      setError(t('checkout.error.generic'));
      setLoadingSlug(null);
    }
  };

  return (
    <div className="min-h-screen bg-sacred-black text-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-12 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4 sacred-gradient">
            {t('checkout.title')}
          </h1>
          <p className="text-lg text-[#8A8A9A] max-w-2xl mx-auto">
            {t('checkout.desc')}
          </p>
        </div>
        {error && (
          <div className="mb-8 p-6 bg-red-900/20 border border-red-500/50 rounded-lg backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-red-200 font-display font-bold mb-2">
                  {t('checkout.error.generic')}
                </h3>
                <p className="text-red-300/80 text-sm font-body">
                  {error}
                </p>
                {error.includes('not configured') && (
                  <p className="mt-3 text-xs text-red-400/60">
                    The payment system is being set up. Please check back soon or contact support.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {productList.map((product) => (
            <ProductCard
              key={product.key}
              product={product}
              onCheckout={handleCheckout}
              isLoading={loadingSlug === product.slug}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
