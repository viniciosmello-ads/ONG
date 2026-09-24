export function criarCardProjetoTemplate(projeto) {
  return `
    <article class="${projeto.colunas}">
      <span class="badge">${projeto.categoria}</span>
      <h3>${projeto.titulo}</h3>
      <p>${projeto.descricao}</p>
    </article>`;
}

export function criarCardColaboradorTemplate(colaborador) {
  return `
    <article class="col-12 col-md-6">
      <span class="badge">${colaborador.area}</span>
      <h3>${colaborador.nome}</h3>
      <p><strong>E-mail:</strong> ${colaborador.email}</p>
      <p><strong>Cidade/UF:</strong> ${colaborador.cidade}/${colaborador.estado}</p>
    </article>`;
}