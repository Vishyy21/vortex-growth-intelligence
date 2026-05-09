/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   NOTIFICATIONS — notifications.js
   Toast alerts · live update banners
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

/**
 * Show a toast notification.
 * @param {string} msg
 * @param {'default'|'success'} type
 */
function action(msg, type = 'default') {
    const toast = document.createElement('div');
    toast.className = `toast${type === 'success' ? ' toast-success' : ''}`;
    toast.innerHTML = `<div class="toast-icon"></div><div class="toast-body">${msg}</div>`;
    document.body.appendChild(toast);

    // Trigger reveal
    requestAnimationFrame(() => toast.classList.add('reveal'));

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

function openCmd() {
    action('Opening Command Palette (⌘K)');
}
