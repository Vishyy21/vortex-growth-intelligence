/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   NAVIGATION — navigation.js
   SPA routing · active states · page rendering
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

let isNavigating = false;
window.__vxCurrentPage = 'dashboard';

/**
 * Navigate to a page by ID.
 */
function navigateTo(pageId) {
    const content = document.getElementById('page-content');
    if (pageId === window.__vxCurrentPage && content.innerHTML !== '') return;
    if (isNavigating) return;
    isNavigating = true;

    // Update nav active state
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.page === pageId);
    });

    // Transition out
    content.style.opacity   = '0';
    content.style.transform = 'translateY(12px)';

    setTimeout(() => {
        window.__vxCurrentPage = pageId;
        renderPage(pageId);

        // Update topbar labels
        const meta = VX_PAGES[pageId];
        if (meta) {
            document.querySelector('.tb-title').textContent = meta.title;
            document.querySelector('.tb-sub').textContent   = meta.sub;
        }

        window.scrollTo({ top: 0, behavior: 'instant' });

        setTimeout(() => {
            content.style.opacity   = '1';
            content.style.transform = 'translateY(0)';
            initPageCharts(pageId);
            initCardTilt();
            isNavigating = false;
        }, 100);
    }, 300);
}

/**
 * Dispatch to the correct page renderer.
 */
function renderPage(pageId) {
    const container = document.getElementById('page-content');
    const renderers = {
        dashboard: renderDashboard,
        campaigns: renderCampaigns,
        audience:  renderAudience,
        roi:       renderROI,
        ai:        renderAI,
        reports:   renderReports
    };
    const fn = renderers[pageId];
    if (fn) fn(container);
}
