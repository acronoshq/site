let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        header.style.top = '-60px'; // Esconde o header
    } else {
        header.style.top = '0'; // Mostra o header
    }
    lastScrollTop = scrollTop;
});