const pains = [
  {
    emoji: "👓",
    title: "Óculos pronto esquecido",
    desc: "O óculos fica semanas na prateleira. O cliente não veio buscar. Você liga uma vez, não atende, e pronto — perde o fio.",
  },
  {
    emoji: "💬",
    title: "Orçamento sem resposta",
    desc: "Cliente pediu orçamento, você mandou, ele sumiu. Você fica sem saber se foi pro concorrente ou só se perdeu na conversa.",
  },
  {
    emoji: "📋",
    title: "Receita vencendo na gaveta",
    desc: "O cliente tem receita de dois anos atrás. Ele sabe que precisa trocar. Mas ninguém lembrou ele — e ele não lembrou de você.",
  },
  {
    emoji: "🆕",
    title: "Vendedor novo inseguro",
    desc: "A nova pessoa da equipe não sabe a história do cliente. Começa do zero toda vez, erra indicação e gera retrabalho.",
  },
  {
    emoji: "📱",
    title: "WhatsApp lotado de repetição",
    desc: "\"Meu óculos ficou pronto?\", \"Vocês têm lente X?\", \"Qual o horário?\" — perguntas iguais, todo dia, para a equipe inteira responder.",
  },
  {
    emoji: "⭐",
    title: "Poucas avaliações no Google",
    desc: "Cliente satisfeito vai embora feliz mas em silêncio. Cliente com qualquer problema vai ao Google. Seu perfil parece pior do que é.",
  },
];

export default function PainCardsSection() {
  return (
    <section
      id="dores"
      className="py-20 px-6"
      style={{ background: "#fff" }}
      aria-labelledby="dores-title"
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-center" style={{ color: "#c98a1e" }}>
          Soa familiar?
        </p>
        <h2
          id="dores-title"
          className="text-3xl sm:text-4xl font-bold text-center mb-4"
          style={{ color: "#0e3f47" }}
        >
          O dia a dia que drena sua óptica
        </h2>
        <p className="text-base text-center max-w-2xl mx-auto mb-12" style={{ color: "#445f65" }}>
          Nenhum desses problemas é falta de competência. É falta de um processo
          que trabalhe enquanto você atende o próximo cliente.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pains.map((pain) => (
            <article
              key={pain.title}
              className="pain-card bg-white border-2 rounded-2xl p-6 cursor-default"
              style={{ borderColor: "#e6f2f3" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                style={{ background: "#e6f2f3" }}
                aria-hidden="true"
              >
                {pain.emoji}
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ color: "#0e3f47" }}>
                {pain.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#445f65" }}>
                {pain.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
