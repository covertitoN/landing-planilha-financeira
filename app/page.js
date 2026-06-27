'use client';

const CHECKOUT = 'https://go.hotmart.com/J106487606W';

export default function Home() {
  return (
    <main>
      {/* ===================== HERO ===================== */}
      <header className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Planilha + Guia bônus · acesso imediato</span>
            <h1>
              Suas finanças do mês inteiro <em>em uma tela só</em>
            </h1>
            <p className="sub">
              Esta planilha reúne receitas, despesas, saldo e metas num
              dashboard que se atualiza sozinho. Você preenche os lançamentos —
              o resto ela calcula.
            </p>
            <div className="hero-cta-row">
              <a className="cta" href={CHECKOUT}>Quero a planilha</a>
              <div className="price-pill">
                <span className="big">R$ 29,90</span>
                <span className="small">ou 4x de R$ 8,14</span>
              </div>
            </div>
            <div className="trust-row">
              <span><i className="dot" /> Sem saber Excel</span>
              <span><i className="dot" /> Acesso imediato</span>
              <span><i className="dot" /> Garantia de 7 dias</span>
            </div>
          </div>
          <div className="hero-mock">
            <img src="/img/print_dashboard.png" alt="Painel da planilha mostrando receitas, despesas, saldo e gráfico de gastos" />
          </div>
        </div>
      </header>

      {/* ===================== O QUE FAZ ===================== */}
      <section className="pains">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Como funciona</p>
            <h2>Uma planilha que mostra tudo <em>com clareza</em></h2>
          </div>
          <div className="pain-grid">
            <div className="pain">
              <p className="q">Tudo em um lugar</p>
              <p>Receitas, despesas e saldo reunidos numa tela. Você vê a distribuição dos gastos por categoria em gráfico, sem montar nada.</p>
            </div>
            <div className="pain">
              <p className="q">Atualiza sozinha</p>
              <p>Os cálculos e gráficos se ajustam a cada lançamento. Não há fórmula para digitar nem aba para configurar.</p>
            </div>
            <div className="pain">
              <p className="q">Simples de manter</p>
              <p>Listas prontas para tipo, categoria e forma de pagamento. Você escolhe nas opções — o registro leva segundos.</p>
            </div>
          </div>
          <p className="pain-turn">
            Feita para quem quer acompanhar as próprias contas sem depender de Excel avançado.
          </p>
        </div>
      </section>

      {/* ===================== O QUE RECEBE ===================== */}
      <section className="includes">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">O que você leva</p>
            <h2>Uma planilha que trabalha por você <em>— e um guia para começar certo</em></h2>
            <p className="lead">Você preenche os lançamentos. O resto se atualiza sozinho.</p>
          </div>
          <div className="inc-grid">
            <div className="inc-card">
              <span className="tag tag--main">Produto principal</span>
              <h3>Planilha Financeira Completa</h3>
              <ul className="inc-list">
                <li>Dashboard com receitas, despesas, saldo e taxa de economia</li>
                <li>Gráficos de gastos por categoria que se atualizam sozinhos</li>
                <li>Controle de até 4 cartões com limite e fatura</li>
                <li>Acompanhamento de metas com barra de progresso</li>
                <li>Resumo mês a mês com evolução do saldo</li>
                <li>Listas prontas — sem fórmula para digitar</li>
              </ul>
            </div>
            <div className="inc-card">
              <span className="tag tag--bonus">Bônus grátis</span>
              <h3>Guia Prático de Organização Financeira</h3>
              <ul className="inc-list">
                <li>Um método em 4 passos para organizar seus lançamentos</li>
                <li>A regra 50/30/20 explicada de forma simples</li>
                <li>Boas práticas para manter o controle em dia</li>
                <li>Um plano de 7 dias para começar a usar a planilha</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PROVA VISUAL ===================== */}
      <section className="proof">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker" style={{ color: '#F4D58D' }}>Veja por dentro</p>
            <h2>Não é promessa. É o que você vai usar.</h2>
            <p className="lead">As mesmas telas que você terá assim que abrir o arquivo.</p>
          </div>
          <div className="shots">
            <div className="shot">
              <div className="shot-img"><img src="/img/print_dashboard.png" alt="Dashboard da planilha" /></div>
              <div className="shot-txt">
                <h3>Tudo numa tela só</h3>
                <p>Receitas, despesas, saldo e a distribuição dos seus gastos em gráfico. Bateu o olho, entendeu o panorama.</p>
              </div>
            </div>
            <div className="shot">
              <div className="shot-img"><img src="/img/print_lancamentos.png" alt="Aba de lançamentos" /></div>
              <div className="shot-txt">
                <h3>Registrar leva segundos</h3>
                <p>Tipo, categoria e forma de pagamento já vêm em lista. Você escolhe, e a planilha calcula o resto.</p>
              </div>
            </div>
            <div className="shot">
              <div className="shot-img"><img src="/img/print_metas.png" alt="Aba de metas" /></div>
              <div className="shot-txt">
                <h3>Seus objetivos à vista</h3>
                <p>Reserva, viagem, troca de carro. A barra de progresso muda de cor conforme você avança.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== OBJEÇÕES ===================== */}
      <section className="faq">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Antes de você perguntar</p>
            <h2>Sem letras miúdas</h2>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Preciso saber usar Excel?</h4>
              <p>Não. Você digita o valor e escolhe opções em listas prontas. Os cálculos e gráficos são automáticos.</p>
            </div>
            <div className="faq-item">
              <h4>Funciona no celular?</h4>
              <p>Sim. Abre no Excel ou no Google Sheets (gratuito), no computador ou no celular.</p>
            </div>
            <div className="faq-item">
              <h4>Como recebo?</h4>
              <p>Na hora. Após a compra, o acesso aos arquivos chega no seu e-mail automaticamente.</p>
            </div>
            <div className="faq-item">
              <h4>E se eu não gostar?</h4>
              <p>Você tem 7 dias de garantia. Se não for para você, é só pedir reembolso — sem perguntas.</p>
            </div>
          </div>
        </div>
      </section>
        {/* ==================== DEPOIMENTOS ==================== */}
        <section className="testimonials">
          <div className="wrap">
            <div className="section-head">
              <p className="kicker">Quem já usa</p>
              <h2>O que dizem sobre a planilha</h2>
            </div>
            <div className="testi-grid">
              <div className="testi-card">
                <p className="testi-text">"É simples de preencher. Escolho nas listas e o dashboard se monta sozinho — não precisei mexer em nenhuma fórmula."</p>
                <div className="testi-author">
                  <div className="testi-avatar">AM</div>
                  <div>
                    <strong>Ana M.</strong>
                    <span>Analista, São Paulo</span>
                  </div>
                </div>
              </div>
              <div className="testi-card">
                <p className="testi-text">"Tentei várias planilhas gratuitas antes. Essa é diferente — o dashboard se atualiza sozinho e eu vejo tudo em poucos segundos."</p>
                <div className="testi-author">
                  <div className="testi-avatar">RC</div>
                  <div>
                    <strong>Rafael C.</strong>
                    <span>Autônomo, Belo Horizonte</span>
                  </div>
                </div>
              </div>
              <div className="testi-card">
                <p className="testi-text">"Gosto de acompanhar as metas pelo celular. A barra de progresso deixa visual e fácil de entender no dia a dia."</p>
                <div className="testi-author">
                  <div className="testi-avatar">JP</div>
                  <div>
                    <strong>Juliana P.</strong>
                    <span>Professora, Curitiba</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      {/* ===================== CTA FINAL ===================== */}
      <section className="final">
        <div className="wrap">
          <h2>Comece a usar a planilha ainda hoje</h2>
          <div className="price-block">
            <div className="price-now">R$ 29,90</div>
            <div className="price-note">pagamento único · ou 4x de R$ 8,14 · planilha + guia bônus</div>
          </div>
          <a className="cta" href={CHECKOUT}>Quero minha planilha agora</a>
          <div className="guarantee">
            <span>🛡️</span> Garantia incondicional de 7 dias
          </div>
          <p className="checkout-note">
            Pagamento processado com segurança pela Hotmart. Você será
            redirecionado para o checkout oficial (go.hotmart.com).
          </p>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <span>© {new Date().getFullYear()} Planilha Financeira Completa · Sylvio Marques</span>
          <span>
            Contato: <a href="mailto:sylviosm2007@gmail.com">sylviosm2007@gmail.com</a>
          </span>
          <span>
            Pagamento processado pela Hotmart ·{' '}
            <a href="/privacidade">Política de Privacidade</a> ·{' '}
            <a href="/termos">Termos de Uso</a>
          </span>
        </div>
      </footer>
    </main>
  );
}
