const automations = [
  {
    emoji: "🔔",
    name: "Alerta de óculos esquecido",
    when: "3, 7 e 14 dias após aviso de pronto",
    what: "Lembra o cliente que o óculos está aguardando retirada.",
    benefit: "Reduz óculos parado em prateleira e libera capital.",
  },
  {
    emoji: "💬",
    name: "Orçamento esquecido",
    when: "48 h após envio do orçamento",
    what: "Pergunta se restou dúvida, sem pressão de venda.",
    benefit: "Recupera decisões que se perdem no dia a dia.",
  },
  {
    emoji: "⏰",
    name: "Relógio da renovação",
    when: "12 a 18 meses após a última compra",
    what: "Avisa quando a receita está perto de vencer.",
    benefit: "O cliente volta antes de ir ao concorrente.",
  },
  {
    emoji: "📁",
    name: "Cofre da receita digital",
    when: "Após cada consulta registrada",
    what: "Salva e envia a receita por WhatsApp ao cliente.",
    benefit: "Cliente valoriza e associa cuidado à sua óptica.",
  },
  {
    emoji: "👨‍👩‍👧",
    name: "Lembrete da família",
    when: "Baseado no cadastro de dependentes",
    what: "Lembra que filhos ou cônjuges também precisam de revisão.",
    benefit: "Aumenta o ticket sem precisar de novos clientes.",
  },
  {
    emoji: "🔍",
    name: "Acompanhamento da multifocal",
    when: "7, 30 e 60 dias após compra de multifocal",
    what: "Pergunta sobre adaptação e oferece ajuste gratuito.",
    benefit: "Reduz devoluções e aumenta confiança do cliente.",
  },
  {
    emoji: "✨",
    name: "Curadoria por WhatsApp",
    when: "Em datas estratégicas (Dia das Mães, volta às aulas…)",
    what: "Envia sugestão personalizada baseada no histórico do cliente.",
    benefit: "Vendas adicionais sem parecer spam.",
  },
  {
    emoji: "🤖",
    name: "Atendente de status",
    when: "Qualquer mensagem com 'óculos pronto' ou 'pedido'",
    what: "Responde automaticamente com o status do pedido.",
    benefit: "Alivia o WhatsApp da equipe das perguntas repetidas.",
  },
  {
    emoji: "⭐",
    name: "Pesquisa de satisfação",
    when: "48 h após retirada do produto",
    what: "Pergunta de 0 a 10 e redireciona os satisfeitos ao Google.",
    benefit: "Aumenta avaliações positivas de forma orgânica.",
  },
  {
    emoji: "📊",
    name: "Painel 'dinheiro parado'",
    when: "Relatório semanal para o gestor",
    what: "Mostra quantos clientes dormentes e quanto eles representam.",
    benefit: "Visibilidade real para tomar decisão com dado.",
  },
  {
    emoji: "🧑‍💼",
    name: "Copiloto do vendedor",
    when: "No atendimento presencial",
    what: "Exibe histórico do cliente (última compra, lente, receita) antes de abordar.",
    benefit: "Vendedor novo atende como veterano desde o primeiro dia.",
  },
];

export default function AutomationSection() {
  return (
    <section
      id="automacoes"
      className="py-20 px-6"
      style={{ background: "#fff" }}
      aria-labelledby="automacoes-title"
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-center" style={{ color: "#c98a1e" }}>
          O que colocamos em prática
        </p>
        <h2
          id="automacoes-title"
          className="text-3xl sm:text-4xl font-bold text-center mb-4"
          style={{ color: "#0e3f47" }}
        >
          11 ideias que trabalham enquanto você atende
        </h2>
        <p className="text-base text-center max-w-2xl mx-auto mb-12" style={{ color: "#445f65" }}>
          Não implantamos tudo de uma vez. Começamos pelo que gera mais resultado
          para a sua óptica e crescemos junto com a equipe.
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {automations.map((a) => (
            <div
              key={a.name}
              className="border rounded-2xl p-5"
              style={{ borderColor: "#e6f2f3", background: "#f9fdfd" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl" aria-hidden="true">{a.emoji}</span>
                <h3 className="font-bold text-base" style={{ color: "#0e3f47" }}>
                  {a.name}
                </h3>
              </div>
              <p className="text-xs font-semibold mb-1" style={{ color: "#c98a1e" }}>
                Quando: {a.when}
              </p>
              <p className="text-sm mb-2" style={{ color: "#445f65" }}>
                {a.what}
              </p>
              <p className="text-xs font-medium" style={{ color: "#0e3f47" }}>
                ✓ {a.benefit}
              </p>
            </div>
          ))}
        </div>

        {/* Table — reference for the text */}
        <div className="overflow-x-auto">
          <p className="text-sm font-semibold mb-3" style={{ color: "#0e3f47" }}>
            Resumo das automações
          </p>
          <table
            className="w-full text-sm border-collapse"
            aria-label="Tabela resumo das automações disponíveis"
          >
            <thead>
              <tr style={{ background: "#0e3f47", color: "#e6f2f3" }}>
                <th className="text-left px-4 py-3 rounded-tl-xl">Automação</th>
                <th className="text-left px-4 py-3">Quando dispara</th>
                <th className="text-left px-4 py-3 rounded-tr-xl">Principal benefício</th>
              </tr>
            </thead>
            <tbody>
              {automations.map((a, i) => (
                <tr
                  key={a.name}
                  style={{ background: i % 2 === 0 ? "#f0f9fa" : "#fff" }}
                >
                  <td className="px-4 py-3 font-medium" style={{ color: "#0e3f47" }}>
                    {a.emoji} {a.name}
                  </td>
                  <td className="px-4 py-3" style={{ color: "#445f65" }}>
                    {a.when}
                  </td>
                  <td className="px-4 py-3" style={{ color: "#445f65" }}>
                    {a.benefit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
