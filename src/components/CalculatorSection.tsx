"use client";
import { useState, useCallback } from "react";

function fmt(n: number) {
  return n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

export default function CalculatorSection() {
  const [totalClientes, setTotalClientes] = useState(500);
  const [pctDormentes, setPctDormentes] = useState(60);
  const [ticketMedio, setTicketMedio] = useState(650);
  const [pctRetorno, setPctRetorno] = useState(20);

  const dormentes = Math.round((totalClientes * pctDormentes) / 100);
  const retornariam = Math.round((dormentes * pctRetorno) / 100);
  const receitaAnual = retornariam * ticketMedio;

  const handleNumber = useCallback(
    (setter: (v: number) => void, min: number, max: number) =>
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = Number(e.target.value);
        if (!isNaN(val)) setter(Math.min(max, Math.max(min, val)));
      },
    []
  );

  const inputClass =
    "w-full border-2 rounded-lg px-4 py-2.5 text-base font-medium focus:outline-none focus:ring-2 transition-colors";

  return (
    <section
      id="calculadora"
      className="py-20 px-6"
      style={{ background: "#e6f2f3" }}
      aria-labelledby="calc-title"
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#c98a1e" }}>
          Simulação
        </p>
        <h2
          id="calc-title"
          className="text-3xl sm:text-4xl font-bold mb-4"
          style={{ color: "#0e3f47" }}
        >
          Dinheiro parado na sua base
        </h2>
        <p className="text-base mb-10" style={{ color: "#334f55" }}>
          Ajuste os números para a realidade da sua óptica e veja o potencial
          que está adormecido.
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-6">
          {/* Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Total de clientes */}
            <div>
              <label htmlFor="totalClientes" className="block text-sm font-semibold mb-1.5" style={{ color: "#0e3f47" }}>
                Total de clientes cadastrados
              </label>
              <input
                id="totalClientes"
                type="number"
                min={10}
                max={100000}
                value={totalClientes}
                onChange={handleNumber(setTotalClientes, 10, 100000)}
                className={inputClass}
                style={{ borderColor: "#cde5e8", color: "#0e3f47" }}
                aria-describedby="totalClientes-desc"
              />
              <p id="totalClientes-desc" className="text-xs mt-1" style={{ color: "#6b8f94" }}>
                Quantos clientes sua óptica tem registrados?
              </p>
            </div>

            {/* % dormentes */}
            <div>
              <label htmlFor="pctDormentes" className="block text-sm font-semibold mb-1.5" style={{ color: "#0e3f47" }}>
                % que não comprou há mais de 18 meses
              </label>
              <div className="flex items-center gap-3">
                <input
                  id="pctDormentes"
                  type="range"
                  min={10}
                  max={95}
                  value={pctDormentes}
                  onChange={(e) => setPctDormentes(Number(e.target.value))}
                  className="flex-1 accent-[#0e3f47]"
                  aria-valuenow={pctDormentes}
                  aria-valuemin={10}
                  aria-valuemax={95}
                  aria-label={`Percentual de clientes inativos: ${pctDormentes}%`}
                />
                <span
                  className="w-12 text-center text-sm font-bold rounded-lg py-1"
                  style={{ background: "#0e3f47", color: "#e6f2f3" }}
                  aria-live="polite"
                >
                  {pctDormentes}%
                </span>
              </div>
              <p className="text-xs mt-1" style={{ color: "#6b8f94" }}>
                Média do setor: 50–70 % (ilustrativo)
              </p>
            </div>

            {/* Ticket médio */}
            <div>
              <label htmlFor="ticketMedio" className="block text-sm font-semibold mb-1.5" style={{ color: "#0e3f47" }}>
                Ticket médio por compra (R\$)
              </label>
              <input
                id="ticketMedio"
                type="number"
                min={100}
                max={10000}
                value={ticketMedio}
                onChange={handleNumber(setTicketMedio, 100, 10000)}
                className={inputClass}
                style={{ borderColor: "#cde5e8", color: "#0e3f47" }}
              />
            </div>

            {/* % estimada de retorno */}
            <div>
              <label htmlFor="pctRetorno" className="block text-sm font-semibold mb-1.5" style={{ color: "#0e3f47" }}>
                % estimada de retorno com acompanhamento
              </label>
              <div className="flex items-center gap-3">
                <input
                  id="pctRetorno"
                  type="range"
                  min={5}
                  max={60}
                  value={pctRetorno}
                  onChange={(e) => setPctRetorno(Number(e.target.value))}
                  className="flex-1 accent-[#c98a1e]"
                  aria-valuenow={pctRetorno}
                  aria-valuemin={5}
                  aria-valuemax={60}
                  aria-label={`Percentual estimado de retorno: ${pctRetorno}%`}
                />
                <span
                  className="w-12 text-center text-sm font-bold rounded-lg py-1"
                  style={{ background: "#c98a1e", color: "#fff" }}
                  aria-live="polite"
                >
                  {pctRetorno}%
                </span>
              </div>
              <p className="text-xs mt-1" style={{ color: "#6b8f94" }}>
                Padrão conservador: 20%. Ajuste conforme seu histórico.
              </p>
            </div>
          </div>

          {/* Resultado */}
          <div
            className="rounded-xl p-6 text-center"
            style={{ background: "#0e3f47" }}
            role="region"
            aria-label="Resultado da simulação"
          >
            <p className="text-sm font-medium mb-1" style={{ color: "#cde5e8" }}>
              Potencial de receita adicional por ano
            </p>
            <p
              className="text-4xl sm:text-5xl font-bold mt-1"
              style={{ color: "#c98a1e" }}
              aria-live="polite"
            >
              {fmt(receitaAnual)}
            </p>
            <p className="text-xs mt-3" style={{ color: "#8fb8be" }}>
              Com base em{" "}
              <strong style={{ color: "#e6f2f3" }}>{dormentes.toLocaleString("pt-BR")}</strong>{" "}
              clientes dormentes · {retornariam.toLocaleString("pt-BR")} retornariam · ticket de {fmt(ticketMedio)}
            </p>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-center" style={{ color: "#6b8f94" }}>
            ⚠️ Esta é uma <strong>simulação ilustrativa</strong> baseada nos números que você inseriu. Os
            resultados reais variam conforme o perfil de cada óptica e não representam uma garantia de
            desempenho.
          </p>


        </div>
      </div>
    </section>
  );
}
