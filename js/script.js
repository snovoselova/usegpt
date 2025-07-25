document.addEventListener('DOMContentLoaded', function () {
    const toggleMenu = document.querySelector('#toggle_menu');
    const overlay = document.querySelector('#overlay');
    const sidebar = document.querySelector('.sidebar');
    const openPaywallElements = document.querySelectorAll('.paywall-show');
    const paywall = document.querySelector('.card');

    toggleMenu.addEventListener('click', function () {
        overlay.classList.toggle('hidden');
        sidebar.classList.toggle('hidden');
    });

    openPaywallElements.forEach(elem => {
        elem.addEventListener('click', function () {
            overlay.classList.remove('hidden');
            paywall.classList.remove('hidden');
            sidebar.classList.add('hidden');
        });
    });

    overlay.addEventListener('click', function () {
        overlay.classList.add('hidden');
        paywall.classList.add('hidden');
        sidebar.classList.add('hidden');
    });

    sidebar.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
    });

    paywall.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
    });
});
