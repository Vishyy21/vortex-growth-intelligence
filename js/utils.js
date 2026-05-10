/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   UTILS — utils.js
   Helper functions · formatters · reusable utilities
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

/**
 * Animate a numeric counter from 0 to target.
 * @param {HTMLElement} el
 * @param {number} target
 * @param {number} duration  ms
 */
function animateCounter(el, target, duration) {
    if (!el) return;
    const start = performance.now();
    function update(now) {
        const progress = Math.min((now - start) / duration, 1);
        const val = Math.floor((1 - Math.pow(1 - progress, 4)) * target);
        el.textContent = val >= 10000000
            ? (val / 10000000).toFixed(2) + 'Cr'
            : val.toLocaleString();
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

/**
 * Render a labeled progress bar row.
 */
function renderBar(name, pct, color) {
    return `
    <div>
      <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:10px;font-weight:500;">
        <span>${name}</span>
        <span style="color:${color};font-weight:700;">${pct}</span>
      </div>
      <div class="bar-track" style="height:6px;">
        <div class="bar-fill" style="width:${pct};background:linear-gradient(90deg,${color},rgba(255,255,255,0.2));"></div>
      </div>
    </div>`;
}

/**
 * Render a single KPI card.
 */
function renderKpi(label, val, trend, id, color, isUp = true) {
    return `
    <div class="kpi-card fade-up">
      <div class="kpi-pulse"></div>
      <div class="kpi-label">${label}</div>
      <div class="kpi-value">${val}</div>
      <div class="kpi-trend ${isUp ? 'up' : 'dn'}">
        <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
          <path d="${isUp ? 'M5 10l7-7m0 0l7 7m-7-7v18' : 'M19 14l-7 7m0 0l-7-7m7 7V3'}" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        ${trend}
      </div>
      <div style="height:40px;width:100%;margin-top:12px;opacity:0.8;"><canvas id="spark-${id}"></canvas></div>
    </div>`;
}

/**
 * Render a campaign row item.
 */
function renderCampaignRow(name, roas, eff, color) {
    return `
    <div style="display:flex;align-items:center;gap:16px;">
      <div style="width:3px;height:32px;background:${color};border-radius:100px;"></div>
      <div style="flex:1;">
        <div style="font-size:13px;font-weight:600;color:var(--txt1);">${name}</div>
        <div style="font-size:11px;color:var(--txt3);">${roas} ROAS</div>
      </div>
      <div style="text-align:right;">
        <div style="font-size:12px;font-weight:700;color:var(--txt1);">${eff}</div>
        <div style="font-size:9px;text-transform:uppercase;color:var(--txt3);letter-spacing:0.05em;">Efficiency</div>
      </div>
    </div>`;
}

/**
 * Render an AI signal card.
 */
function renderAiCard(title, body, impact, type) {
    const themes = {
        success: { c: 'var(--success)', g: 'rgba(16,185,129,0.1)' },
        danger:  { c: 'var(--danger)',  g: 'rgba(244,63,94,0.1)' },
        cyan:    { c: 'var(--cyan)',    g: 'rgba(34,211,238,0.1)' },
        warn:    { c: '#F59E0B',        g: 'rgba(245,158,11,0.1)' },
        accent:  { c: 'var(--accent)',  g: 'rgba(139,92,246,0.1)' }
    };
    const theme = themes[type] || themes.accent;
    return `
    <div class="panel fade-up" style="border-left:4px solid ${theme.c};">
      <div class="panel-inner" style="padding:24px;">
        <div style="display:flex;justify-content:space-between;margin-bottom:12px;">
           <div style="font-size:14px;font-weight:700;color:var(--txt1);">${title}</div>
           <div style="width:8px;height:8px;border-radius:50%;background:${theme.c};box-shadow:0 0 10px ${theme.c};"></div>
        </div>
        <div style="font-size:12.5px;color:var(--txt2);line-height:1.7;opacity:0.7;">${body}</div>
        <div style="font-size:11px;color:${theme.c};margin-top:20px;font-weight:700;letter-spacing:0.02em;display:flex;align-items:center;gap:6px;">
           <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>
           IMPACT: ${impact}
        </div>
        <button class="btn-primary" style="margin-top:20px;width:100%;font-size:11.5px;justify-content:center;background:${theme.g};border:1px solid ${theme.c};color:${theme.c};box-shadow:none;" onclick="action('Applying strategic initiative...')">Execute Strategy</button>
      </div>
    </div>`;
}
