"use client";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    // Respect prefers-reduced-motion: show text immediately
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      el.classList.add("in-focus");
      return;
    }

    // Scroll-based: hero is visible on page load so IntersectionObserver
    // would fire immediately. Instead we clear the blur only after the user
    // scrolls down ~160 px, creating the real lens-focus effect.
    const THRESHOLD = 160;

    const handleScroll = () => {
      if (window.scrollY >= THRESHOLD) {
        el.classList.add("in-focus");
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCalc = () => {
    document.getElementById("calculadora")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="abertura"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20"
      style={{ background: "linear-gradient(160deg, #0e3f47 0%, #0a2f36 60%, #072028 100%)" }}
      aria-label="Abertura"
    >
      {/* Logo / badge */}
      <div className="mb-8">
        <span
          className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full border"
          style={{ borderColor: "#c98a1e", color: "#c98a1e" }}
        >
          Para ópticas independentes
        </span>
      </div>

      {/* Lens-blur headline */}
      <div ref={textRef} className="lens-text max-w-3xl">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          style={{ color: "#e6f2f3" }}
        >
          O cliente comprou, sumiu, e você{" "}
          <span style={{ color: "#c98a1e" }}>só vê ele de novo</span> se ele
          lembrar de você.
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto" style={{ color: "#cde5e8" }}>
          Sua base de clientes é o seu maior estoque — e ele está parado,
          esquecido, rendendo zero.
        </p>
      </div>

      {/* CTA button */}
      <div className="mt-12">
        <button
          onClick={scrollToCalc}
          className="inline-block font-semibold text-base sm:text-lg px-8 py-4 rounded-xl cursor-pointer transition-all duration-200 hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-offset-2"
          style={{ background: "#c98a1e", color: "#fff" }}
          aria-label="Calcular quanto dinheiro está parado na minha base de clientes"
        >
          Calcular quanto está parado na minha base →
        </button>
        <p className="mt-4 text-sm" style={{ color: "#8fb8be" }}>
          Simulação gratuita · Sem precisar de cadastro
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#c98a1e"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
