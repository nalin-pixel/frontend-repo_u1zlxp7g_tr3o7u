import { Mail, HeartHandshake } from "lucide-react";

export default function Support() {
  return (
    <section id="support" className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Support and resources</h2>
        <p className="mt-4 text-gray-600">If you or someone you know is experiencing domestic abuse, help is available. In an emergency, call your local authorities.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a
            href="https://www.thehotline.org/"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-rose-100 bg-white p-6 text-left hover:shadow-md transition"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
              <HeartHandshake size={18} />
            </div>
            <div className="mt-2 font-semibold text-gray-900">National Domestic Violence Hotline (US)</div>
            <div className="text-sm text-gray-600">Call 1-800-799-7233 or chat online for confidential support 24/7.</div>
          </a>
          <a
            href="https://refuge.org.uk/"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-rose-100 bg-white p-6 text-left hover:shadow-md transition"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
              <Mail size={18} />
            </div>
            <div className="mt-2 font-semibold text-gray-900">Refuge (UK)</div>
            <div className="text-sm text-gray-600">Confidential support for women and children. If unsafe to call, use online chat.</div>
          </a>
        </div>

        <p className="mt-6 text-xs text-gray-500">If visiting this site could put you at risk, clear your browser history and consider using a private window.</p>
      </div>
    </section>
  );
}
