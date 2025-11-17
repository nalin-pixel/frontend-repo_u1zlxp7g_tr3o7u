import { Menu, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-rose-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div
              initial={{ rotate: -10, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              className="h-8 w-8 rounded-full bg-gradient-to-br from-rose-400 via-fuchsia-500 to-purple-600 shadow-lg shadow-fuchsia-500/30"
            />
            <a href="#" className="font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-fuchsia-600 to-purple-700 text-xl">
              warrior
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#mission" className="text-gray-700 hover:text-fuchsia-700 transition">Mission</a>
            <a href="#collection" className="text-gray-700 hover:text-fuchsia-700 transition">Collection</a>
            <a href="#impact" className="text-gray-700 hover:text-fuchsia-700 transition">Impact</a>
            <a href="#support" className="text-gray-700 hover:text-fuchsia-700 transition">Support</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="relative hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-fuchsia-600 px-4 py-2 text-white shadow-md shadow-rose-400/30 hover:shadow-lg hover:shadow-rose-400/40 transition">
              <ShoppingBag size={18} />
              <span>Shop</span>
            </button>
            <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-rose-200 text-rose-600 hover:bg-rose-50">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
