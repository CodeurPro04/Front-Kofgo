import React from "react";

function MaintenancePage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 py-16 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.18),_transparent_35%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.22),_transparent_40%)]" />

      <section className="relative z-10 w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-2xl backdrop-blur">
        <span className="inline-flex rounded-full border border-amber-400/30 bg-amber-300/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
          Maintenance
        </span>

        <h1 className="mt-6 text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
          Site temporairement indisponible
        </h1>

        <p className="mt-6 text-base leading-7 text-slate-200 md:text-lg">
          Nous effectuons actuellement une maintenance pour améliorer la
          plateforme.
        </p>

        <p className="mt-3 text-sm leading-6 text-slate-300 md:text-base">
          The website is currently under maintenance. Please check back soon.
        </p>
      </section>
    </main>
  );
}

export default MaintenancePage;
