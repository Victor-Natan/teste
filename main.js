document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const produto = urlParams.get("produto");
  
    const produtos = {
      manjericao: {
        produto: `Manjericão`,
        titulo: `Benefícios do Manjericão`,
        beneficios: [
            `1. Antioxidantes: Protege as células e promove uma pele saudável.`,
            `2. Apoio imunológico: Fortalece o sistema imunológico e ajuda a manter as doenças à distância.`,
            `3. Digestão leve: Alivia o sistema digestivo, tornando as refeições mais agradáveis.`,
            `4. Redução de estresse: O aroma relaxante ajuda a diminuir a ansiedade.`,
            `5. Versatilidade na cozinha: Use em saladas, molhos ou smoothies para dar um toque especial.`
        ],
        imagem: "img/manjericao_img.jpg"
      },
      lavanda: {
        produto: `Lavanda`,
        titulo: `A magia da Lavanda`,
        beneficios: [
          `🌸 Acalma e alivia o estresse.`,
          `😴 Ajuda no sono.`,
          `🔥 Propriedades anti-inflamatórias.`,
          `🌿 Aroma relaxante.`,
        ],
        imagem: "img/lavanda_img.jpg"
      },
      
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
        imagem: [
            `img/Captura de tela 2025-04-18 060658.png`, 
            `img/Captura de tela 2025-04-18 062248.png`,
            `img/Captura de tela 2025-04-18 063114.png`,
            `img/Captura de tela 2025-04-18 063325.jpg`,
            `img/Captura de tela 2025-04-18 172545.png`,
            `img/Captura de tela 2025-04-18 172729.png`,
            `img/Captura de tela 2025-04-18 172848.jpg`,
            `img/Captura de tela 2025-04-18 173027.png`,
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
      }
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
              ${dados.imagem.map((imagem, index) => `
                <div class="imagem-com-texto">
                  ${dados.texto_descritivo && dados.texto_descritivo[index] ? 
                    `<div class="texto-sobre-imagem">${dados.texto_descritivo[index]}</div>` : ''}
                  <img src="${imagem}" alt="${dados.produto}" class="produto__imagem">
                </div>
              `).join("")}
            </div>
          </section>
        `;
      } else {
      container.innerHTML = "<p>Produto não encontrado.</p>";
    }
  });
    