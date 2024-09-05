function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array)
    for (let dado of dados) {
      // Constrói o HTML para cada item do resultado da pesquisa,
      // utilizando template literals para facilitar a concatenação
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descrição}</p>
          <a href="${dado.receita}" target="_blank">Clique e confira</a>
        </div>`;
    }
  
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  }


