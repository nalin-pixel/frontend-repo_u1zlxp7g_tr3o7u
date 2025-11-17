import { Sparkles, Shield, HeartHandshake } from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: Sparkles,
      title: "Self-care, elevated",
      desc: "Luxurious, clean ingredients infused with nourishing oils and captivating scents.",
    },
    {
      icon: Shield,
      title: "Protection & power",
      desc: "Each blend is inspired by the strength of survivors — a reminder of your resilience.",
    },
    {
      icon: HeartHandshake,
      title: "Purposeful impact",
      desc: "A portion of every sale funds shelters, legal aid, and counseling services.",
    },
  ];

  return (
    <section id="mission" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Care that fights back</h2>
          <p className="mt-4 text-gray-600">Our products honor softness and strength — because both can coexist.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
