/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PAGE: DASHBOARD — pages/dashboard.js
   Hero · KPI grid · overview charts · summary
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function renderDashboard(container) {
    container.innerHTML = `
    <div class="hero fade-up">
      <div class="hero-left">
        <div class="hero-eyebrow" style="color:var(--cyan);font-weight:700;font-family:var(--f-ui);text-transform:uppercase;letter-spacing:0.2em;font-size:10px;display:flex;align-items:center;gap:8px;margin-bottom:16px;">
          <div style="width:6px;height:6px;border-radius:50%;background:var(--cyan);box-shadow:0 0 10px var(--cyan);animation:pulse-d 2s infinite;"></div>
          Executive Market Intelligence · Q2 2025
        </div>
        <h1 class="hero-h1">Portfolio <span class="serif">Intelligence</span><br>& Growth Yield</h1>
        <p class="hero-sub" style="font-size:14px;max-width:500px;opacity:0.7;margin-bottom:32px;">Synthesizing 1.4B behavioral signals across 14 high-impact growth initiatives. Multi-touch attribution model currently optimized for high-intent cohorts.</p>
        <div style="display:flex;gap:12px;margin-bottom:40px;">
          <div class="hero-chip">
            <div style="font-size:9px;text-transform:uppercase;letter-spacing:0.1em;opacity:0.5;">Efficiency</div>
            <div style="font-size:16px;font-weight:700;color:var(--success);">326% <span style="font-size:10px;font-weight:400;">ROI</span></div>
          </div>
          <div class="hero-chip">
            <div style="font-size:9px;text-transform:uppercase;letter-spacing:0.1em;opacity:0.5;">Yield Velocity</div>
            <div style="font-size:16px;font-weight:700;color:var(--accent2);">4.26× <span style="font-size:10px;font-weight:400;">ROAS</span></div>
          </div>
        </div>
        <div style="display:flex;gap:16px;">
          <button class="btn-primary" style="padding:14px 28px;font-size:14px;" onclick="navigateTo('roi')">
            Strategize Initiatives
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <button class="btn-ghost" style="padding:14px 24px;font-size:14px;" onclick="action('Requesting audit PDF...')">Executive Audit</button>
        </div>
      </div>
      <div class="hero-right">
        <div class="hero-stat-card" style="padding:32px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);box-shadow:0 20px 40px rgba(0,0,0,0.3);">
          <div style="font-size:10px;text-transform:uppercase;letter-spacing:0.15em;color:var(--txt3);margin-bottom:12px;font-weight:600;">Portfolio Revenue</div>
          <div class="hero-stat-val" style="font-size:48px;font-weight:700;">₹<span id="hero-rev">0</span></div>
          <div style="display:flex;align-items:center;gap:6px;margin-top:12px;color:var(--success);font-size:12px;font-weight:600;">
            <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path d="M5 10l7-7m0 0l7 7m-7-7v18" stroke-linecap="round" stroke-linejoin="round"/></svg>
            14.2% <span style="font-weight:400;opacity:0.6;font-size:10px;color:var(--txt1);">vs Last Month</span>
          </div>
          <div class="spark-wrap" style="height:40px;margin-top:20px;opacity:0.6;"><canvas id="hero-spark"></canvas></div>
        </div>
        <div class="hero-ai-badge fade-up d4" style="margin-top:20px;padding:16px;background:rgba(139,92,246,0.1);border:1px solid rgba(139,92,246,0.2);border-radius:16px;display:flex;align-items:center;gap:12px;">
          <div class="ai-orb" style="width:32px;height:32px;border-radius:50%;background:var(--accent);display:flex;align-items:center;justify-content:center;box-shadow:0 0 15px var(--glow-p);">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z"/></svg>
          </div>
          <div>
            <div style="font-size:11px;font-weight:700;color:var(--accent2);text-transform:uppercase;letter-spacing:0.05em;">AI Signal Detected</div>
            <div style="font-size:10px;color:var(--txt2);opacity:0.8;">Scaling Search Initiatives +12% projected to gain ₹22L.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="kpi-grid">
      ${renderKpi('Portfolio Revenue', '₹5.28Cr', '+14.2%', 'yield',  'var(--accent)',  true)}
      ${renderKpi('Total Investment',  '₹1.24Cr', '+8.4%',  'spend',  'var(--danger)',  false)}
      ${renderKpi('Efficiency (ROI)',  '326%',    '+12.4%', 'roi',    'var(--success)', true)}
      ${renderKpi('Yield (ROAS)',      '4.26×',   '+0.4',   'roas',   'var(--cyan)',    true)}
      ${renderKpi('Acquisition Cost',  '₹1,420',  '−₹125',  'cac',    'var(--success)', true)}
      ${renderKpi('Conv. Velocity',    '3.45%',   '+0.8%',  'cvr',    'var(--accent2)', true)}
    </div>

    <div style="display:grid;grid-template-columns:1fr 360px;gap:20px;">
      <div class="panel">
        <div class="panel-inner">
          <div class="panel-header">
            <div><div class="panel-title">Revenue & Yield Dynamics</div><div class="panel-sub">Incremental performance vs target model · H1 2025</div></div>
            <div style="display:flex;gap:8px;">
               <div class="chip active">Revenue</div>
               <div class="chip">Projected</div>
            </div>
          </div>
          <div style="height:320px;"><canvas id="mainChart"></canvas></div>
        </div>
      </div>
      <div class="panel">
        <div class="panel-inner">
          <div class="panel-header">
            <div><div class="panel-title">Yield by Channel</div><div class="panel-sub">Performance efficiency matrix</div></div>
          </div>
          <div style="display:flex;flex-direction:column;gap:24px;">
            ${renderBar('Search Intelligence', '94%', 'var(--accent)')}
            ${renderBar('Social Discovery',    '78%', 'var(--cyan)')}
            ${renderBar('Retention Stream',    '88%', 'var(--success)')}
            ${renderBar('Brand Presence',      '42%', 'var(--accent2)')}
            ${renderBar('Direct Acquisition',  '65%', 'var(--txt3)')}
          </div>
          <div class="ai-insight-card" style="margin-top:32px;padding:20px;background:rgba(255,255,255,0.03);border:1px solid var(--border);border-radius:16px;">
            <div style="font-size:11px;font-weight:700;text-transform:uppercase;color:var(--accent2);margin-bottom:8px;">Strategic Insight</div>
            <p style="font-size:12px;line-height:1.6;opacity:0.7;">Search cohorts showing high saturation. Recommend shifting 15% budget to Social Discovery to maintain yield velocity.</p>
          </div>
        </div>
      </div>
    </div>
    `;

    setTimeout(() => {
        animateCounter(document.getElementById('hero-rev'), 52840000, 2000);
    }, 100);
}
