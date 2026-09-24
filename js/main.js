/* ==========================================================================
   ROTEADOR E APLICAÇÃO PRINCIPAL - ONG ESPORTE E VIDA (ES MODULE)
   ========================================================================== */

let meuGraficoImpacto = null;

/**
 * Renderiza o gráfico do Chart.js garantindo a existência do Canvas e da Lib
 * @param {number} tentativas Contador de retentativas
 */
export function inicializarGraficoImpacto(tentativas = 0) {
  const ctx = document.getElementById('graficoImpacto');
  
  // Se o canvas ainda não existe no DOM ou o Chart.js (CDN) não carregou, aguarda e tenta novamente
  if (!ctx || typeof window.Chart === 'undefined') {
    if (tentativas < 15) {
      setTimeout(() => inicializarGraficoImpacto(tentativas + 1), 100);
    }
    return;
  }

  // Destrói instância prévia se existir (evita erros ao re-navegar pela SPA)
  if (meuGraficoImpacto) {
    meuGraficoImpacto.destroy();
  }

  // Instanciação usando a classe global do Chart.js
  meuGraficoImpacto = new window.Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Futebol Comunitário', 'Basquete para Todos', 'Atletismo no Futuro'],
      datasets: [{
        label: 'Jovens Atendidos',
        data: [2500, 1500, 1000],
        backgroundColor: ['#2164A7', '#0384D8', '#29A33E'],
        borderWidth: 2,
        borderColor: '#FFFFFF'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            font: { family: "'Segoe UI', sans-serif", size: 14 }
          }
        }
      }
    }
  });
}

// Roteador Single Page Application (SPA)
document.addEventListener('DOMContentLoaded', () => {
  const appContainer = document.querySelector('main');
  const navLinks = document.querySelectorAll('.nav-menu a');

  const routes = {
    '': 'index.html',
    '#inicio': 'index.html',
    '#projetos': 'projetos.html',
    '#cadastro': 'cadastro.html'
  };

  async function renderPage(hash) {
    const pageUrl = routes[hash] || routes['#inicio'];

    try {
      const response = await fetch(pageUrl);
      if (!response.ok) throw new Error(`Erro: ${response.status}`);
      
      const htmlText = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlText, 'text/html');
      const newMainContent = doc.querySelector('main')?.innerHTML || htmlText;

      // Injeta o novo HTML na tag <main>
      appContainer.innerHTML = newMainContent;
      updateActiveNavLink(hash);
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Se a página carregada for a inicial, dispara a criação do gráfico
      if (pageUrl === 'index.html') {
        requestAnimationFrame(() => {
          inicializarGraficoImpacto();
        });
      }

    } catch (error) {
      console.error('Falha no roteamento SPA:', error);
      appContainer.innerHTML = `
        <section class="alert-box error">
          <h2>Erro de Carregamento</h2>
          <p>Não foi possível carregar a página solicitada.</p>
        </section>`;
    }
  }

  // Evento de clique nos links
  document.addEventListener('click', (e) => {
    const link = e.target.closest('.nav-menu a');
    if (link) {
      e.preventDefault();
      const href = link.getAttribute('href');
      let targetHash = '#inicio';
      
      if (href.includes('projetos')) targetHash = '#projetos';
      if (href.includes('cadastro')) targetHash = '#cadastro';

      window.location.hash = targetHash;
    }
  });

  function updateActiveNavLink(hash) {
    const currentHash = hash || '#inicio';
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      const isActive = (currentHash === '#inicio' && href.includes('index')) ||
                       (currentHash === '#projetos' && href.includes('projetos')) ||
                       (currentHash === '#cadastro' && href.includes('cadastro'));
      
      link.classList.toggle('active', isActive);
    });
  }

  window.addEventListener('hashchange', () => {
    renderPage(window.location.hash);
  });

  // Renderização inicial
  renderPage(window.location.hash);
});