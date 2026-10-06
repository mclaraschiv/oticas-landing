interface Bubble {
  type: "sent" | "received";
  text: string;
  time: string;
}

interface TimelineStep {
  dot: string;
  label: string;
  title: string;
  desc: string;
  bubbles: Bubble[];
}

const steps: TimelineStep[] = [
  {
    dot: "1",
    label: "Orçamento enviado",
    title: "Orçamento enviado, cliente em silêncio",
    desc: "48 horas depois de enviar o orçamento, o sistema dispara uma mensagem personalizada — sem pressão, só relembrando.",
    bubbles: [
      { type: "received", text: "Oi Ana! Tudo bem? 😊\nPassando pra saber se você teve chance de ver o orçamento que enviamos anteontem. Ficou alguma dúvida sobre as lentes? A gente resolve aqui!", time: "14:32" },
      { type: "sent", text: "Oi! Verdade, esqueci de ver. Pode me mandar de novo?", time: "14:45" },
    ],
  },
  {
    dot: "2",
    label: "Óculos pronto",
    title: "Óculos pronto — aviso automático",
    desc: "Quando o óculos chega da laboratório, o cliente recebe um aviso carinhoso pelo WhatsApp.",
    bubbles: [
      { type: "received", text: "Ana, seu óculos ficou pronto! 🎉\nPode vir buscar quando quiser, de seg a sáb, das 9h às 19h. Qualquer dúvida é só chamar. Te esperamos!", time: "10:05" },
      { type: "sent", text: "Ótimo! Vou passar amanhã à tarde 🙌", time: "10:23" },
    ],
  },
  {
    dot: "3",
    label: "7 dias depois",
    title: "7 dias depois — tudo certo com o óculos?",
    desc: "Uma semana após a retirada, o cliente recebe uma mensagem de acompanhamento. Simples, humana, sem vender nada.",
    bubbles: [
      { type: "received", text: "Oi Ana! Faz uma semana que você pegou seu óculos novo. Está adaptando bem? Se sentir qualquer desconforto na visão ou no encaixe, fala com a gente — ajuste é gratuito! 😊", time: "09:47" },
      { type: "sent", text: "Tô adorando! Mas sim, tá um pouquinho apertado na orelha direita", time: "11:02" },
      { type: "received", text: "Vem aqui qualquer hora que a gente ajusta rapidinho, sem custo nenhum 🙂", time: "11:05" },
    ],
  },
  {
    dot: "4",
    label: "6 meses",
    title: "6 meses — lembrete de revisão",
    desc: "Ao completar seis meses, o cliente recebe um lembrete para verificar se a visão continua ok.",
    bubbles: [
      { type: "received", text: "Ana, já faz 6 meses desde seus óculos novos! 👁️\nAproveitando pra lembrar que é uma boa época pra checar a visão, principalmente se você estiver usando muito tela. Quer marcar uma revisão rápida?", time: "15:10" },
    ],
  },
  {
    dot: "5",
    label: "12–18 meses",
    title: "12 a 18 meses — relógio da renovação",
    desc: "Quando a receita está perto de vencer, o cliente é lembrado antes de precisar procurar o concorrente.",
    bubbles: [
      { type: "received", text: "Oi Ana! Sua receita óptica foi feita há quase 1 ano e meio 📋\nÉ um bom momento pra uma nova avaliação — principalmente se você notar que precisa forçar mais a visão. Podemos agendar com o oftalmologista parceiro ou fica à vontade pra escolher o seu. O que achar melhor! 😊", time: "08:30" },
      { type: "sent", text: "Que bom que vocês me lembraram! Tava sentindo sim que algo mudou", time: "09:14" },
    ],
  },
  {
    dot: "🎂",
    label: "Aniversário",
    title: "Aniversário — mensagem especial",
    desc: "No aniversário do cliente, uma mensagem genuína — com um benefício especial, não um cupom genérico.",
    bubbles: [
      { type: "received", text: "Feliz aniversário, Ana! 🎂🥳\nEsperamos que seu dia esteja incrível! Como presente da Ótica Visão Clara, você tem 10% de desconto na sua próxima compra até o fim do mês. Com carinho da nossa equipe! 💚", time: "08:00" },
      { type: "sent", text: "Que fofooo!! Obrigada!! Vou usar logo logo 😍", time: "09:33" },
    ],
  },
];

export default function TimelineSection() {
  return (
    <section
      id="jornada"
      className="py-20 px-6"
      style={{ background: "#f0f9fa" }}
      aria-labelledby="jornada-title"
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-center" style={{ color: "#c98a1e" }}>
          A jornada do cliente
        </p>
        <h2
          id="jornada-title"
          className="text-3xl sm:text-4xl font-bold text-center mb-4"
          style={{ color: "#0e3f47" }}
        >
          Cada momento certo, na hora certa
        </h2>
        <p className="text-base text-center max-w-2xl mx-auto mb-14" style={{ color: "#445f65" }}>
          Veja como seria a experiência de uma cliente chamada Ana — com a sua óptica presentes em cada
          etapa da vida dela. Todos os dados são fictícios e servem apenas como ilustração.
        </p>

        {/* Timeline */}
        <ol className="relative pl-10" aria-label="Linha do tempo da jornada do cliente">
          <div className="timeline-line" aria-hidden="true" />
          {steps.map((step, i) => (
            <li key={i} className="relative mb-14 last:mb-0">
              {/* Dot */}
              <div
                className="timeline-dot absolute -left-10 top-0"
                aria-hidden="true"
              >
                {step.dot}
              </div>

              {/* Content */}
              <div className="ml-4">
                <span
                  className="inline-block text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full mb-2"
                  style={{ background: "#e6f2f3", color: "#0e3f47" }}
                >
                  {step.label}
                </span>
                <h3 className="font-bold text-lg mb-1" style={{ color: "#0e3f47" }}>
                  {step.title}
                </h3>
                <p className="text-sm mb-4" style={{ color: "#445f65" }}>
                  {step.desc}
                </p>

                {/* WhatsApp mockup */}
                <div
                  className="rounded-2xl overflow-hidden shadow-md"
                  style={{ background: "#e5ddd5" }}
                  role="img"
                  aria-label={`Exemplo ilustrativo de conversa de WhatsApp: ${step.title}`}
                >
                  {/* WPP header */}
                  <div
                    className="flex items-center gap-3 px-4 py-3"
                    style={{ background: "#0e3f47" }}
                    aria-hidden="true"
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{ background: "#c98a1e", color: "#fff" }}
                    >
                      Ó
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "#e6f2f3" }}>
                        Ótica Visão Clara
                      </p>
                      <p className="text-xs" style={{ color: "#8fb8be" }}>
                        Atendimento via WhatsApp
                      </p>
                    </div>
                  </div>

                  {/* Bubbles */}
                  <div className="p-4 space-y-2">
                    {step.bubbles.map((b, j) => (
                      <div key={j} className={`flex ${b.type === "sent" ? "justify-end" : "justify-start"}`}>
                        <div className={`wpp-bubble ${b.type}`}>
                          {b.text.split("\n").map((line, k) => (
                            <span key={k}>
                              {line}
                              {k < b.text.split("\n").length - 1 && <br />}
                            </span>
                          ))}
                          <p className="wpp-time">{b.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
