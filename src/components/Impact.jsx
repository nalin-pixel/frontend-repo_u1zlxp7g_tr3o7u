import { Heart, Ribbon, Users } from "lucide-react";

export default function Impact() {
  const stats = [
    { label: "Shelter nights funded", value: "1,240", icon: HomeIcon },
    { label: "Counseling sessions", value: "680", icon: Heart },
    { label: "Women supported", value: "320", icon: Users },
  ];

  return (
    <section id="impact" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Impact with every soak</h2>
            <p className="mt-4 text-gray-600">Your purchase directly funds organizations supporting women experiencing domestic abuse. We publish monthly impact reports and partner with vetted nonprofits.</p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {stats.map(({ label, value, icon: Icon }) => (
                <div key={label} className="rounded-2xl border border-rose-100 bg-white p-4 text-center">
                  <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                    <Icon size={18} />
                  </div>
                  <div className="mt-2 text-2xl font-extrabold text-gray-900">{value}</div>
                  <div className="text-xs text-gray-600">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-rose-100 bg-rose-50 p-6">
            <blockquote className="text-rose-900">
              <p className="text-lg">“After leaving, I didn’t know how to feel safe in my own skin. The ritual of a bath became my reclaiming space — small, steady moments where I felt like myself again.”</p>
              <footer className="mt-4 text-sm text-rose-700">— A survivor in our community</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em" {...props}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M9 21V12h6v9" />
    </svg>
  );
}
