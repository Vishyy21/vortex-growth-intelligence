/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PAGE: ROI — pages/roi.js
   Profitability · spend optimization · forecasting
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function renderROI(container) {
    container.innerHTML = `
    <div class="editorial-block fade-up" style="margin-bottom:20px;">
      <div class="editorial-quote">
        <div class="editorial-text">Strategic reallocation of Search budget to high-intent <em>Enterprise clusters</em> projected to increase portfolio yield by <em>₹42.8L</em>.</div>
      </div>
      <div class="editorial-stat">
        <div class="editorial-stat-num">4.88<span>×</span></div>
        <div style="font-size:11px;color:var(--txt3);letter-spacing:0.18em;text-transform:uppercase;margin-top:12px;font-weight:600;">Projected Yield Velocity</div>
      </div>
    </div>
    <div class="panel fade-up d2">
       <div class="panel-inner">
          <div class="panel-header">
             <div><div class="panel-title">Yield Forecasting Engine</div><div class="panel-sub">Autonomous performance modeling for Q3 2025</div></div>
             <button class="btn-primary" style="padding:6px 14px;font-size:11px;">Run Simulation</button>
          </div>
          <div style="height:350px;"><canvas id="forecastChart"></canvas></div>
       </div>
    </div>
    `;
}
