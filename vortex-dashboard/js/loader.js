/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   LOADER — loader.js
   Startup loader · Vortex intro transition
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function initLoader() {
    const loader = document.getElementById('vortex-loader');
    if (!loader) return;

    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 1200);
    }, 2000);
}
