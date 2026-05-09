/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PAGE: AUDIENCE — pages/audience.js
   Behavioral segments · cohort retention · LTV
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function renderAudience(container) {
    container.innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
      <div class="panel fade-up">
        <div class="panel-inner">
          <div class="panel-title">Behavioral Segments</div>
          <div style="height:320px;margin-top:24px;"><canvas id="segChart"></canvas></div>
        </div>
      </div>
      <div class="panel fade-up d2">
        <div class="panel-inner">
          <div class="panel-header">
             <div><div class="panel-title">Cohort Retention Velocity</div><div class="panel-sub">LTV projection by acquisition source</div></div>
          </div>
          <div style="display:flex;flex-direction:column;gap:24px;margin-top:12px;">
            ${renderBar('Enterprise Technology',   '92%', 'var(--accent)')}
            ${renderBar('SME Growth Clusters',     '74%', 'var(--cyan)')}
            ${renderBar('Digital Consumer Direct', '58%', 'var(--success)')}
            ${renderBar('Global Partner Network',  '82%', 'var(--accent2)')}
          </div>
          <div style="margin-top:40px;padding:24px;background:var(--bg2);border-radius:20px;border:1px solid var(--border);">
             <div style="font-size:11px;font-weight:700;color:var(--cyan);margin-bottom:8px;text-transform:uppercase;">Audience Insight</div>
             <p style="font-size:13px;line-height:1.6;opacity:0.8;">Enterprise cohorts acquired via LinkedIn show <strong>2.4× higher retention</strong> than baseline. Recommend doubling down on professional networks.</p>
          </div>
        </div>
      </div>
    </div>
    `;
}
