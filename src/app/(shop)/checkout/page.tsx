"use client";

import { useState } from "react";
import { Package, Crown, Users, Loader2, ArrowRight, AlertCircle, Copy, Check } from "lucide-react";
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

const BANK_ACCOUNTS = [
  { currency: "EUR", label: "IBAN Europe", value: "DE12202208000040581262", flag: "🇪🇺" },
  { currency: "ILS", label: "Compte Israël", value: "000502718", flag: "🇮🇱" },
  { currency: "USD", label: "Account USA", value: "8487154836", flag: "🇺🇸" },
  { currency: "CAD", label: "Compte Canada", value: "938276193", flag: "🇨🇦" },
];

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button
      onClick={handleCopy}
      className="ml-2 p-1 text-gold/60 hover:text-gold transition-colors"
      title="Copier"
    >
      {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
    </button>
  );
}

function ProductCard({
  product,
  onCheckout,
  onPayPal,
  loadingSlug,
  paypalLoadingSlug,
}: {
  product: ProductType;
  onCheckout: (slug: string, quantity: number) => void;
  onPayPal: (slug: string, quantity: number) => void;
  loadingSlug: string | null;
  paypalLoadingSlug: string | null;
}) {
  const [quantity, setQuantity] = useState(1);
  const Icon = iconMap[product.key] || Package;
  const { t, config } = useTranslation();
  const variant = product.key as "standard" | "platinum" | "pair";
  const localPrice = formatPrice(config.code, variant);
  const isStripeLoading = loadingSlug === product.slug;
  const isPayPalLoading = paypalLoadingSlug === product.slug;
  const isAnyLoading = isStripeLoading || isPayPalLoading;

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
          <label className="block text-sm font-semibold text-gray-300 mb-2">{t("checkout.quantity")}</label>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3 py-1 bg-sacred-surface border border-gold/30 rounded text-white hover:bg-gold/10 transition-colors"
              disabled={isAnyLoading}
            >−</button>
            <input
              type="number"
              min="1"
              max="10"
              value={quantity}
              onChange={(e) => setQuantity(Math.min(10, Math.max(1, parseInt(e.target.value) || 1)))}
              className="w-12 text-center bg-sacred-black border border-gold/30 rounded text-white"
              disabled={isAnyLoading}
            />
            <button
              onClick={() => setQuantity(Math.min(10, quantity + 1))}
              className="px-3 py-1 bg-sacred-surface border border-gold/30 rounded text-white hover:bg-gold/10 transition-colors"
              disabled={isAnyLoading}
            >+</button>
          </div>
        </div>
        {/* Stripe button */}
        <button
          onClick={() => { playSacred(); onCheckout(product.slug, quantity); }}
          disabled={isAnyLoading}
          className="w-full bg-gradient-to-r from-gold to-gold/80 hover:from-gold/90 hover:to-gold/70 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 mb-3"
        >
          {isStripeLoading ? (
            <><Loader2 className="w-4 h-4 animate-spin" /> Chargement...</>
          ) : (
            <><ArrowRight className="w-4 h-4" /> {t("checkout.cta")} — {localPrice}</>
          )}
        </button>
        {/* PayPal button */}
        <button
          onClick={() => onPayPal(product.slug, quantity)}
          disabled={isAnyLoading}
          className="w-full bg-[#0070BA] hover:bg-[#005ea6] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
        >
          {isPayPalLoading ? (
            <><Loader2 className="w-4 h-4 animate-spin" /> Chargement PayPal...</>
          ) : (
            <>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z" />
              </svg>
              Payer avec PayPal
            </>
          )}
        </button>
      </div>
    </div>
  );
}

function VirementSection({ selectedProduct }: { selectedProduct: string | null }) {
  return (
    <div className="mt-16 border border-gold/20 rounded-xl p-8 bg-gradient-to-br from-sacred-surface/50 to-sacred-black">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gold mb-2">Virement Bancaire</h2>
        <p className="text-[#8A8A9A] text-sm">
          Paiement direct par virement — confirmation sous 24–48h.
          {selectedProduct && (
            <span className="ml-1 text-gold/70">
              Indiquez <strong className="text-gold">{selectedProduct}</strong> en référence.
            </span>
          )}
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {BANK_ACCOUNTS.map((account) => (
          <div
            key={account.currency}
            className="bg-sacred-black border border-gold/10 rounded-lg p-4 hover:border-gold/30 transition-colors"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">{account.flag}</span>
              <div>
                <span className="text-gold font-bold text-sm">{account.currency}</span>
                <p className="text-[#8A8A9A] text-xs">{account.label}</p>
              </div>
            </div>
            <div className="flex items-center justify-between bg-sacred-surface/50 rounded px-3 py-2">
              <code className="text-white text-xs font-mono tracking-wide">{account.value}</code>
              <CopyButton value={account.value} />
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-[#8A8A9A] text-xs mt-6">
        Bénéficiaire: <span className="text-white">David Amor</span> · PayPal: <span className="text-white">amoredavid46@gmail.com</span>
      </p>
    </div>
  );
}

export default function CheckoutPage() {
  const [loadingSlug, setLoadingSlug] = useState<string | null>(null);
  const [paypalLoadingSlug, setPaypalLoadingSlug] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedProductName, setSelectedProductName] = useState<string | null>(null);
  const { t } = useTranslation();

  const handleCheckout = async (slug: string, quantity: number) => {
    try {
      setError(null);
      setLoadingSlug(slug);
      const product = productList.find((p) => p.slug === slug);
      if (product) setSelectedProductName(`${product.name} × ${quantity}`);

      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, quantity }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.error || t("checkout.error.generic"));
        setLoadingSlug(null);
        return;
      }
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(t("checkout.error.generic"));
        setLoadingSlug(null);
      }
    } catch (err) {
      console.error("Checkout error:", err);
      setError(t("checkout.error.generic"));
      setLoadingSlug(null);
    }
  };

  const handlePayPal = async (slug: string, quantity: number) => {
    try {
      setError(null);
      setPaypalLoadingSlug(slug);
      const product = productList.find((p) => p.slug === slug);
      if (product) setSelectedProductName(`${product.name} × ${quantity}`);

      const response = await fetch("/api/paypal/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, quantity }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.error || "Erreur PayPal");
        setPaypalLoadingSlug(null);
        return;
      }
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError("Erreur PayPal: pas d'URL de paiement");
        setPaypalLoadingSlug(null);
      }
    } catch (err) {
      console.error("PayPal error:", err);
      setError("Erreur PayPal");
      setPaypalLoadingSlug(null);
    }
  };

  return (
    <div className="min-h-screen bg-sacred-black text-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-12 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4 sacred-gradient">
            {t("checkout.title")}
          </h1>
          <p className="text-lg text-[#8A8A9A] max-w-2xl mx-auto">{t("checkout.desc")}</p>
        </div>
        {error && (
          <div className="mb-8 p-6 bg-red-900/20 border border-red-500/50 rounded-lg backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-red-200 font-display font-bold mb-2">
                  {t("checkout.error.generic")}
                </h3>
                <p className="text-red-300/80 text-sm font-body">{error}</p>
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
              onPayPal={handlePayPal}
              loadingSlug={loadingSlug}
              paypalLoadingSlug={paypalLoadingSlug}
            />
          ))}
        </div>
        <VirementSection selectedProduct={selectedProductName} />
      </main>
      <Footer />
    </div>
  );
}
