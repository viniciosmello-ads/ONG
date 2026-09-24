# 🏅 ONG Esporte e Vida — Plataforma Web Institucional & Engajamento Social

![License](https://img.shields.io/badge/license-MIT-green.svg)
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

Plataforma web responsiva e acessível desenvolvida para a **ONG Esporte e Vida**, uma organização focada na inclusão social de jovens por meio do esporte. O projeto conta com navegação fluida em Single Page Application (SPA), painel visual interativo do impacto social e formulário completo para registro de colaboradores com máscaras de entrada e validações nativas.

---

## 📋 Índice

- [Visão Geral e Funcionalidades](#-visão-geral-e-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura e Estrutura de Diretórios](#-arquitetura-e-estrutura-de-diretórios)
- [Pré-requisitos e Execução Local](#-pré-requisitos-e-execução-local)
- [Estratégia de Branching (GitFlow) e Commits](#-estratégia-de-branching-gitflow-e-commits)
- [Acessibilidade (a11y) e UX](#-acessibilidade-a11y-e-ux)
- [Licença](#-licença)

---

## 🚀 Visão Geral e Funcionalidades

A aplicação foi projetada para oferecer uma experiência de navegação rápida e inclusiva, dividida em três pilares principais:

1. **Página Inicial (`index.html`):** Apresentação institucional da ONG (missão, visão e valores), aliada a um painel gráfico dinâmico (*Doughnut Chart*) que exibe a distribuição de atendimentos por modalidade esportiva.
2. **Iniciativas Solidárias (`projetos.html`):** Detalhamento das modalidades atendidas (futebol, basquete, atletismo) e seções estruturadas para direcionamento de doações financeiras (Pix, transferência) e trabalho voluntário.
3. **Engajamento e Cadastro (`cadastro.html`):** Formulário interativo para captação de novos colaboradores contendo:
   - Validações nativas HTML5 (`pattern`, `required`, `minlength`).
   - Máscaras dinâmicas e inteligentes (CPF, CEP e Telefone) com controle de posição do cursor e suporte a colagem sanitizada (`paste`).
   - Proteção contra envio duplicado de formulário (*anti-multi-submit*).
   - Armazenamento local de dados (`localStorage`).

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição e Aplicação no Projeto |
| :--- | :--- |
| **HTML5 Semântico** | Estruturação de dados com elementos semânticos (`<main>`, `<section>`, `<article>`, `<figure>`, `<address>`, `<fieldset>`) garantindo acessibilidade e SEO. |
| **CSS3 (Design System Customizado)** | Arquitetura Mobile-First, variáveis CSS (`:root`), Grid de 12 colunas, transições suaves de estado (`:hover`, `:focus`, `:invalid`) e responsividade em 5 cenários adaptativos (`@media`). |
| **JavaScript Moderno (ES6+)** | Módulos JavaScript (`type="module"`), manipulação de DOM, roteador SPA customizado via `fetch` API e gerenciamento de armazenamento local. |
| **Chart.js (v4.x)** | Biblioteca externa integrada para renderização do gráfico de rosca responsivo no painel de impacto social. |
| **Git / GitHub** | Controle de versão utilizando o fluxo GitFlow, Semantic Versioning (SemVer) e Conventional Commits. |

---

## 📁 Arquitetura e Estrutura de Diretórios

```text
ong-esporte-e-vida/
├── css/
│   └── style.css          # Design System e regras de estilos adaptativos
├── js/
│   ├── main.js            # Roteador SPA e inicialização resiliente do Chart.js
│   └── validation.js      # Máscaras com Regex, sanitização e validação de formulários
├── img/
│   ├── criasesporte.png   # Imagem institucional de abertura
│   └── banner.png         # Ilustração do painel de impacto
├── index.html             # View inicial institucional e painel gráfico
├── projetos.html          # View de projetos e captação de recursos
├── cadastro.html          # View com formulário de cadastro interativo
├── README.md              # Documentação técnica e guia do projeto
└── LICENSE                # Licença do projeto (MIT)
