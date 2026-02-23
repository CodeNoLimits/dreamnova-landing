import { Particles } from "@/components/animations/particles";
import { FadeIn } from "@/components/animations/fade-in";
import { DCSCounter } from "@/components/dcs-counter";
import { Button } from "@/components/ui/button";
import { MoveRight, Shield, Zap, Lock, Terminal, Activity, Fingerprint, Code, Check } from "lucide-react";
import Image from "next/image";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-foreground font-rajdhani overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4">
        <Particles className="opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_60%)]" />
        
        <div className="max-w-6xl mx-auto text-center z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold mb-8 text-sm tracking-[0.2em] uppercase font-space-mono">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              Hafatsa 25% En Cours
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h1 className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-white drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]">
              DCS — Dream<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold">Consistency Score</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 font-medium">
              Le premier passeport qualitatif du mérite humain. Crée ton monde avec Genie 3. Débloque-le avec la Nova Key NFC.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
              <DCSCounter />
              <div className="h-16 w-px bg-zinc-800 hidden md:block" />
              <div className="text-left bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
                <div className="flex items-center gap-3 mb-2">
                  <Fingerprint className="text-cyan-400 h-6 w-6" />
                  <span className="font-cinzel text-xl text-white">Nova Key NFC</span>
                </div>
                <div className="text-zinc-500 font-space-mono text-sm">Genie 3 + Na Nach inside</div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.8}>
            <Button size="lg" className="bg-gold text-black hover:bg-yellow-500 text-lg w-full md:w-auto shadow-[0_0_40px_rgba(212,175,55,0.3)] group tracking-widest px-8">
              GET MY NOVA KEY — $63
              <MoveRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </FadeIn>
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-zinc-900 bg-black/80 backdrop-blur-xl py-4">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center px-6 gap-4 text-xs font-space-mono text-zinc-500 tracking-wider">
            <span>148 = NACHMAN</span>
            <span className="hidden md:inline">•</span>
            <span>63 = SAG</span>
            <span className="hidden md:inline">•</span>
            <span>H(F) = 1.846 bits (Nachman Science)</span>
            <span className="hidden md:inline">•</span>
            <span className="text-gold/80">BREVET DCS DÉPOSÉ</span>
          </div>
        </div>
      </section>

      {/* NA NACH BANNER */}
      <div className="w-full bg-[#0A0A0A] border-b border-gold/20 overflow-hidden py-3">
        <div className="flex animate-[marquee-reverse_30s_linear_infinite] w-max items-center">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6">
              <span className="text-gold font-bold text-xl tracking-[0.3em]" style={{ textShadow: '0 0 10px rgba(212,175,55,0.4)' }}>נ נח נחמ נחמן מאומן</span>
              <span className="font-space-mono text-cyan-400/50 text-xs uppercase tracking-widest">NA NACH NACHMA NACHMAN MEM</span>
            </div>
          ))}
        </div>
      </div>

      {/* 1. THE PROBLEM */}
      <section className="py-24 px-4 bg-zinc-950 border-t border-zinc-900" id="problem">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="font-cinzel text-4xl md:text-5xl text-white mb-16 text-center">
              The Matrix <span className="text-red-500">Exhaustion</span>
            </h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Digital Anxiety", desc: "Surchage d'informations. Décisions paralysées. Le bruit constant tue l'intuition." },
              { title: "GenZ Burnout", desc: "Perte de sens. Dilution de l'identité dans un océan de scroll infini et de dopamine vide." },
              { title: "One-Man-Show", desc: "L'illusion de la réussite solitaire. Dilution de l'impact sans système de mesure qualitatif." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.2}>
                <div className="p-8 bg-black border border-red-900/30 hover:border-red-500/50 transition-colors h-full">
                  <Activity className="h-10 w-10 text-red-500 mb-6" />
                  <h3 className="text-xl text-white font-bold mb-4 font-cinzel">{item.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 2. THE SOLUTION */}
      <section className="py-24 px-4 relative" id="solution">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-900/50 to-transparent" />
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="font-cinzel text-4xl md:text-5xl text-white mb-8">
                The <span className="text-cyan-400">Nova</span> Protocol
              </h2>
              <ul className="space-y-8">
                {[
                  { title: "DCS Breveté", desc: "Algorithme propriétaire transformant les actions qualitatives en score de consistance (DCS)." },
                  { title: "Azamra Algorithm", desc: "Recherche du point positif. Amplification de la lumière par résonance métrique." },
                  { title: "Na Nach Worlds", desc: "Mondes virtuels persistants générés par Genie 3, ancrés dans la Torah de Breslev." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1 bg-cyan-950 p-2 rounded shrink-0">
                      <Zap className="h-5 w-5 text-cyan-400 relative z-10" />
                    </div>
                    <div>
                      <h4 className="text-lg text-white font-bold mb-2 font-space-mono tracking-wide">{item.title}</h4>
                      <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-cyan-400/20 bg-black p-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="relative z-10 text-center">
                  <Shield className="h-24 w-24 text-gold mx-auto mb-6 drop-shadow-[0_0_20px_rgba(212,175,55,0.3)] animate-pulse" />
                  <div className="font-space-mono text-cyan-400 text-2xl">NOVA KEY NFC</div>
                  <div className="text-zinc-500 mt-2 tracking-widest text-sm uppercase">Tap to unlock Reality</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. NOVA KEY PRODUCT */}
      <Pricing />

      {/* 5. HAFATSA 25% */}
      <section className="py-32 px-4 relative border-y border-gold/20 overflow-hidden">
        <div className="absolute inset-0 bg-gold/5" />
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-gold/10 to-transparent" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <FadeIn>
            <h2 className="font-cinzel text-4xl md:text-6xl text-gold mb-8">Mission 63M$ Hafatsa</h2>
            <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Nous cherchons le <span className="text-white font-bold">Tipping Point (Centola)</span>. 
              Atteindre 25% de la conscience globale. 10% des revenus directement dédiés à la Tsedaka.
            </p>
            <div className="inline-block p-[2px] rounded-lg bg-gradient-to-r from-gold via-yellow-200 to-gold">
              <div className="bg-black px-8 py-6 rounded-lg">
                <div className="text-5xl font-space-mono text-white mb-2">25.000%</div>
                <div className="text-gold tracking-widest uppercase text-sm font-bold">Target Saturation</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 9. MANIFESTO */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-4xl mx-auto border-l-2 border-cyan-400/50 pl-8 md:pl-16">
          <FadeIn>
            <div className="font-space-mono text-cyan-400 mb-6 tracking-widest">/// SOURCE CODE OF REALITY</div>
            <h2 className="font-cinzel text-3xl md:text-5xl text-white mb-10 leading-tight">
              &quot;Ein Ye&apos;ush Ba&apos;olam Klal&quot;
            </h2>
            <div className="space-y-6 text-lg text-zinc-400 font-medium">
              <p>Il n&apos;y a aucun désespoir dans le monde. La science de Nachman prouve mathématiquement la résilience infinie.</p>
              <p>Basé sur le théorème d&apos;incomplétude de Gödel, le Petek original, le protocole NOVA1 I197V et le framework ASL.</p>
              <p className="text-white pt-4">L&apos;obscurité n&apos;est qu&apos;une toile pour la véritable lumière.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 bg-zinc-950/50 pt-16 pb-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <Shield className="h-8 w-8 text-gold" />
            <span className="font-cinzel font-bold text-xl text-white tracking-widest">DREAM NOVA</span>
          </div>
          
          <div className="flex flex-wrap gap-8 text-sm text-zinc-500 font-space-mono uppercase tracking-wider">
            <a href="#" className="hover:text-gold transition-colors">Legal & Privacy</a>
            <a href="#" className="hover:text-gold transition-colors">Telegram @nerostats</a>
            <a href="#" className="hover:text-gold transition-colors">WhatsApp 24/7</a>
          </div>
        </div>
        <div className="mt-16 text-center text-zinc-700 text-xs font-space-mono">
          &copy; {new Date().getFullYear()} Dream Nova Operations. 148 Energy Protocol. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
