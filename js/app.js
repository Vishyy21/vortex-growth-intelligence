/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   APP — app.js
   Main bootstrap entry point
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initCursor();
    initParticles();
    initLoader();

    // Render the initial dashboard page
    renderPage('dashboard');
    initPageCharts('dashboard');
    initCardTilt();
});
