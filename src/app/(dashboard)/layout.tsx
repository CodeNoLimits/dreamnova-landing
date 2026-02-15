"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  ShoppingCart,
  TrendingUp,
  Zap,
  Users,
  BookOpen,
  Gift,
  Nfc,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Overview", href: "/dashboard", icon: BarChart3 },
  { label: "Orders", href: "/dashboard/orders", icon: ShoppingCart },
  { label: "Analytics", href: "/dashboard/analytics", icon: TrendingUp },
  { label: "Hafatsa", href: "/dashboard/hafatsa", icon: Zap },
  { label: "Waitlist", href: "/dashboard/waitlist", icon: Users },
  { label: "Academics", href: "/dashboard/academics", icon: BookOpen },
  { label: "Grants", href: "/dashboard/grants", icon: Gift },
  { label: "NFC", href: "/dashboard/nfc", icon: Nfc },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-sacred-black text-white flex">
      {/* Sidebar */}
      <aside
        className={`fixed md:relative w-64 md:w-16 lg:w-64 h-screen bg-sacred-surface border-r border-gold/20 transition-all duration-300 z-40 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Close button on mobile */}
        <button
          onClick={() => setSidebarOpen(false)}
          className="md:hidden absolute top-4 right-4 p-2"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Logo */}
        <div className="h-16 flex items-center justify-center border-b border-gold/20 px-4">
          <span className="text-gold font-bold text-sm lg:text-lg hidden lg:inline">
            DREAM NOVA
          </span>
          <span className="text-gold font-bold lg:hidden">DN</span>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto py-6 px-2 lg:px-4">
          <div className="space-y-2">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3 lg:px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-gold/20 border border-gold text-gold"
                      : "text-gray-300 hover:text-gold hover:bg-gold/10"
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="hidden lg:inline text-sm font-medium">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>
      </aside>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <header className="h-16 border-b border-gold/20 bg-sacred-surface px-4 sm:px-6 lg:px-8 flex items-center justify-between sticky top-0 z-20">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden p-2 hover:bg-gold/10 rounded-lg"
          >
            <Menu className="w-6 h-6" />
          </button>

          <h1 className="text-lg font-bold text-gold flex-1">
            DREAM NOVA Admin
          </h1>

          <div className="text-sm text-gray-400">
            {new Date().toLocaleDateString()}
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
