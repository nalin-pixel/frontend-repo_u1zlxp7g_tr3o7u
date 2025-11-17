import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-rose-200 blur-3xl opacity-60" />
        <div className="absolute top-20 -right-20 h-[28rem] w-[28rem] rounded-full bg-fuchsia-200 blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-40 w-[120%] bg-gradient-to-t from-white" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center pt-16 pb-20">
          <div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-black tracking-tight text-gray-900"
            >
              Bathe in strength. Rise as a
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-fuchsia-600 to-purple-700"> warrior</span>.
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 text-lg text-gray-700 max-w-xl"
            >
              Handcrafted bath bombs that celebrate resilience and fund support for women affected by domestic abuse. Every soak is a step toward healing and empowerment.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#collection" className="inline-flex items-center rounded-full bg-gradient-to-r from-rose-500 to-fuchsia-600 px-6 py-3 text-white font-semibold shadow-lg shadow-rose-400/30 hover:shadow-rose-400/50 transition">
                Explore collection
              </a>
              <a href="#impact" className="inline-flex items-center rounded-full border border-rose-200 px-6 py-3 text-rose-700 hover:bg-rose-50 font-semibold">
                Our impact
              </a>
            </motion.div>

            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-10 w-10 rounded-full ring-2 ring-white bg-gradient-to-br from-rose-400 to-fuchsia-500" />
                ))}
              </div>
              <p className="text-sm text-gray-600">
                10% of every purchase funds shelters, legal aid, and counseling.
              </p>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto aspect-square max-w-md rounded-[2rem] p-1 bg-gradient-to-br from-rose-300 via-fuchsia-300 to-purple-300"
            >
              <div className="h-full w-full rounded-[1.8rem] bg-white p-6 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Rise", color: "from-rose-400 to-rose-600" },
                    { name: "Bloom", color: "from-fuchsia-400 to-fuchsia-600" },
                    { name: "Shield", color: "from-purple-400 to-purple-600" },
                    { name: "Grace", color: "from-pink-400 to-pink-600" },
                  ].map((item) => (
                    <div key={item.name} className="rounded-2xl bg-gradient-to-br p-4 text-white shadow-lg aspect-square flex flex-col items-start justify-end"
                      style={{}}
                    >
                      <div className={`w-full h-full rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                        <span className="text-xl font-bold drop-shadow">{item.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            <div className="absolute -right-6 -bottom-8 h-28 w-28 rounded-full bg-fuchsia-300 blur-2xl opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
}
