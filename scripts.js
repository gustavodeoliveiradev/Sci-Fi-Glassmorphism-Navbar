const list = document.querySelectorAll('.navigation li');
const indicator = document.querySelector('.indicator');

function activeLink() {
    // Remove a classe 'active' de todos os itens
    list.forEach((item) => item.classList.remove('active'));

    // Adiciona a classe 'active' no item clicado
    this.classList.add('active');

    // Move o indicador
    indicator.style.opacity = "1";
    indicator.style.left = `${this.offsetLeft + (this.offsetWidth / 2) - 15}px`;

    // Muda a cor do indicador baseado no item
    const activeLink = this.querySelector('a');
    if (activeLink.classList.contains('nav-home')) indicator.style.background = 'var(--neon-home)';
    else if (activeLink.classList.contains('nav-user')) indicator.style.background = 'var(--neon-user)';
    else if (activeLink.classList.contains('nav-dashboard')) indicator.style.background = 'var(--neon-dashboard)';
    else if (activeLink.classList.contains('nav-chats')) indicator.style.background = 'var(--neon-chats)';
    else if (activeLink.classList.contains('nav-cart')) indicator.style.background = 'var(--neon-cart)';
};

list.forEach((item) => item.addEventListener('click', activeLink));