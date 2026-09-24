/* ==========================================================================
   VALIDAÇÃO, MÁSCARAS E MANIPULAÇÃO DE FORMULÁRIO
   ========================================================================== */

// Aplica máscaras preservando o cursor e tratando o evento 'paste'
function aplicarMascara(input, mascaraRegexFn) {
  if (!input) return;

  input.addEventListener('input', () => {
    const valorOriginal = input.value;
    const posicaoCursor = input.selectionStart;
    const apenasDigitosAntes = valorOriginal.slice(0, posicaoCursor).replace(/\D/g, '').length;
    
    const valorFormatado = mascaraRegexFn(valorOriginal);
    input.value = valorFormatado;

    let novaPosicao = 0;
    let digitosContados = 0;
    for (let i = 0; i < valorFormatado.length; i++) {
      if (/\d/.test(valorFormatado[i])) digitosContados++;
      novaPosicao = i + 1;
      if (digitosContados === apenasDigitosAntes) break;
    }
    input.setSelectionRange(novaPosicao, novaPosicao);
  });

  input.addEventListener('paste', (e) => {
    e.preventDefault();
    const textoColado = (e.clipboardData || window.clipboardData).getData('text');
    input.value = textoColado.replace(/\D/g, '');
    input.dispatchEvent(new Event('input'));
  });
}

// Formatadores
const mascaraCPF = (v) => v.replace(/\D/g, '').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})$/, '$1-$2').slice(0, 14);
const mascaraCEP = (v) => v.replace(/\D/g, '').replace(/^(\d{5})(\d)/, '$1-$2').slice(0, 9);
const mascaraTelefone = (v) => v.replace(/\D/g, '').replace(/^(\d{2})(\d)/g, '($1) $2').replace(/(\d{5})(\d)/, '$1-$2').slice(0, 15);

// Delegação de Eventos para funcionamento dinâmico via SPA
document.addEventListener('input', (e) => {
  if (e.target.id === 'cpf') aplicarMascara(e.target, mascaraCPF);
  if (e.target.id === 'cep') aplicarMascara(e.target, mascaraCEP);
  if (e.target.id === 'telefone') aplicarMascara(e.target, mascaraTelefone);
});

// Manipulador do Submit e Trava de Multi-Submit (compatível com ID #formCadastro e #form-cadastro)
document.addEventListener('submit', (e) => {
  const form = e.target;
  if (form.id === 'formCadastro' || form.id === 'form-cadastro') {
    const btnSubmit = form.querySelector('button[type="submit"]');
    if (btnSubmit) {
      btnSubmit.disabled = true;
      setTimeout(() => { btnSubmit.disabled = false; }, 2000); // Reabilita após processamento
    }
  }
});