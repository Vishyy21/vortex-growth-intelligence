/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PAGE: REPORTS — pages/reports.js
   Executive briefings · exports · summaries
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function renderReports(container) {
    container.innerHTML = `
    <div class="panel fade-up">
      <div class="panel-inner">
        <div class="panel-title">Executive Briefings</div>
        <div style="margin-top:20px;">
          <table class="intel-table">
            <thead>
              <tr><th>Report Name</th><th>Date</th><th>Status</th><th>Action</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Q2 Performance Audit</td>
                <td>May 09, 2025</td>
                <td><span class="status-pill s-active">Audited</span></td>
                <td><button class="btn-ghost" style="padding:6px 12px;">View</button></td>
              </tr>
              <tr>
                <td>Regional Expansion Model</td>
                <td>May 04, 2025</td>
                <td><span class="status-pill s-active">Ready</span></td>
                <td><button class="btn-ghost" style="padding:6px 12px;">View</button></td>
              </tr>
              <tr>
                <td>CAC Breakdown Report</td>
                <td>Apr 28, 2025</td>
                <td><span class="status-pill s-warn">Critical</span></td>
                <td><button class="btn-ghost" style="padding:6px 12px;">View</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    `;
}
