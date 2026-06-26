# Landing Page — Planilha Financeira Completa

Landing page de vendas em Next.js para a Planilha Financeira + Guia (Hotmart).

## Rodar localmente
```bash
npm install
npm run dev
```
Abre em http://localhost:3000

## Deploy na Vercel
1. Suba esta pasta para um repositório no GitHub.
2. Em vercel.com, clique em "Add New > Project" e importe o repositório.
3. A Vercel detecta Next.js automaticamente. Clique em Deploy.
4. Pronto — você recebe uma URL pública (ex: planilha-financeira.vercel.app).

## Antes de rodar a campanha
- **Pixel do Meta:** cole o código do seu Pixel em `app/layout.js` (há um comentário marcando o lugar). Necessário para otimizar por conversão e fazer retargeting.
- **Tag do Google (GA4 / Google Ads):** cole no mesmo local.
- **Checkout:** o botão já aponta para o seu link da Hotmart (go.hotmart.com/J106487606W). Para trocar, edite a constante CHECKOUT em `app/page.js`.
- **Domínio próprio (opcional):** em Vercel > Settings > Domains, você pode conectar um domínio .com.br para passar mais confiança e melhorar a aprovação no Google Ads.

## Estrutura
- `app/page.js` — a landing
- `app/privacidade/` e `app/termos/` — páginas legais (exigidas pelo Google Ads)
- `public/img/` — mockups da planilha (prova visual) e capa
