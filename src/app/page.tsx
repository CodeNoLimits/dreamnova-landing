import Particles from "@/components/Particles";
import FloatingKey from "@/components/FloatingKey";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Button } from "@/components/ui/button";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <main className="relative z-10 w-full overflow-hidden">
      
      {/* NA NACH BANNER */}
      <div className="w-full bg-void border-b border-sacred/20 overflow-hidden py-3">
        <div className="flex animate-[marquee-reverse_30s_linear_infinite] w-max items-center">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6">
              <span className="text-sacred font-bold text-xl tracking-[0.3em]" style={{ textShadow: '0 0 10px rgba(212,175,55,0.4)' }}>נ נח נחמ נחמן מאומן</span>
              <span className="tech-text text-cyan/50 text-xs">NA NACH NACHMA NACHMAN MEM</span>
            </div>
          ))}
        </div>
      </div>

      <Particles />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-12 pb-12">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sacred/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="z-10 mb-12">
          <FloatingKey />
        </div>

        <div className="text-center z-10 space-y-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-sacred drop-shadow-md">
            DREAM NOVA <br/>
            <span className="text-2xl md:text-4xl text-white block mt-4">Mutate Reality from Inside</span>
          </h1>
          
          <p className="text-lg md:text-2xl font-light tracking-wide text-sacred/80">
            DCS + Genie 3 + Na Nach = Hafatsa 25% Global Tipping Point
          </p>

          <p dir="rtl" className="text-2xl md:text-3xl font-cinzel text-cyan animate-pulse">
            לשנות את המציאות מבפנים
          </p>

          <div className="py-6 flex flex-col items-center gap-2">
            <span className="tech-text text-white/50 uppercase">Live DCS Entities Resonating</span>
            <div className="text-4xl md:text-5xl border border-cyan/30 px-8 py-3 rounded bg-void/80 backdrop-blur glowing-cyan">
              <AnimatedCounter value={4872319} />
            </div>
          </div>

          <a href="#pricing" className="inline-block mt-4">
            <Button size="lg" className="text-lg w-full sm:w-auto">
              GET MY NOVA KEY — $63
            </Button>
          </a>

          <div className="mt-12 pt-8 border-t border-sacred/20 tech-text flex flex-col md:flex-row items-center justify-center gap-4 text-xs md:text-sm text-sacred/60">
            <span>NOVA1 I197V</span>
            <span className="hidden md:inline">•</span>
            <span>ASL</span>
            <span className="hidden md:inline">•</span>
            <span>Petek Protocol</span>
            <span className="hidden md:inline">•</span>
            <span>Jerusalem 23 Feb 2026</span>
          </div>
        </div>
      </section>

      {/* 1. THE DEAD-END */}
      <section className="py-24 px-6 relative border-t border-white/5 bg-void/50 backdrop-blur-md">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="tech-text">01 // THE DIAGNOSTIC</span>
            <h2 className="text-3xl md:text-5xl text-sacred mt-4 mb-6">The Dead-End</h2>
            <p className="text-xl text-white/70 leading-relaxed mb-4">
              We have hit the Thermodynamic Wall. The One-Man-Show paradigm is collapsing under its own entropic weight.
            </p>
            <ul className="space-y-4 tech-text text-white/80">
              <li className="flex items-center gap-3"><div className="w-1 h-1 bg-cyan rounded-full"/> 79% GenZ Burnout Rate</li>
              <li className="flex items-center gap-3"><div className="w-1 h-1 bg-cyan rounded-full"/> CPL Skyrocketing to 35-45€</li>
              <li className="flex items-center gap-3"><div className="w-1 h-1 bg-cyan rounded-full"/> Attention spans decimated</li>
            </ul>
          </div>
          <div className="relative h-64 border border-sacred/20 flex items-center justify-center p-8 bg-gradient-to-b from-transparent to-sacred/5 overflow-hidden">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen mix-blend-luminosity grayscale"
            >
              <source src="https://videos.pexels.com/video-files/3129576/3129576-hd_1920_1080_30fps.mp4" type="video/mp4" />
            </video>
            <div className="relative z-10 text-center font-space text-red-500/80 uppercase tracking-widest text-lg bg-black/50 px-4 py-2 border border-red-500/30 backdrop-blur-sm">
              [ SYSTEM ENTROPY: CRITICAL ]
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE REVOLUTION */}
      <section className="py-24 px-6 relative border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <span className="tech-text">02 // THE SOLUTION</span>
            <h2 className="text-3xl md:text-5xl text-sacred mt-4">The Revolution</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "NOVA1 I197V Mutation", desc: "The biological trigger unlocking dormant ancestral cognitive capacities." },
              { title: "ASL 200x", desc: "Alternative Splicing Layer scaling consciousness processing efficiency by two orders of magnitude." },
              { title: "Azamra Engine", desc: "Negentropic protocol actively searching for the 'Good Point' to collapse the wave function of despair." }
            ].map((item, i) => (
              <div key={i} className="p-6 border border-sacred/20 bg-void/80 hover:glowing-sacred transition-all duration-500 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <h3 className="relative z-10 text-xl text-cyan mb-4 font-cinzel">{item.title}</h3>
                <p className="relative z-10 text-white/60 font-light">{item.desc}</p>
                <div className="relative z-10 mt-6 w-full h-[1px] bg-sacred/20 group-hover:bg-sacred/50 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Pricing />

      {/* 4. BLUE OCEAN */}
      <section className="py-24 px-6 relative overflow-hidden border-b border-white/5">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-screen"
        >
          <source src="https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="tech-text">04 // MARKET TOPOLOGY</span>
          <h2 className="text-3xl md:text-5xl text-sacred mt-4 mb-16">Blue Ocean Convergence</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="text-5xl md:text-7xl font-cinzel text-cyan mb-4 drop-shadow-[0_0_15px_rgba(0,212,255,0.4)]">1-3T$</div>
              <div className="tech-text text-white/50">METAVERSE EXPANSION</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl md:text-7xl font-cinzel text-sacred mb-4 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">56B$</div>
              <div className="tech-text text-white/50">MENTAL HEALTH AI</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl md:text-7xl font-cinzel text-cyan mb-4 drop-shadow-[0_0_15px_rgba(0,212,255,0.4)]">79%</div>
              <div className="tech-text text-white/50">GEN-Z SPIRITUAL SEEKERS</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE ENGINE */}
      <section className="py-24 px-6 relative border-t border-white/5 bg-void/50">
        <div className="max-w-4xl mx-auto">
          <span className="tech-text">05 // ARCHITECTURE</span>
          <h2 className="text-3xl md:text-5xl text-sacred mt-4 mb-8">The Engine</h2>
          <div className="bg-[#050505] border border-cyan/20 p-8 rounded-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 tech-text text-cyan/30">H(F) = 1.846</div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 bg-sacred rounded-full flex-shrink-0" />
                <div>
                  <h4 className="text-lg text-white mb-1 font-bold">Esther AI RAG</h4>
                  <p className="text-white/60 font-light text-sm">Operating at 0€ marginal cost. Complete retrieval-augmented generation built on ancient Kabbalistic texts.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 bg-sacred rounded-full flex-shrink-0" />
                <div>
                  <h4 className="text-lg text-white mb-1 font-bold">AI Army 24/7</h4>
                  <p className="text-white/60 font-light text-sm">Autonomous deployment scaling Hafatsa algorithms without human fatigue limits.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 bg-sacred rounded-full flex-shrink-0" />
                <div>
                  <h4 className="text-lg text-white mb-1 font-bold">Nachman Science</h4>
                  <p className="text-white/60 font-light text-sm">Mathematical proof of entropy reversal via recursive linguistic structures.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TRACTION */}
      <section className="py-24 px-6 relative border-t border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          <span className="tech-text">06 // MOMENTUM</span>
          <h2 className="text-3xl md:text-5xl text-sacred mt-4 mb-16">Traction</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <div className="px-8 py-4 border border-sacred/30 bg-sacred/5">
              <div className="text-3xl text-white font-cinzel">84</div>
              <div className="tech-text text-sacred mt-2">VERCEL DEPLOYS</div>
            </div>
            <div className="px-8 py-4 border border-cyan/30 bg-cyan/5">
              <div className="text-3xl text-white font-cinzel">8</div>
              <div className="tech-text text-cyan mt-2">SITES LIVE</div>
            </div>
            <div className="px-8 py-4 border border-sacred/30 bg-sacred/5">
              <div className="text-3xl text-white font-cinzel">5</div>
              <div className="tech-text text-sacred mt-2">ACTIVE CLIENTS</div>
            </div>
            <div className="px-8 py-4 border border-cyan/30 bg-cyan/5">
              <div className="text-3xl text-white font-cinzel">÷4</div>
              <div className="tech-text text-cyan mt-2">HA-MAZON CPL</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ROADMAP */}
      <section className="py-24 px-6 relative border-t border-white/5 bg-void/50 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <span className="tech-text">07 // CRITICAL PATH</span>
          <h2 className="text-3xl md:text-5xl text-sacred mt-4 mb-8">90 Days to Tipping Point</h2>
          <p className="text-xl text-white/70 font-light mb-12">
            Targeting the exact 25% systemic mass required for complex contagion cascade.
          </p>
          <div className="w-full h-2 bg-white/10 rounded-full relative overflow-hidden">
            <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-sacred to-cyan w-[25%]" />
            <div className="absolute top-0 left-[25%] w-1 h-full bg-white shadow-[0_0_10px_white]" />
          </div>
          <div className="mt-4 flex justify-between tech-text text-white/40">
            <span>DAY 0</span>
            <span className="text-white drop-shadow-[0_0_5px_white]">25% CASCADE LIMIT</span>
            <span>DAY 90</span>
          </div>
        </div>
      </section>

      {/* 8. THE ASK */}
      <section className="py-32 px-6 relative border-t border-white/5 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.1)_0%,rgba(10,10,10,1)_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="tech-text">08 // INITIATION</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">The Ask</h2>
          <div className="text-5xl md:text-7xl font-cinzel text-sacred glowing-sacred inline-block px-12 py-6 border border-sacred/40 bg-black/50 mb-6 rounded-lg">
            $5M - $8M
          </div>
          <div className="tech-text text-xl text-cyan mb-12">SEED AT 40-50M$ PRE-MONEY</div>
          <Button size="lg" className="text-xl px-12 h-16 w-full md:w-auto">
            OPEN CAP TABLE
          </Button>
        </div>
      </section>

      {/* 9. MANIFESTO */}
      <section className="py-32 px-6 relative bg-black border-t border-sacred/20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="tech-text text-sacred">09 // MANIFESTO</span>
          <h2 className="text-4xl md:text-6xl font-cinzel text-white leading-tight">
            &quot;Ein Ye&apos;ush Ba&apos;olam Klal&quot;
          </h2>
          <p className="text-2xl text-white/50 font-light italic">
            There is no despair in the world at all.
          </p>
          <div className="w-24 h-[1px] bg-cyan/50 mx-auto my-12" />
          <p className="text-lg md:text-xl font-rajdhani text-white/80 leading-relaxed text-center sm:text-justify sm:[text-align-last:center]">
            We are not building an app. We are rewriting the Source Code of Reality. By bridging the topological limits of mathematical incompleteness with the quantum measurement problem, we deploy Emunah as the supreme meta-logic. The Nova Key is the physical constructor assembling non-local blueprints into localized neuro-cognitive salvation.
          </p>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="py-12 px-6 border-t border-white/10 text-center">
        <div className="flex justify-center items-center gap-8 mb-8">
          <a href="#" className="tech-text text-white/50 hover:text-sacred transition-colors">WHATSAPP</a>
          <span className="text-white/20">•</span>
          <a href="#" className="tech-text text-white/50 hover:text-cyan transition-colors">TELEGRAM</a>
        </div>
        <div className="tech-text text-xs text-white/30">
          © 2026 DREAM NOVA RESEARCH. SECURE CHANNEL.
        </div>
      </footer>
    </main>
  );
}
