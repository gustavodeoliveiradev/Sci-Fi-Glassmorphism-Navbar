/**
 * Sci-Fi Glassmorphism Navbar
 */

const list = document.querySelectorAll('.navigation li');
const indicator = document.querySelector('.indicator');

function activeLink() {
    // Remove a classe 'active' de todos os itens
    list.forEach((item) => {
        item.classList.remove('active');
        const link = item.querySelector('a');
        if (link) link.setAttribute('aria-current', 'false');
    });

    // Adiciona a classe 'active' no item clicado
    this.classList.add('active');
    const activeLink = this.querySelector('a');
    if (activeLink) {
        activeLink.setAttribute('aria-current', 'page');
    }

    // Move o indicador
    indicator.style.opacity = "1";
    indicator.style.left = `${this.offsetLeft + (this.offsetWidth / 2) - (indicator.offsetWidth / 2)}px`;

    // Muda a cor do indicador baseado no item
    if (activeLink) {
        if (activeLink.classList.contains('nav-home')) {
            indicator.style.background = 'var(--neon-home)';
            indicator.style.boxShadow = '0 0 15px var(--neon-home)';
        } else if (activeLink.classList.contains('nav-user')) {
            indicator.style.background = 'var(--neon-user)';
            indicator.style.boxShadow = '0 0 15px var(--neon-user)';
        } else if (activeLink.classList.contains('nav-dashboard')) {
            indicator.style.background = 'var(--neon-dashboard)';
            indicator.style.boxShadow = '0 0 15px var(--neon-dashboard)';
        } else if (activeLink.classList.contains('nav-chats')) {
            indicator.style.background = 'var(--neon-chats)';
            indicator.style.boxShadow = '0 0 15px var(--neon-chats)';
        } else if (activeLink.classList.contains('nav-cart')) {
            indicator.style.background = 'var(--neon-cart)';
            indicator.style.boxShadow = '0 0 15px var(--neon-cart)';
        }
    }
}

// Adiciona event listener em cada item
list.forEach((item) => item.addEventListener('click', activeLink));