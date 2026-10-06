"use client";
import { useState } from "react";

export default function TrainingSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!name.trim() || !phone.trim()) {
      setError("Por favor, preencha nome e WhatsApp.");
      return;
    }
    setLoading(true);
    try {
      await fetch("/api/guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone }),
      });
      setDone(true);
    } catch {
      setError("Erro ao enviar. Tente novamente ou fale conosco pelo WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full border-2 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 transition-colors";

  return (
    <section
      id="treinamento"
      className="py-20 px-6"
      style={{ background: "#0e3f47" }}
      aria-labelledby="training-title"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — info */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#c98a1e" }}>
              Treinamento da equipe
            </p>
            <h2
              id="training-title"
              className="text-3xl sm:text-4xl font-bold mb-6"
              style={{ color: "#e6f2f3" }}
            >
              Vendedor que entende de lente vende mais — e retém mais
            </h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: "#8fb8be" }}>
              A automação cuida do pós-venda. Mas quem encanta no balcão é sua
              equipe. Por isso trabalhamos com uma especialista com mais de 10
              anos no mercado óptico — ex-gerente de rede de ópticas —, que
              treina seus vendedores em:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Como apresentar e justificar lentes de alto valor",
                "Abordagem consultiva para clientes com multifocal",
                "Como usar o histórico do cliente para personalizar a venda",
                "Técnicas para lidar com objeção de preço sem dar desconto",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-1 w-5 h-5 rounded-full flex items-center justify-center text-xs shrink-0"
                    style={{ background: "#c98a1e", color: "#fff" }}
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span className="text-sm" style={{ color: "#cde5e8" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — PDF form */}
          <div
            className="rounded-2xl p-6 sm:p-8"
            style={{ background: "rgba(255,255,255,0.06)", border: "1.5px solid rgba(201,138,30,0.3)" }}
          >
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4"
              style={{ background: "rgba(201,138,30,0.15)" }}
              aria-hidden="true"
            >
              📘
            </div>
            <h3 className="font-bold text-xl mb-1" style={{ color: "#e6f2f3" }}>
              Guia do Vendedor de Óptica
            </h3>
            <p className="text-sm mb-6" style={{ color: "#8fb8be" }}>
              PDF gratuito com os principais scripts de atendimento, como
              justificar lentes premium e como abordar clientes inativos no
              balcão.
            </p>

            {done ? (
              <div
                className="rounded-xl p-5 text-center"
                style={{ background: "rgba(201,138,30,0.15)" }}
                role="status"
                aria-live="polite"
              >
                <p className="text-2xl mb-2" aria-hidden="true">🎉</p>
                <p className="font-bold text-lg mb-1" style={{ color: "#c98a1e" }}>
                  Pronto!
                </p>
                <p className="text-sm" style={{ color: "#cde5e8" }}>
                  Em breve você vai receber o Guia pelo WhatsApp que informou.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Formulário de download do guia">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="guide-name" className="block text-sm font-semibold mb-1.5" style={{ color: "#cde5e8" }}>
                      Seu nome
                    </label>
                    <input
                      id="guide-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex.: João Silva"
                      className={inputClass}
                      style={{ borderColor: "rgba(201,138,30,0.4)", background: "rgba(255,255,255,0.07)", color: "#e6f2f3" }}
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="guide-phone" className="block text-sm font-semibold mb-1.5" style={{ color: "#cde5e8" }}>
                      WhatsApp com DDD
                    </label>
                    <input
                      id="guide-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(19) 99999-9999"
                      className={inputClass}
                      style={{ borderColor: "rgba(201,138,30,0.4)", background: "rgba(255,255,255,0.07)", color: "#e6f2f3" }}
                      required
                      autoComplete="tel"
                    />
                  </div>

                  {error && (
                    <p className="text-sm font-medium" style={{ color: "#f59e0b" }} role="alert">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full font-semibold py-3 rounded-xl transition-opacity hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50"
                    style={{ background: "#c98a1e", color: "#fff" }}
                  >
                    {loading ? "Enviando…" : "Receber o Guia pelo WhatsApp →"}
                  </button>

                  <p className="text-xs text-center" style={{ color: "#6b8f94" }}>
                    Seus dados são usados apenas para envio do guia. Você pode parar de receber mensagens a qualquer momento.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
