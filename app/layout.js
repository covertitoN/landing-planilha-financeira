import './globals.css';

export const metadata = {
  title: 'Planilha Financeira Completa + Guia de Organização',
  description:
    'Saiba exatamente para onde vai seu dinheiro. Planilha com dashboard automático, controle de cartões, metas e gráficos — mais o Guia Prático de Organização Financeira. Por R$ 29,90.',
  openGraph: {
    title: 'Planilha Financeira Completa + Guia de Organização',
    description:
      'Organize suas finanças sem saber Excel. Dashboard automático, controle de gastos, metas e guia bônus. R$ 29,90.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/*
          ===== PIXEL DO META (Facebook) =====
          Cole aqui o seu Pixel quando for rodar a campanha. Substitua SEU_PIXEL_ID.

          <script dangerouslySetInnerHTML={{ __html: `
            !function(f,b,e,v,n,t,s){...código do pixel...}
            fbq('init', 'SEU_PIXEL_ID');
            fbq('track', 'PageView');
          `}} />

          ===== TAG DO GOOGLE (gtag / GA4 / Google Ads) =====
          <script async src="https://www.googletagmanager.com/gtag/js?id=SEU_ID"></script>
        */}
      </head>
      <body>{children}</body>
    </html>
  );
}
