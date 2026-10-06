export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="py-20 px-6"
      style={{ background: "#fff" }}
      aria-labelledby="sobre-title"
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-center" style={{ color: "#c98a1e" }}>
          Quem está por trás
        </p>
        <h2
          id="sobre-title"
          className="text-3xl sm:text-4xl font-bold text-center mb-4"
          style={{ color: "#0e3f47" }}
        >
          Pessoas que entendem o seu dia a dia
        </h2>
        <p className="text-base text-center max-w-2xl mx-auto mb-12" style={{ color: "#445f65" }}>
          Não somos uma empresa de tecnologia querendo te vender plataforma. Somos uma equipe
          pequena que se especializou em fazer o pós-venda de ópticas funcionar de verdade.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-14">
          {/* Maria Clara */}
          <div
            className="rounded-2xl p-6 border text-center"
            style={{ borderColor: "#e6f2f3" }}
          >
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4"
              style={{ background: "#0e3f47", color: "#c98a1e" }}
              aria-hidden="true"
            >
              MC
            </div>
            <h3 className="font-bold text-xl mb-1" style={{ color: "#0e3f47" }}>
              Maria Clara
            </h3>
            <p className="text-sm font-medium mb-3" style={{ color: "#c98a1e" }}>
              Fundadora · Estratégia e implantação
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#445f65" }}>
              Responsável pela estratégia de acompanhamento de clientes e pela implantação dos
              processos em cada óptica. Fala diretamente com os donos e gerentes para entender
              o que funciona na prática — não na teoria.
            </p>
          </div>

          {/* Especialista parceira */}
          <div
            className="rounded-2xl p-6 border text-center"
            style={{ borderColor: "#e6f2f3" }}
          >
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4"
              style={{ background: "#0e3f47", color: "#c98a1e" }}
              aria-hidden="true"
            >
              EP
            </div>
            <h3 className="font-bold text-xl mb-1" style={{ color: "#0e3f47" }}>
              Especialista Parceira
            </h3>
            <p className="text-sm font-medium mb-3" style={{ color: "#c98a1e" }}>
              Treinamento de equipe · Ex-gerente de rede de ópticas
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#445f65" }}>
              Mais de 10 anos no mercado óptico, incluindo gestão de equipe em rede regional.
              Treina vendedores para apresentar lentes de alto valor com segurança e para usar o
              histórico do cliente como aliado na venda.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div
          className="rounded-2xl p-6 sm:p-8 text-center"
          style={{ background: "#e6f2f3" }}
        >
          <p className="text-base font-semibold mb-2" style={{ color: "#0e3f47" }}>
            Prefere falar diretamente?
          </p>
          <p className="text-sm mb-4" style={{ color: "#445f65" }}>
            Nossa porta está sempre aberta pelo WhatsApp:
          </p>
          <a
            href="https://wa.me/5519982423130"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold text-lg transition-opacity hover:opacity-80 focus:outline-none focus:ring-4 rounded-lg focus:ring-offset-2"
            style={{ color: "#0e3f47" }}
            aria-label="Abrir conversa no WhatsApp com (19) 98242-3130"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#25d366"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            (19) 98242-3130
          </a>
        </div>
      </div>
    </section>
  );
}
