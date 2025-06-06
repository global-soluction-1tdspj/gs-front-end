document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('close-btn');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const cabecalho = document.querySelector('.cabecalho');
    const rodape = document.querySelector('.rodape');

    function showSidebar() {
        sidebar.classList.add('active');
        if (cabecalho) cabecalho.style.display = 'none';
        if (rodape) rodape.style.display = 'none';
    }
    function hideSidebar() {
        sidebar.classList.remove('active');
        if (window.innerWidth > 900) {
            if (cabecalho) cabecalho.style.display = '';
            if (rodape) rodape.style.display = '';
        }
    }

    if (menuBtn && sidebar) {
        menuBtn.onclick = showSidebar;
    }
    if (closeBtn && sidebar) {
        closeBtn.onclick = hideSidebar;
    }
    sidebarLinks.forEach(link => {
        link.addEventListener('click', hideSidebar);
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 900) {
            if (cabecalho) cabecalho.style.display = '';
            if (rodape) rodape.style.display = '';
        }
    });
});