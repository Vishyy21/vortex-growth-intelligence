/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   THEME — theme.js
   Dark / light toggle · localStorage persistence
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function toggleTheme() {
    const html  = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    const next   = isDark ? 'light' : 'dark';

    html.setAttribute('data-theme', next);
    localStorage.setItem('vx-theme', next);

    const svg = document.getElementById('theme-icon-svg');
    if (isDark) {
        svg.innerHTML = '<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke-linecap="round" stroke-linejoin="round"/>';
    } else {
        svg.innerHTML = '<path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" stroke-linecap="round" stroke-linejoin="round"/>';
    }

    // Re-render current page so charts pick up new theme colors
    navigateTo(window.__vxCurrentPage || 'dashboard');
}

function initTheme() {
    const saved = localStorage.getItem('vx-theme');
    if (saved) document.documentElement.setAttribute('data-theme', saved);
}
