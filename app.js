// Limpa o conteúdo da seção antes de adicionar os novos resultados
section.innerHTML = "";

function pesquisar() {
  // Obtém a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;
  console.log(campoPesquisa)

  // Se campoPesquisa for uma string sem nada
  // eu não quero mostrar nada
  if (!campoPesquisa) {
    section.innerHTML = "Não foi encontrado";
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string para armazenar os resultados HTML
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada dado na lista de dados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();

    // Se no dado titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Cria um novo elemento
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="${dado.link}" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Mais informações</a>
      </div>
    `;
    }
    // então, faça...
    dado.titulo.includes(campoPesquisa)
    // Cria uma nova div para cada dado, formatando-a como um resultado de pesquisa

  }
  
  if (!resultados) {
    section.innerHTML = "<p>Não foram encontrados resultados</p>";
    return
  }

  // Atribui a string com os resultados ao conteúdo da seção
  section.innerHTML = resultados;
}