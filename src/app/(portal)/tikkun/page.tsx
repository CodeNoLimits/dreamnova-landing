import Link from "next/link";
import { ChevronRight } from "lucide-react";

const PSALMS = [
  { number: 16, name: "Shomer Yisrael" },
  { number: 32, name: "Ashrei Nesui Pesha" },
  { number: 41, name: "Ashrei Maskil" },
  { number: 42, name: "Katzir Ayil" },
  { number: 59, name: "Al Tashet Lamduni" },
  { number: 77, name: "Koli El Elohim" },
  { number: 90, name: "Tefillah Lemoshe" },
  { number: 105, name: "Hodu LaEternal" },
  { number: 137, name: "Al Naharот Bavel" },
  { number: 150, name: "Halleluyah" },
];

export default function TikkumPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-sacred-black text-white px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/portal/unlock"
            className="inline-flex items-center gap-2 text-gold hover:text-gold/80 mb-6 transition-colors"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            Back to Portal
          </Link>

          <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-gold via-gold to-gold/60 bg-clip-text text-transparent">
            תיקון הכללי
          </h1>
          <h2 className="text-3xl text-gray-300 mb-6">
            Tikkun HaKlali — The General Remedy
          </h2>

          <p className="text-gray-400 mb-8">
            The ten psalms revealed by Rabbi Nachman of Breslev to elevate
            consciousness and repair the soul. Each psalm holds the key to a
            different spiritual chamber.
          </p>
        </div>

        {/* Psalms Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {PSALMS.map((psalm, idx) => (
            <div
              key={psalm.number}
              className="relative group bg-gradient-to-br from-sacred-surface to-sacred-black border border-gold/20 hover:border-gold/50 rounded-lg p-6 text-center transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 bg-gradient-to-br from-gold to-transparent transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="text-4xl font-bold text-gold mb-2">
                  {psalm.number}
                </div>
                <div className="text-sm text-gray-400">{psalm.name}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Information Section */}
        <div className="bg-sacred-surface border border-gold/20 rounded-lg p-8 mb-12">
          <h3 className="text-xl font-bold text-gold mb-4">
            The Sacred Practice
          </h3>
          <p className="text-gray-300 mb-4">
            Recite or read one psalm daily, or all ten in one sitting. Each
            psalm addresses a specific spiritual blockage and activates the
            corresponding energy within the soul.
          </p>
          <p className="text-gray-400 text-sm">
            The Tikkun HaKlali is considered so powerful that it can heal even
            the deepest spiritual wounds. Rabbi Nachman promised that whoever
            recites these ten psalms with intention will experience profound
            healing and elevation.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/portal/unlock"
            className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            Back to Portal
          </Link>

          <Link
            href="/portal/azamra"
            className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors"
          >
            Next: Azamra
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
