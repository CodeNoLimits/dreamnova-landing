import { SacredParticles } from '@/components/shared/sacred-particles';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-sacred-black overflow-hidden">
      <SacredParticles />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
