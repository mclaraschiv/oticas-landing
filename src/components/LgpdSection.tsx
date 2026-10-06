const items = [
  {
    emoji: "✅",
    title: "Consentimento explícito",
    desc: "Nenhuma mensagem sai sem o cliente ter autorizado o contato. O opt-in é registrado e armazenado.",
  },
  {
    emoji: "🚪",
    title: "Opção de sair a qualquer momento",
    desc: "Toda comunicação inclui uma forma simples de o cliente parar de receber mensagens — sem burocracia.",
  },
  {
    emoji: "🔒",
    title: "Uso mínimo de dados",
    desc: "Usamos apenas o que é necessário para o acompanhamento: nome, WhatsApp e histórico de compras da própria óptica.",
  },
  {
    emoji: "📲",
    title: "WhatsApp pela API oficial",
    desc: "Todas as mensagens saem pela API oficial do WhatsApp Business (Meta), não por automação paralela ou aplicativos não autorizados.",
  },
];

export default function LgpdSection() {
  return (
    <section
      id="seguranca"
      className="py-20 px-6"
      style={{ background: "#f0f9fa" }}
      aria-labelledby="lgpd-title"
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-center" style={{ color: "#c98a1e" }}>
          Segurança e privacidade
        </p>
        <h2
          id="lgpd-title"
          className="text-3xl sm:text-4xl font-bold text-center mb-4"
          style={{ color: "#0e3f47" }}
        >
          Feito dentro da LGPD
        </h2>
        <p className="text-base text-center max-w-2xl mx-auto mb-12" style={{ color: "#445f65" }}>
          Automação não é spam. Cuidamos para que cada mensagem tenha base legal,
          respeite a vontade do cliente e proteja sua óptica.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 bg-white rounded-2xl p-6 border"
              style={{ borderColor: "#cde5e8" }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0"
                style={{ background: "#e6f2f3" }}
                aria-hidden="true"
              >
                {item.emoji}
              </div>
              <div>
                <h3 className="font-bold text-base mb-1" style={{ color: "#0e3f47" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#445f65" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-center mt-8" style={{ color: "#6b8f94" }}>
          Em caso de dúvida sobre o tratamento dos seus dados ou dos dados dos seus clientes,
          entre em contato conosco pelo WhatsApp{" "}
          <a
            href="https://wa.me/5519982423130"
            className="underline font-medium"
            style={{ color: "#0e3f47" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            (19) 98242-3130
          </a>
          .
        </p>
      </div>
    </section>
  );
}
