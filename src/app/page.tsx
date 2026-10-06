import HeroSection from "@/components/HeroSection";
import CalculatorSection from "@/components/CalculatorSection";
import PainCardsSection from "@/components/PainCardsSection";
import TimelineSection from "@/components/TimelineSection";
import AutomationSection from "@/components/AutomationSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import LgpdSection from "@/components/LgpdSection";
import TrainingSection from "@/components/TrainingSection";

function Footer() {
  return (
    <footer
      className="py-10 px-6 text-center"
      style={{ background: "#072028", color: "#6b8f94" }}
      role="contentinfo"
    >
      <p className="text-sm mb-2" style={{ color: "#8fb8be" }}>
        Feito no Brasil para ópticas independentes
      </p>
      <p className="text-sm">
        <a
          href="https://wa.me/5519982423130"
          className="underline hover:opacity-80 focus:outline-none focus:ring-2 rounded"
          style={{ color: "#c98a1e" }}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar pelo WhatsApp (19) 98242-3130"
        >
          (19) 98242-3130
        </a>
      </p>
      <p className="text-xs mt-4" style={{ color: "#3a5a61" }}>
        © {new Date().getFullYear()} · Todos os direitos reservados
      </p>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <CalculatorSection />
        <PainCardsSection />
        <TimelineSection />
        <AutomationSection />
        <HowItWorksSection />
        <LgpdSection />
        <TrainingSection />
      </main>
      <Footer />
    </>
  );
}
