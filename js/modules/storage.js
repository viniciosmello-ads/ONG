export function salvarColaboradores(colaboradores) {
  localStorage.setItem('ong_colaboradores', JSON.stringify(colaboradores));
}

export function obterColaboradores() {
  const dados = localStorage.getItem('ong_colaboradores');
  return dados ? JSON.parse(dados) : [];
}