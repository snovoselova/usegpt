document.addEventListener('DOMContentLoaded', function () {
    const toggleMenu = document.querySelector('#toggle_menu');
    const overlay = document.querySelector('#overlay');

    toggleMenu.addEventListener('click', function () {
        overlay.classList.toggle('hidden');
    });
});
