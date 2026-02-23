'use client';

"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { EcosystemFooter } from "./ecosystem-footer";

export function Footer() {
  return (
    <>
      <EcosystemFooter />
      <footer className="bg-[#050508] border-t border-[#1A1A2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
              <Link href="/" className="inline-block w-fit">
                <span className="font-display text-2xl font-bold tracking-wider">
                  <span className="text-[#D4AF37]">DREAM</span>
                  <span className="text-[#00D4FF]">NOVA</span>
                </span>
              </Link>
              <p className="text-gray-500 text-sm font-mono mt-2">
                © {new Date().getFullYear()} Dream Nova Ltd. Legal & Privacy.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <a 
                href="https://wa.me/something" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-[#00FF88] transition-colors font-mono text-sm uppercase"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              <a 
                href="https://t.me/nerostats" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-[#00D4FF] transition-colors font-mono text-sm uppercase"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .24z"/></svg>
                @nerostats
              </a>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
}
