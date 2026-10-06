"use client";
import { useState } from "react";

interface FormData {
  name: string;
  optica: string;
  cidade: string;
  whatsapp: string;
  clientes: string;
}

const initial: FormData = {
  name: "",
  optica: "",
  cidade: "",
  whatsapp: "",
  clientes: "",
};

const clienteRanges = [
  "Menos de 200",
  "200 – 500",
  "500 – 1.000",
  "1.000 – 3.000",
  "Mais de 3.000",
];

export default function CtaSection() {
  const [form, setForm] = useState<FormData>(initial);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const set = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const missing = Object.entries(form).find(([, v]) => !v.trim());
    if (missing) {
      setError("Por favor, preencha todos os campos antes de enviar.");
      return;
    }
    setLoading(true);
    try {
      await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setDone(true);
    } catch {
      setError("Erro ao enviar. Tente novamente ou fale pelo WhatsApp (19) 98242-3130.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full border-2 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-colors bg-white";
  const labelClass = "block text-sm font-semibold mb-1.5";

  return (
    <section
      id="cta-final"
      className="py-20 px-6"
      style={{ background: "linear-gradient(160deg, #0e3f47 0%, #0a2f36 60%, #072028 100%)" }}
      aria-labelledby="cta-title"
    >
      <div className="max-w-2xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-center" style={{ color: "#c98a1e" }}>
          Primeiro passo
        </p>
        <h2
          id="cta-title"
          className="text-3xl sm:text-4xl font-bold text-center mb-4"
          style={{ color: "#e6f2f3" }}
        >
          Diagnóstico gratuito da sua base
        </h2>
        <p className="text-base text-center max-w-xl mx-auto mb-10" style={{ color: "#8fb8be" }}>
          Preencha o formulário abaixo. Em até 24 horas úteis entramos em
          contato para agendar uma conversa — sem script de vendas, sem pressão.
        </p>

        {done ? (
          <div
            className="rounded-2xl p-10 text-center"
            style={{ background: "rgba(255,255,255,0.07)", border: "1.5px solid rgba(201,138,30,0.4)" }}
            role="status"
            aria-live="polite"
          >
            <p className="text-4xl mb-4" aria-hidden="true">🎉</p>
            <h3 className="font-bold text-2xl mb-3" style={{ color: "#c98a1e" }}>
              Recebemos seu pedido!
            </h3>
            <p className="text-base" style={{ color: "#cde5e8" }}>
              Em até 24 horas úteis entraremos em contato pelo WhatsApp que você informou.
              Enquanto isso, se quiser falar antes, é só chamar:{" "}
              <a
                href="https://wa.me/5519982423130"
                className="underline font-semibold"
                style={{ color: "#c98a1e" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                (19) 98242-3130
              </a>
              .
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl p-6 sm:p-8 space-y-5"
            style={{ background: "rgba(255,255,255,0.06)", border: "1.5px solid rgba(201,138,30,0.25)" }}
            aria-label="Formulário de diagnóstico gratuito"
          >
            {/* Name */}
            <div>
              <label htmlFor="cta-name" className={labelClass} style={{ color: "#cde5e8" }}>
                Seu nome
              </label>
              <input
                id="cta-name"
                type="text"
                value={form.name}
                onChange={set("name")}
                placeholder="Ex.: João Souza"
                className={inputClass}
                style={{ borderColor: "rgba(201,138,30,0.3)", color: "#111" }}
                required
                autoComplete="name"
              />
            </div>

            {/* Óptica */}
            <div>
              <label htmlFor="cta-optica" className={labelClass} style={{ color: "#cde5e8" }}>
                Nome da óptica
              </label>
              <input
                id="cta-optica"
                type="text"
                value={form.optica}
                onChange={set("optica")}
                placeholder="Ex.: Ótica Visão Clara"
                className={inputClass}
                style={{ borderColor: "rgba(201,138,30,0.3)", color: "#111" }}
                required
              />
            </div>

            {/* Cidade */}
            <div>
              <label htmlFor="cta-cidade" className={labelClass} style={{ color: "#cde5e8" }}>
                Cidade
              </label>
              <input
                id="cta-cidade"
                type="text"
                value={form.cidade}
                onChange={set("cidade")}
                placeholder="Ex.: Campinas – SP"
                className={inputClass}
                style={{ borderColor: "rgba(201,138,30,0.3)", color: "#111" }}
                required
                autoComplete="address-level2"
              />
            </div>

            {/* WhatsApp */}
            <div>
              <label htmlFor="cta-whatsapp" className={labelClass} style={{ color: "#cde5e8" }}>
                Seu WhatsApp com DDD
              </label>
              <input
                id="cta-whatsapp"
                type="tel"
                value={form.whatsapp}
                onChange={set("whatsapp")}
                placeholder="(19) 99999-9999"
                className={inputClass}
                style={{ borderColor: "rgba(201,138,30,0.3)", color: "#111" }}
                required
                autoComplete="tel"
              />
            </div>

            {/* Clientes */}
            <div>
              <label htmlFor="cta-clientes" className={labelClass} style={{ color: "#cde5e8" }}>
                Número aproximado de clientes cadastrados
              </label>
              <select
                id="cta-clientes"
                value={form.clientes}
                onChange={set("clientes")}
                className={inputClass}
                style={{ borderColor: "rgba(201,138,30,0.3)", color: form.clientes ? "#111" : "#6b7280" }}
                required
              >
                <option value="" disabled>
                  Selecione…
                </option>
                {clienteRanges.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            {error && (
              <p className="text-sm font-medium" style={{ color: "#f59e0b" }} role="alert">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full font-bold text-base py-4 rounded-xl transition-opacity hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50"
              style={{ background: "#c98a1e", color: "#fff" }}
            >
              {loading ? "Enviando…" : "Quero o diagnóstico gratuito →"}
            </button>

            <p className="text-xs text-center" style={{ color: "#6b8f94" }}>
              Sem spam. Seus dados são usados apenas para o contato de diagnóstico,
              conforme nossa política de privacidade e a LGPD.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
