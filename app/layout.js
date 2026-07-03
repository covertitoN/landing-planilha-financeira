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
        */}

          <script dangerouslySetInnerHTML={{ __html: `
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
            document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1347955279918032');
            fbq('track', 'PageView');
          `}} />
          <noscript dangerouslySetInnerHTML={{ __html: `
            <img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=1347955279918032&ev=PageView&noscript=1" />
          `}} />
      </head>
      <body>{children}</body>
    </html>
  );
}
