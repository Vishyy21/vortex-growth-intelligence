/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PAGE: AI — pages/ai.js
   Signals stream · anomaly detection · intelligence
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function renderAI(container) {
    container.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
       <div style="font-size:18px;font-weight:700;">Strategic Signals Stream</div>
       <div class="chip active">All Signals</div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;">
      ${renderAiCard('Budget Optimization',   'Search ROAS at 5.2×. Incremental budget of ₹15L recommended to capture surging intent.',          '₹78.2L Yield Gain',    'success')}
      ${renderAiCard('Creative Fatigue',      'Social CTR decreased 18.4% in Tier-1 cities. Recommend refreshing visual assets.',                'Efficiency Risk',       'danger')}
      ${renderAiCard('Segment Surge',         'Enterprise cohorts showing 24% surge in retention behavior. Increase bid by 12%.',                'LTV Expansion',         'cyan')}
      ${renderAiCard('Anomaly Detection',     'Unusual spike in direct traffic from EMEA. Investigating bot patterns.',                           'Integrity Alert',       'warn')}
      ${renderAiCard('Attribution Shift',     'View-through conversions from YouTube up 42%. Value adjustment required.',                        'Data Recalibration',    'accent')}
      ${renderAiCard('Predictive Win',        'Forecasting model indicates high-yield window for E-commerce in 72h.',                            'Opportunity Window',    'success')}
    </div>
    `;
}
