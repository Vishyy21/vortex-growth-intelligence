/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PAGE: CAMPAIGNS — pages/campaigns.js
   Attribution · campaign efficiency · active stream
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function renderCampaigns(container) {
    container.innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
      <div class="panel fade-up">
        <div class="panel-inner">
          <div class="panel-header">
             <div><div class="panel-title">Attribution Matrix</div><div class="panel-sub">Yield distribution by source & device</div></div>
          </div>
          <div style="height:320px;"><canvas id="campChart"></canvas></div>
        </div>
      </div>
      <div class="panel fade-up d2">
        <div class="panel-inner">
          <div class="panel-header">
             <div><div class="panel-title">Campaign Efficiency</div><div class="panel-sub">Top 5 active performance units</div></div>
          </div>
          <div style="display:flex;flex-direction:column;gap:20px;">
             ${renderCampaignRow('Enterprise Search v4',              '5.2×', '88%', 'var(--accent)')}
             ${renderCampaignRow('Regional Social Discovery',         '3.8×', '72%', 'var(--cyan)')}
             ${renderCampaignRow('Retention Stream - High Value',     '8.4×', '94%', 'var(--success)')}
             ${renderCampaignRow('Brand Presence - Q2 Video',        '1.4×', '35%', 'var(--danger)')}
             ${renderCampaignRow('Display Retargeting',               '2.8×', '58%', 'var(--accent2)')}
          </div>
        </div>
      </div>
    </div>
    <div class="panel fade-up d3" style="margin-top:20px;">
       <div class="panel-inner">
          <div class="panel-title" style="margin-bottom:24px;">Active Campaign Stream</div>
          <table class="intel-table">
             <thead><tr><th>Initiative</th><th>Status</th><th>Spend</th><th>Yield</th><th>Efficiency</th><th>Action</th></tr></thead>
             <tbody>
                <tr>
                  <td>Global Search Expansion</td>
                  <td><span class="status-pill s-active">Running</span></td>
                  <td>₹42.4L</td><td>₹2.2Cr</td><td>5.2×</td>
                  <td><button class="btn-ghost" style="padding:6px 12px;">Optimize</button></td>
                </tr>
                <tr>
                  <td>Discovery Discovery</td>
                  <td><span class="status-pill s-active">Running</span></td>
                  <td>₹18.2L</td><td>₹68.4L</td><td>3.8×</td>
                  <td><button class="btn-ghost" style="padding:6px 12px;">Optimize</button></td>
                </tr>
                <tr>
                  <td>High-Intent Retargeting</td>
                  <td><span class="status-pill s-warn">Warning</span></td>
                  <td>₹8.4L</td><td>₹12.2L</td><td>1.4×</td>
                  <td><button class="btn-ghost" style="padding:6px 12px;color:var(--danger);">Review</button></td>
                </tr>
             </tbody>
          </table>
       </div>
    </div>
    `;
}
