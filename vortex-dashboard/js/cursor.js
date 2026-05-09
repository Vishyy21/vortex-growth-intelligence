/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   CURSOR — cursor.js
   Custom cursor · glow tracking
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function initCursor() {
    const cursor = document.getElementById('vx-cursor');
    const glow   = document.getElementById('cursor-glow');
    if (!cursor || !glow) return;

    document.addEventListener('mousemove', e => {
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        glow.style.left = e.clientX + 'px';
        glow.style.top  = e.clientY + 'px';
    });
}
