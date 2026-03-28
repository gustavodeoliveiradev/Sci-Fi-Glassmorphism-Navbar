# 🛸 Sci-Fi Glassmorphism Navbar

![Status](https://img.shields.io/badge/Status-Concluído-success)
![Tech](https://img.shields.io/badge/Tech-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-orange)
![Design](https://img.shields.io/badge/Design-Glassmorphism%20%26%20Neon-purple)
![Responsive](https://img.shields.io/badge/Responsive-Yes-blue)
![A11y](https://img.shields.io/badge/A11y-WCAG%202.1%20AA-green)

&gt; Uma barra de navegação futurista com efeitos de vidro (Glassmorphism), animações neon e interatividade avançada.  
&gt; *"Estudando para superar meus limites."* ⚡

🔗 **[Live Demo](https://gustavodeoliveiradev.github.io/Sci-Fi-Glassmorphism-Navbar/)**

---

## ✨ Funcionalidades

| Feature | Descrição |
|---------|-----------|
| 🎨 **Glassmorphism Realista** | Efeito de vidro fosco com `backdrop-filter`, bordas sutis e sombras em camadas |
| 🌈 **Paleta Neon Dinâmica** | Cada ícone possui sua própria cor neon (ciano, roxo, magenta, verde, âmbar) |
| 🔮 **Indicator Animado** | Barra deslizante que acompanha o ícone ativo com transição suave |
| ⌨️ **Acessibilidade Total** | Navegação completa via teclado (`Tab`), ARIA labels, focus-visible e leitores de tela |
| 📱 **Responsivo** | Adaptação perfeita para mobile (telas &lt; 420px) |
| ⚡ **Micro-interações** | Hover effects, tooltips animados e entrada em cascata dos ícones |
| 🎬 **Animações Sci-Fi** | Efeito de *flicker* neon na borda e animação de "queda" dos ícones |

---

## 🛠️ Stack Tecnológica

- **HTML5** — Estrutura semântica com ARIA
- **CSS3** — Variáveis CSS, Flexbox, Animations, Backdrop Filter
- **JavaScript (Vanilla)** — Manipulação de DOM sem dependências
- **Font Awesome 7** — Ícones vetoriais escaláveis

---

## 🎯 Destaques Técnicos

### Acessibilidade (A11y)
- ✅ Navegação 100% funcional via teclado
- ✅ `aria-label` em todos os links
- ✅ `aria-current="page"` dinâmico
- ✅ `focus-visible` estilizado visualmente
- ✅ Ícones com `aria-hidden` (evita duplicação em leitores de tela)

### Performance
- Zero dependências externas (exceto Font Awesome via CDN)
- CSS organizado em camadas lógicas
- JavaScript modular e reutilizável
- Animações GPU-accelerated (`transform`, `opacity`)

### Código Limpo
- Variáveis CSS para manutenção fácil de cores
- Separação de concerns (estilo, comportamento, estrutura)
- Comentários em português para comunidade BR

---

## 🚀 Como Usar

### 1. Clone o repositório
```bash
git clone https://github.com/gustavodeoliveiradev/Sci-Fi-Glassmorphism-Navbar.git
```

### 2. Abra o projeto
```bash
cd Sci-Fi-Glassmorphism-Navbar
# Abra index.html no navegador ou use Live Server
```

### 3. Personalize
Edite as variáveis CSS em `:root` para mudar as cores neon:

```css
:root {
  --neon-home: #00f2ff;      /* Ciano */
  --neon-user: #7000ff;      /* Roxo */
  --neon-dashboard: #ff0055; /* Rosa */
  --neon-chats: #00ff88;     /* Verde */
  --neon-cart: #ffaa00;      /* Laranja */
}
```

## 📅 Cronograma de Desenvolvimento

| Dia | Foco | Status |
|-----|------|--------|
| 1-2 | Estrutura HTML e Glassmorphism base | ✅ |
| 3-4 | Animações CSS e JavaScript inicial | ✅ |
| 5 | Responsividade e Mobile First | ✅ |
| 6 | Acessibilidade (A11y) e Refatoração | ✅ |
| 7 | **Documentação Final e Deploy** | ✅ |

---

## 🖼️ Preview

| Estado Inicial | Com Interação |
|----------------|---------------|
| ![Inicial](/img/img.png) | ![Ativa](/img/img1.png) |

*Demonstração das interações: hover neon, indicator deslizante e navegação por teclado*

---

## 🤝 Contribuição

Este projeto foi desenvolvido como estudo pessoal de UI/UX e micro-interações.  
Sugestões e feedbacks são bem-vindos via [Issues](https://github.com/gustavodeoliveiradev/Sci-Fi-Glassmorphism-Navbar/issues)!

---

## 📄 Licença

Distribuído sob licença MIT. Veja [LICENSE](./LICENSE) para mais informações.

---

<p align="center">
  Feito com 💜 e muito ☕ por <a href="https://github.com/gustavodeoliveiradev">Gustavo de Oliveira</a>
</p>