export const metadata = { title: 'Termos de Uso · Planilha Financeira' };

export default function Termos() {
  return (
    <main style={{ maxWidth: '720px', margin: '0 auto', padding: '4rem 1.5rem', lineHeight: 1.7 }}>
      <a href="/" style={{ color: 'var(--roxo)', fontWeight: 600 }}>← Voltar</a>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--roxo-esc)', margin: '1.5rem 0 1rem' }}>
        Termos de Uso
      </h1>
      <p style={{ color: 'var(--cinza)', marginBottom: '2rem' }}>Última atualização: 2025</p>

      <Section title="O produto">
        A Planilha Financeira Completa + Guia de Organização é um produto digital de uso pessoal,
        composto por uma planilha eletrônica e um guia em PDF. O acesso é entregue por e-mail após a
        confirmação da compra pela Hotmart.
      </Section>

      <Section title="Licença de uso">
        A compra concede uma licença de uso pessoal e intransferível. Não é permitido revender,
        redistribuir ou compartilhar os arquivos sem autorização.
      </Section>

      <Section title="Garantia e reembolso">
        Você tem direito a 7 dias de garantia a partir da compra, conforme o Código de Defesa do
        Consumidor. Para solicitar reembolso dentro desse prazo, utilize a plataforma Hotmart.
      </Section>

      <Section title="Natureza do conteúdo">
        O guia e a planilha têm caráter educativo e organizacional. Não constituem aconselhamento
        financeiro ou de investimentos personalizado. As decisões financeiras são de
        responsabilidade do usuário.
      </Section>

      <Section title="Pagamento">
        Os pagamentos são processados pela Hotmart, que é responsável pela segurança da transação e
        pela emissão dos comprovantes.
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
