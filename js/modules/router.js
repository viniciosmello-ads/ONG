export function inicializarRoteador(callbackRender) {
  window.addEventListener('hashchange', () => {
    callbackRender(window.location.hash);
  });

  document.addEventListener('click', (e) => {
    const link = e.target.closest('.nav-menu a');
    if (link) {
      e.preventDefault();
      const href = link.getAttribute('href');
      let hash = '#inicio';
      if (href.includes('projetos')) hash = '#projetos';
      if (href.includes('cadastro')) hash = '#cadastro';
      window.location.hash = hash;
    }
  });
}