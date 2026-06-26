export const metadata = { title: 'Política de Privacidade · Planilha Financeira' };

export default function Privacidade() {
  return (
    <main style={{ maxWidth: '720px', margin: '0 auto', padding: '4rem 1.5rem', lineHeight: 1.7 }}>
      <a href="/" style={{ color: 'var(--roxo)', fontWeight: 600 }}>← Voltar</a>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--roxo-esc)', margin: '1.5rem 0 1rem' }}>
        Política de Privacidade
      </h1>
      <p style={{ color: 'var(--cinza)', marginBottom: '2rem' }}>Última atualização: 2025</p>

      <Section title="Quem somos">
        Esta página vende a Planilha Financeira Completa + Guia de Organização, um produto digital
        comercializado pela plataforma Hotmart. Esta política explica como tratamos seus dados ao
        navegar e realizar a compra.
      </Section>

      <Section title="Quais dados coletamos">
        Ao acessar esta página, podemos coletar dados de navegação por meio de cookies e ferramentas
        de análise (como Google Analytics e o Pixel da Meta) para entender o desempenho dos nossos
        anúncios. Ao realizar a compra, seus dados de pagamento e contato são tratados diretamente
        pela Hotmart, conforme a política de privacidade da plataforma.
      </Section>

      <Section title="Como usamos os dados">
        Usamos dados de navegação de forma agregada para medir e otimizar campanhas publicitárias.
        Não vendemos nem compartilhamos seus dados pessoais com terceiros para fins de marketing
        próprio além do necessário para a veiculação e mensuração de anúncios.
      </Section>

      <Section title="Cookies">
        Utilizamos cookies para análise e remarketing. Você pode desativar os cookies nas
        configurações do seu navegador, ciente de que isso pode afetar sua experiência.
      </Section>

      <Section title="Seus direitos (LGPD)">
        Conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018), você pode solicitar acesso,
        correção ou exclusão dos seus dados. Para pedidos relativos à compra, contate o suporte da
        Hotmart. Para dúvidas sobre esta página, use o e-mail de contato informado no ato da compra.
      </Section>

      <Section title="Alterações">
        Esta política pode ser atualizada periodicamente. A versão vigente estará sempre disponível
        nesta página.
      </Section>
    </main>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: '1.8rem' }}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--roxo-esc)', marginBottom: '.5rem' }}>{title}</h2>
      <p style={{ color: 'var(--tinta)' }}>{children}</p>
    </div>
  );
}
