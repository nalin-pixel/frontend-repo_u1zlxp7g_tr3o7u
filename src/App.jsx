import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Collection from "./components/Collection";
import Impact from "./components/Impact";
import Support from "./components/Support";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <Collection />
        <Impact />
        <CTA />
        <Support />
        <Footer />
      </main>
    </div>
  );
}

function CTA() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Join the warrior movement</h3>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Sign up for stories of resilience, early access to drops, and monthly impact reports.</p>
        <form className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <input type="email" required placeholder="Your email" className="w-full sm:w-80 rounded-full border border-rose-200 px-5 py-3 outline-none focus:ring-2 focus:ring-rose-400" />
          <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-500 to-fuchsia-600 px-6 py-3 text-white font-semibold shadow">
            Subscribe
          </button>
        </form>
        <p className="mt-3 text-xs text-gray-500">We respect your privacy. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-rose-100 py-10 bg-rose-50/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-rose-400 via-fuchsia-500 to-purple-600" />
          <span className="font-extrabold text-gray-900">warrior</span>
        </div>
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Warrior. 10% of profits support women overcoming domestic abuse.</p>
      </div>
    </footer>
  );
}

export default App;
