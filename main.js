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
            `<br><br>velas aromáticas`,
            `<br><br>chás fitoenergéticos`,
            `<br><br>intuição e paz`,
            `<br><br>Wax bars`,
            `<br>A wax bars é uma pastilha de cera vegetal aromatizada para perfurmar o ambiente basta quebrar um pedacinho e adicioná-lo à um rechaud de cerâmica ou aromatizador de tomada para derreter e perfurmar o ambiente.`,
        ]
      },
      
      incenso: {
        produto: `Incenso`,
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
    