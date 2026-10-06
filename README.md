# OticaSaas — Landing Page

Landing page de uma página para ópticas independentes, construída com **Next.js 16 + Tailwind CSS**, pronta para deploy na Vercel.

---

## Seções

| # | Seção |
|---|-------|
| 1 | Abertura com efeito de foco (lens blur) |
| 2 | Calculadora "Dinheiro parado na sua base" |
| 3 | Cards de dores do dia a dia |
| 4 | Jornada do cliente (linha do tempo com mockups de WhatsApp) |
| 5 | 11 ideias de automação + tabela resumo |
| 6 | Como funciona em 3 passos |
| 7 | Segurança e LGPD |
| 8 | Treinamento + download do Guia do Vendedor (PDF) |
| 9 | Sobre · Contato |
| 10 | CTA final — Diagnóstico gratuito (formulário) |

---

## Variáveis de ambiente

Copie `.env.local.example` para `.env.local` e preencha:

```env
FORM_WEBHOOK_URL=https://...   # Recebe dados do formulário de diagnóstico
GUIDE_WEBHOOK_URL=https://...  # Recebe dados do pedido de Guia PDF
```

Exemplos de destino: **Zapier Webhooks**, **Make (Integromat)**, **n8n**, ou qualquer URL que aceite POST JSON.

---

## Desenvolvimento local

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

---

## Deploy na Vercel

1. Faça push do repositório para o GitHub.
2. Importe o projeto em [vercel.com/new](https://vercel.com/new).
3. Em **Environment Variables**, adicione `FORM_WEBHOOK_URL` e `GUIDE_WEBHOOK_URL`.
4. Clique em **Deploy**.

> A Vercel detecta automaticamente que é um projeto Next.js — nenhuma configuração extra necessária.

---

## Identidade visual

| Token | Valor |
|-------|-------|
| Verde-petróleo (base) | `#0e3f47` |
| Dourado (acento) | `#c98a1e` |
| Tom claro | `#e6f2f3` |
| Fonte títulos | Lora (serif) |
| Fonte texto | Inter (sans humanista) |

---

## Acessibilidade

- Mobile first
- Respeita `prefers-reduced-motion` (efeito de foco desabilitado)
- Landmarks semânticos (`main`, `nav`, `footer`, `section`)
- Labels em todos os campos de formulário
- Skip-to-content link
- `aria-live` nos resultados dinâmicos da calculadora e formulários
