document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const produto = urlParams.get("produto");
  
    const produtos = {
      canela: {
        produto: `Canela`,
        titulo: `A magia da Canela no dia a dia<br><br>`,
        beneficios: [
          `<strong>Atrai</strong>`,
          `Sucesso Financeiro`,
          `Paixão nos Relacionamentos`,
          `Sucesso em Empreendimentos`,
          `Prosperidade`,
          `Boas Energias<br><br>`,
          `<strong>Afasta</strong>`,
          `Falta de Dinheiro`,
          `Dificuldade nos Negócios`,
          `Olhado-Mau`,
          `Falta de Oportunidades`,
          `Estagnação<br><br>`
        ],
        titulo_sessão_produto: `PRODUTOS`,
        texto_descritivo: [
            `<br><br>FORTUNA e PODER: canela`,
            `<br><br>Incenso da bruxa: cravo e canela de maça na massala para deixar o aroma naturalmente adocicado proteção e materialização de sonhos`,
            `<br><br>Wax Bars`,
            `<br>A wax bars é uma pastilha de cera vegetal aromatizada para perfurmar o ambiente basta quebrar um pedacinho e adicioná-lo à um rechaud de cerâmica ou aromatizador de tomada para derreter e perfurmar o ambiente.`,
            `<br><br>Momento Aconchego: traz um clima intimista de amor e sedução notas quentes e picantes com canela`,
            `<br><br>Banho e Escalda Pés`,
            `<br><br>Chá Amor: maçã, hibisco, cha branco, estévia, e canela`,
            `<br><br>Spray Energético: Amor (sabor: fresco, canela e jasmim)`,
            `<br><br>Chá Bruxa: maçã, limão, estévia.<br>canela e cravo-da-india`,
        ]
      },


      lavanda: {
        produto: `Lavanda`,
        titulo: `A magia da Lavanda no dia a dia<br><br>`,
        beneficios: [
          `<strong>Benefícios</strong>`,
          `Relaxamento: O aroma suave da lavanda ajuda a acalmar a mente e reduzir o estresse. perfeito para aqueles momentos de autocuidado!<br>`,
          `Sono tranquilo: coloque um sachê de lavanda no travesseiro e tenha noites de sono mais profundas e reparadoras.<br>`,
          `Equilíbrio emocional: a lavanda é conhecida por suas propriedades que promovem a paz interior e a clareza mental.<br>`,
          
        ],
        titulo_sessão_produto: `PRODUTOS`,
        texto_descritivo: [
            `<br><br>velas aromáticas: momento relax`,
            `<br><br>chás fitoenergéticos`,
            `<br><br>intuição e paz: lavanda`,
            `<br><br>Wax bars`,
            `<br>A wax bars é uma pastilha de cera vegetal aromatizada para perfurmar o ambiente basta quebrar um pedacinho e adicioná-lo à um rechaud de cerâmica ou aromatizador de tomada para derreter e perfurmar o ambiente.`,
        ]
      },
      
      incenso: {
        produto: `Incenso`,
        titulo: ``,
        beneficios: [
          `<strong>Qual Escolher?</strong><br>`,
          `Alecrim: Para melhorar o estudo ou trabalho<br>`,
          `Sálvia: Quando finalizar ciclos<br>`,
          `Lavanda: Quando receber pessoas em casa<br>`,
          `Arruda: Limpeza do lar (para pessoas mais sensíveis aos aromas), ou quando sentir sua energia drenada<br>`,
          `Jasmin: Pela manhã<br>`,
          `Canela: Quando iniciar algo<br>`,
          `Palo Santo: Limpeza energética da casa e da família<br>`,
        ],
        titulo_sessão_produto: `PRODUTOS`,
        texto_descritivo: [
            `<br><br>Purificação e Proteção: Sálvia e Olíbano`,
            `<br><br>Intuição e Paz: Lavanda`,
            `<br><br>Fortuna e Poder: Canela`,
            `<br><br>Limpeza Energética: Palo Santo`,
            `<br><br>Equilíbrio e Ação: Louro e Eucalipto<br>`,
            `<br><br><strong style="font-size: 2rem;">Unidade: R$ 24,98</strong><br><br>`,
            `<div style="border: 1px solid";><div>`,
            `<br><br><strong style="font-size: 2rem;">Incensários</strong><br><br>`,
            `<br><br><strong>Estatuetas</strong>`,
            `<br><br>Gnomo e Gnomida (medida: 11 x 5 cm): Feitos de resina imitando cerâmica este casal fofo de gnomos serve para decorar e também como incensário.`,
            `<br><br> Cogumelo (medida: 5,5 x 5,5 cm): Cogumelos disponíveis em duas cores (vermelho e marrom) e pintadis à mão perfeitos para decorar e usar como incensário.`,
            `<br><br><strong>Prato de vidro</strong>`,
            `<br><br>Decoração pratos (medida: 9 cm):<br><br>borboleta vintage,<br>cogumelo vintage,<br>cogumelo preto,<br>Floral preto,<br>Bruxa e gato,<br>Bruxa estrelada,<br>Mago,<br>Gnomo da alegria,<br>Gnomo da floresta,<br>Gnomo Zen,<br>fada,<br>arvore,<br>gaia,<br>jesus,<br>arcanjo miguel.`,
            `<br><br><strong style="font-size: 2rem;">Unidade: R$ 39,98</strong><br><br>`,
            `<div style="border: 1px solid";><div>`,
            `<div style="border: 1px solid";>Imagens não disponíveis:<br>Acessar para visualizar: <a href="https://www.instagram.com/magias_herbais/" style="text-decoration: none; text-transform: none;">@magias_herbais</a><div>`,

        ]
      },
      
      papelaria: {
        produto: `Papelaria`,
        titulo: `A magia da Canela no dia a dia<br><br>`,
        beneficios: [
          `<strong>Atrai</strong>`,
          `Sucesso Financeiro`,
          `Paixão nos Relacionamentos`,
          `Sucesso em Empreendimentos`,
          `Prosperidade`,
          `Boas Energias<br><br>`,
          `<strong>Afasta</strong>`,
          `Falta de Dinheiro`,
          `Dificuldade nos Negócios`,
          `Olhado-Mau`,
          `Falta de Oportunidades`,
          `Estagnação<br><br>`
        ],
        titulo_sessão_produto: `PRODUTOS`,
        texto_descritivo: [
            `<br><br>FORTUNA e PODER`,
            `<br><br>Incenso da bruxa`,
            `<br><br>Wax Bars`,
            `<br><br>Momento Aconchego`,
            `<br><br>Banho e Escalda Pés`,
            `<br><br>Chá Amor`,
            `<br><br>Spray Energético`,
            `<br><br>Chá Bruxa`,
        ]
      },

      manjericao: {
        produto: `Manjericao`,
        titulo: `A magia da Canela no dia a dia<br><br>`,
        beneficios: [
          `<strong>Atrai</strong>`,
          `Sucesso Financeiro`,
          `Paixão nos Relacionamentos`,
          `Sucesso em Empreendimentos`,
          `Prosperidade`,
          `Boas Energias<br><br>`,
          `<strong>Afasta</strong>`,
          `Falta de Dinheiro`,
          `Dificuldade nos Negócios`,
          `Olhado-Mau`,
          `Falta de Oportunidades`,
          `Estagnação<br><br>`
        ],
        titulo_sessão_produto: `PRODUTOS`,
        texto_descritivo: [
            `<br><br>FORTUNA e PODER`,
            `<br><br>Incenso da bruxa`,
            `<br><br>Wax Bars`,
            `<br><br>Momento Aconchego`,
            `<br><br>Banho e Escalda Pés`,
            `<br><br>Chá Amor`,
            `<br><br>Spray Energético`,
            `<br><br>Chá Bruxa`,
        ]
      },

      vela: {
        produto: `Vela`,
        titulo: `A magia da Canela no dia a dia<br><br>`,
        beneficios: [
          `<strong>Atrai</strong>`,
          `Sucesso Financeiro`,
          `Paixão nos Relacionamentos`,
          `Sucesso em Empreendimentos`,
          `Prosperidade`,
          `Boas Energias<br><br>`,
          `<strong>Afasta</strong>`,
          `Falta de Dinheiro`,
          `Dificuldade nos Negócios`,
          `Olhado-Mau`,
          `Falta de Oportunidades`,
          `Estagnação<br><br>`
        ],
        titulo_sessão_produto: `PRODUTOS`,
        texto_descritivo: [
            `<br><br>FORTUNA e PODER`,
            `<br><br>Incenso da bruxa`,
            `<br><br>Wax Bars`,
            `<br><br>Momento Aconchego`,
            `<br><br>Banho e Escalda Pés`,
            `<br><br>Chá Amor`,
            `<br><br>Spray Energético`,
            `<br><br>Chá Bruxa`,
        ]
      },

      eucaplito: {
        produto: `Eucaplito`,
        titulo: `A magia da Canela no dia a dia<br><br>`,
        beneficios: [
          `<strong>Atrai</strong>`,
          `Sucesso Financeiro`,
          `Paixão nos Relacionamentos`,
          `Sucesso em Empreendimentos`,
          `Prosperidade`,
          `Boas Energias<br><br>`,
          `<strong>Afasta</strong>`,
          `Falta de Dinheiro`,
          `Dificuldade nos Negócios`,
          `Olhado-Mau`,
          `Falta de Oportunidades`,
          `Estagnação<br><br>`
        ],
        titulo_sessão_produto: `PRODUTOS`,
        texto_descritivo: [
            `<br><br>FORTUNA e PODER`,
            `<br><br>Incenso da bruxa`,
            `<br><br>Wax Bars`,
            `<br><br>Momento Aconchego`,
            `<br><br>Banho e Escalda Pés`,
            `<br><br>Chá Amor`,
            `<br><br>Spray Energético`,
            `<br><br>Chá Bruxa`,
        ]
      },

      palo: {
        produto: `Palo`,
        titulo: `A magia da Canela no dia a dia<br><br>`,
        beneficios: [
          `<strong>Atrai</strong>`,
          `Sucesso Financeiro`,
          `Paixão nos Relacionamentos`,
          `Sucesso em Empreendimentos`,
          `Prosperidade`,
          `Boas Energias<br><br>`,
          `<strong>Afasta</strong>`,
          `Falta de Dinheiro`,
          `Dificuldade nos Negócios`,
          `Olhado-Mau`,
          `Falta de Oportunidades`,
          `Estagnação<br><br>`
        ],
        titulo_sessão_produto: `PRODUTOS`,
        texto_descritivo: [
            `<br><br>FORTUNA e PODER`,
            `<br><br>Incenso da bruxa`,
            `<br><br>Wax Bars`,
            `<br><br>Momento Aconchego`,
            `<br><br>Banho e Escalda Pés`,
            `<br><br>Chá Amor`,
            `<br><br>Spray Energético`,
            `<br><br>Chá Bruxa`,
        ]
      },
      
      anis: {
        produto: `Anis`,
        titulo: `A magia da Canela no dia a dia<br><br>`,
        beneficios: [
          `<strong>Atrai</strong>`,
          `Sucesso Financeiro`,
          `Paixão nos Relacionamentos`,
          `Sucesso em Empreendimentos`,
          `Prosperidade`,
          `Boas Energias<br><br>`,
          `<strong>Afasta</strong>`,
          `Falta de Dinheiro`,
          `Dificuldade nos Negócios`,
          `Olhado-Mau`,
          `Falta de Oportunidades`,
          `Estagnação<br><br>`
        ],
        titulo_sessão_produto: `PRODUTOS`,
        texto_descritivo: [
            `<br><br>FORTUNA e PODER`,
            `<br><br>Incenso da bruxa`,
            `<br><br>Wax Bars`,
            `<br><br>Momento Aconchego`,
            `<br><br>Banho e Escalda Pés`,
            `<br><br>Chá Amor`,
            `<br><br>Spray Energético`,
            `<br><br>Chá Bruxa`,
        ]
      },
    };
  
    const container = document.getElementById("conteudo-produto");
  
    if (produto && produtos[produto]) {
  const dados = produtos[produto];
  container.innerHTML = `
    <h1 class="titulo">${dados.produto}</h1>
    <section class="sobre">  
      <h1 class="sobre__titulo">${dados.titulo}</h1>
      ${dados.beneficios.map(texto => `<p class="sobre__texto">${texto}</p>`).join("")}
      <div class="imagens-container">
        <h1 class="titulo_sessão_produto">${dados.titulo_sessão_produto}</h1>
        ${dados.texto_descritivo && dados.texto_descritivo.length
          ? dados.texto_descritivo.map(texto => `
              <div class="imagem-com-texto">
                <div class="texto-sobre-imagem">${texto}</div>
              </div>
            `).join("")
          : ""}
      </div>
    </section>
  `;

      } else {
      container.innerHTML = "<p>Produto não encontrado.</p>";
    }
  });
    