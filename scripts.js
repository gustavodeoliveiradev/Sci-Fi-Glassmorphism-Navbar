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

function activeLink() {
    list.forEach((item) => {
        item.classList.remove('active');
        item.querySelector('a').setAttribute('aria-current', 'false');
    });

    this.classList.add('active');
    this.querySelector('a').setAttribute('aria-current', 'page');

    // 1. Pega a classe do link (ex: nav-home, nav-user...)
    const link = this.querySelector('a');
    const classes = link.classList;

    // 2. Lógica para trocar a cor do indicador e do glow
    if (classes.contains('nav-home')) {
        indicator.style.backgroundColor = 'var(--neon-home)';
        indicator.style.boxShadow = '0 0 15px var(--neon-home)';
    } else if (classes.contains('nav-user')) {
        indicator.style.backgroundColor = 'var(--neon-user)';
        indicator.style.boxShadow = '0 0 15px var(--neon-user)';
    } else if (classes.contains('nav-dashboard')) {
        indicator.style.backgroundColor = 'var(--neon-dashboard)';
        indicator.style.boxShadow = '0 0 15px var(--neon-dashboard)';
    } else if (classes.contains('nav-chats')) {
        indicator.style.backgroundColor = 'var(--neon-chats)';
        indicator.style.boxShadow = '0 0 15px var(--neon-chats)';
    } else if (classes.contains('nav-cart')) {
        indicator.style.backgroundColor = 'var(--neon-cart)';
        indicator.style.boxShadow = '0 0 15px var(--neon-cart)';
    }

    // 3. Move o indicador (Cálculo que já tínhamos)
    indicator.style.opacity = "1";
    indicator.style.left = `${this.offsetLeft + (this.offsetWidth / 2) - (indicator.offsetWidth / 2)}px`;
}