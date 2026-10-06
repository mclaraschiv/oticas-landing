const steps = [
  {
    num: "01",
    title: "Diagnóstico gratuito da base",
    desc: "Você nos conta como sua óptica funciona hoje: quantos clientes, qual sistema ou planilha usa, quais processos tem ou não tem. A gente mapeia onde estão os maiores buracos e apresenta o que faz sentido implantar primeiro.",
    detail: "Sem custo, sem compromisso. Dura cerca de 45 minutos.",
  },
  {
    num: "02",
    title: "Implantação com o que você já tem",
    desc: "Não exigimos troca de sistema. Trabalhamos com a planilha, o sistema de gestão ou o WhatsApp que sua óptica já usa. Configuramos as automações, testamos cada mensagem e treinamos sua equipe.",
    detail: "Média de 2 semanas para as primeiras automações no ar.",
  },
  {
    num: "03",
    title: "Acompanhamento contínuo",
    desc: "Não somimos depois da implantação. Revisamos os resultados mensalmente, ajustamos as mensagens, adicionamos novas automações conforme a óptica cresce e estamos disponíveis pelo WhatsApp para qualquer dúvida do dia a dia.",
    detail: "Você tem acesso direto, não um portal de tickets.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="como-funciona"
      className="py-20 px-6"
      style={{ background: "#0e3f47" }}
      aria-labelledby="how-title"
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-center" style={{ color: "#c98a1e" }}>
          Simples assim
        </p>
        <h2
          id="how-title"
          className="text-3xl sm:text-4xl font-bold text-center mb-4"
          style={{ color: "#e6f2f3" }}
        >
          Como funciona
        </h2>
        <p className="text-base text-center max-w-xl mx-auto mb-14" style={{ color: "#8fb8be" }}>
          Três passos. Sem burocracia. Sem precisar contratar time de TI.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-5"
                style={{ background: "#c98a1e", color: "#fff" }}
                aria-hidden="true"
              >
                {s.num}
              </div>
              <h3 className="font-bold text-xl mb-3" style={{ color: "#e6f2f3" }}>
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#8fb8be" }}>
                {s.desc}
              </p>
              <p
                className="text-xs font-semibold px-3 py-2 rounded-lg inline-block"
                style={{ background: "rgba(201,138,30,0.15)", color: "#c98a1e" }}
              >
                {s.detail}
              </p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
