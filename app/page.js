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
              Você ganha bem, mas o dinheiro <em>some</em> todo mês?
            </h1>
            <p className="sub">
              O problema quase nunca é quanto você ganha — é não enxergar para
              onde o dinheiro vai. Esta planilha mostra tudo em uma tela só.
            </p>
            <div className="hero-cta-row">
              <a className="cta" href={CHECKOUT}>Quero organizar minhas finanças</a>
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

      {/* ===================== DORES ===================== */}
      <section className="pains">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Soa familiar?</p>
            <h2>Não é falta de dinheiro. <em>É falta de clareza.</em></h2>
          </div>
          <div className="pain-grid">
            <div className="pain">
              <p className="q">"Para onde foi meu salário?"</p>
              <p>O mês acaba e você não sabe explicar onde o dinheiro foi parar. Some em pequenos gastos que ninguém anota.</p>
            </div>
            <div className="pain">
              <p className="q">"Tenho medo de olhar o saldo."</p>
              <p>A fatura chega e dá um aperto. Sem enxergar o todo, organizar parece impossível — e o vermelho vira rotina.</p>
            </div>
            <div className="pain">
              <p className="q">"Já tentei, mas é complicado."</p>
              <p>Aplicativos cheios de função, planilhas que travam, nada que você consiga manter por mais de uma semana.</p>
            </div>
          </div>
          <p className="pain-turn">
            Quem enxerga as próprias contas com nitidez para de adivinhar — e começa a sobrar.
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
                <li>O método dos 4 passos para sair do vermelho</li>
                <li>A regra 50/30/20 explicada de forma simples</li>
                <li>Os 5 erros que sabotam suas finanças</li>
                <li>Um plano de 7 dias para começar hoje mesmo</li>
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
                <p>Receitas, despesas, saldo e a distribuição dos seus gastos em gráfico. Bateu o olho, entendeu sua situação.</p>
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
                <p>Reserva, viagem, troca de carro. A barra muda de cor conforme você se aproxima — motivação que se vê.</p>
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
              <h2>Eles pararam de adivinhar — e começaram a sobrar</h2>
            </div>
            <div className="testi-grid">
              <div className="testi-card">
                <p className="testi-text">"Finalmente entendi para onde ia meu salário. Na primeira semana já cortei R$400 de gastos que eu nem sabia que tinha."</p>
                <div className="testi-author">
                  <div className="testi-avatar">AM</div>
                  <div>
                    <strong>Ana M.</strong>
                    <span>Analista, São Paulo</span>
                  </div>
                </div>
              </div>
              <div className="testi-card">
                <p className="testi-text">"Tentei várias planilhas gratuitas antes. Essa é diferente — o dashboard se atualiza sozinho e eu consigo ver tudo em 30 segundos."</p>
                <div className="testi-author">
                  <div className="testi-avatar">RC</div>
                  <div>
                    <strong>Rafael C.</strong>
                    <span>Autônomo, Belo Horizonte</span>
                  </div>
                </div>
              </div>
              <div className="testi-card">
                <p className="testi-text">"Comecei a acompanhar minhas metas pelo celular. Em 2 meses já tinha juntado a entrada do carro que eu achava impossível."</p>
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
          <h2>Comece a enxergar seu dinheiro ainda hoje</h2>
          <div className="price-block">
            <div className="price-now">R$ 29,90</div>
            <div className="price-note">pagamento único · ou 4x de R$ 8,14 · planilha + guia bônus</div>
          </div>
          <a className="cta" href={CHECKOUT}>Quero minha planilha agora</a>
          <div className="guarantee">
            <span>🛡️</span> Garantia incondicional de 7 dias
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <span>© {new Date().getFullYear()} Planilha Financeira Completa</span>
          <span>
            <a href="/privacidade">Política de Privacidade</a> ·{' '}
            <a href="/termos">Termos de Uso</a>
          </span>
        </div>
      </footer>
    </main>
  );
}
