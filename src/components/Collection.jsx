import { motion } from "framer-motion";

const products = [
  {
    name: "Rise",
    note: "Citrus + Jasmine",
    color: "from-rose-400 via-rose-500 to-rose-600",
    desc: "A bright, energizing blend that lifts the spirit and awakens courage.",
  },
  {
    name: "Bloom",
    note: "Peony + Sandalwood",
    color: "from-fuchsia-400 via-fuchsia-500 to-fuchsia-600",
    desc: "Soft floral heart grounded with warmth — a love letter to your growth.",
  },
  {
    name: "Shield",
    note: "Lavender + Cedar",
    color: "from-purple-400 via-purple-500 to-purple-600",
    desc: "A calming armor for the nervous system — breathe, release, restore.",
  },
  {
    name: "Grace",
    note: "Rose + Vanilla",
    color: "from-pink-400 via-pink-500 to-pink-600",
    desc: "Comforting sweetness that honors tenderness without fragility.",
  },
];

export default function Collection() {
  return (
    <section id="collection" className="py-16 bg-gradient-to-b from-white to-rose-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">The Warrior Collection</h2>
            <p className="mt-2 text-gray-600 max-w-xl">Four signature bath bombs crafted to soothe, restore, and empower."</p>
          </div>
          <a href="#support" className="inline-flex items-center rounded-full border border-rose-200 px-5 py-2.5 text-rose-700 hover:bg-rose-50 font-semibold">Learn how we give</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-rose-100 bg-white p-4 shadow-sm hover:shadow-md transition"
            >
              <div className={`aspect-square rounded-xl bg-gradient-to-br ${p.color} p-1`}> 
                <div className="h-full w-full rounded-lg bg-white/10 backdrop-blur-sm flex flex-col items-center justify-center text-white">
                  <span className="text-3xl font-black drop-shadow">{p.name}</span>
                  <span className="mt-1 text-sm opacity-90">{p.note}</span>
                </div>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{p.name}</h3>
              <p className="text-sm text-gray-600">{p.desc}</p>
              <button className="mt-4 w-full rounded-full bg-gradient-to-r from-rose-500 to-fuchsia-600 py-2.5 text-white font-semibold shadow hover:opacity-95">Add to bag</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
