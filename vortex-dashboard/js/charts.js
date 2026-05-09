/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   CHARTS — charts.js
   Chart.js initialization · sparklines · tooltips
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

/**
 * Returns theme-aware color tokens for chart rendering.
 */
function getChartTheme() {
    const dark = document.documentElement.getAttribute('data-theme') === 'dark';
    return {
        grid:   dark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)',
        tick:   dark ? 'rgba(255,255,255,0.4)'  : 'rgba(0,0,0,0.4)',
        accent: '#8B5CF6',
        cyan:   '#22D3EE'
    };
}

/**
 * Standard cinematic tooltip config for all charts.
 */
function cinematicTooltip() {
    return {
        enabled: true,
        backgroundColor: 'rgba(7,10,24,0.95)',
        titleFont: { size: 13, weight: '700', family: 'Satoshi' },
        bodyFont:  { size: 12, family: 'Satoshi' },
        padding: 12,
        cornerRadius: 12,
        displayColors: true,
        borderColor: 'rgba(255,255,255,0.1)',
        borderWidth: 1
    };
}

/**
 * Create a sparkline chart.
 */
function makeSpark(id, data, color) {
    const el = document.getElementById(id);
    if (!el) return;
    new Chart(el, {
        type: 'line',
        data: {
            labels: data.map((_, i) => i),
            datasets: [{ data, borderColor: color, borderWidth: 1.5, pointRadius: 0, tension: 0.4, fill: false }]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { enabled: false } },
            scales:  { x: { display: false }, y: { display: false } }
        }
    });
}

/**
 * Initialize charts for a given page.
 */
function initPageCharts(pageId) {
    const t = getChartTheme();

    if (pageId === 'dashboard') {
        new Chart(document.getElementById('mainChart'), {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                    {
                        label: 'Revenue (₹Cr)', data: [3.8, 4.2, 4.1, 4.5, 4.9, 5.28],
                        borderColor: t.accent, borderWidth: 4, tension: 0.45, fill: true,
                        backgroundColor: ctx => {
                            const g = ctx.chart.ctx.createLinearGradient(0, 0, 0, 400);
                            g.addColorStop(0, 'rgba(139,92,246,0.2)'); g.addColorStop(1, 'transparent');
                            return g;
                        },
                        pointRadius: 0, pointHoverRadius: 6,
                        pointHoverBackgroundColor: t.accent, pointHoverBorderColor: '#fff', pointHoverBorderWidth: 2
                    },
                    {
                        label: 'Target', data: [3.5, 3.8, 4.0, 4.2, 4.5, 4.8],
                        borderColor: 'rgba(255,255,255,0.1)', borderWidth: 1, borderDash: [5, 5],
                        tension: 0.4, fill: false, pointRadius: 0
                    }
                ]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                interaction: { intersect: false, mode: 'index' },
                plugins: { legend: { display: false }, tooltip: cinematicTooltip() },
                scales: {
                    x: { grid: { display: false }, ticks: { color: t.tick } },
                    y: { grid: { color: t.grid }, ticks: { color: t.tick, callback: v => '₹' + v + 'Cr' } }
                }
            }
        });

        makeSpark('hero-spark',  [32, 35, 33, 38, 42, 48, 52], 'var(--success)');
        makeSpark('spark-yield', [38, 42, 40, 45, 50, 52],      t.accent);
        makeSpark('spark-spend', [9, 10, 11, 10, 11, 12],        'var(--danger)');
        makeSpark('spark-roi',   [280, 300, 290, 310, 320, 326], 'var(--success)');
        makeSpark('spark-roas',  [4.1, 3.9, 4.0, 4.2, 4.2, 4.3], t.cyan);
        makeSpark('spark-cac',   [1600, 1550, 1500, 1450, 1420, 1420], 'var(--success)');
        makeSpark('spark-cvr',   [3.1, 3.2, 3.1, 3.4, 3.4, 3.5], 'var(--accent2)');
    }

    if (pageId === 'campaigns') {
        new Chart(document.getElementById('campChart'), {
            type: 'doughnut',
            data: {
                labels: ['Search', 'Social', 'Email', 'Display', 'Direct'],
                datasets: [{
                    data: [42, 28, 15, 10, 5],
                    backgroundColor: [t.accent, t.cyan, 'var(--success)', 'var(--accent2)', 'var(--txt3)'],
                    borderWidth: 0, cutout: '75%', hoverOffset: 15
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { display: false }, tooltip: cinematicTooltip() }
            }
        });
    }

    if (pageId === 'audience') {
        new Chart(document.getElementById('segChart'), {
            type: 'radar',
            data: {
                labels: ['Retention', 'LTV', 'AOV', 'Frequency', 'Advocacy', 'Risk'],
                datasets: [{
                    label: 'Premium Cohort',
                    data: [92, 88, 75, 82, 65, 12],
                    borderColor: t.accent, backgroundColor: 'rgba(139,92,246,0.2)',
                    borderWidth: 2, pointRadius: 2
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                scales:  { r: { grid: { color: t.grid }, angleLines: { color: t.grid }, ticks: { display: false } } },
                plugins: { legend: { display: false } }
            }
        });
    }

    if (pageId === 'roi') {
        new Chart(document.getElementById('forecastChart'), {
            type: 'line',
            data: {
                labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Modeled Yield', data: [5.4, 5.8, 6.2, 6.5, 7.1, 7.8],
                    borderColor: 'var(--success)', borderWidth: 3, tension: 0.4, fill: true,
                    backgroundColor: ctx => {
                        const g = ctx.chart.ctx.createLinearGradient(0, 0, 0, 400);
                        g.addColorStop(0, 'rgba(16,185,129,0.1)'); g.addColorStop(1, 'transparent');
                        return g;
                    }
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { display: false }, tooltip: cinematicTooltip() },
                scales: {
                    x: { grid: { display: false }, ticks: { color: t.tick } },
                    y: { grid: { color: t.grid },  ticks: { color: t.tick } }
                }
            }
        });
    }
}
