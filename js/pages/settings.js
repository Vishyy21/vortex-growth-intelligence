/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PAGE: SETTINGS — pages/settings.js
   Theme · preferences · integrations
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function renderSettings(container) {
    container.innerHTML = `
    <div class="panel fade-up">
      <div class="panel-inner">
        <div class="panel-title">Workspace Settings</div>
        <div class="panel-sub">Theme · Preferences · Integrations</div>
        <div style="margin-top:32px;display:flex;flex-direction:column;gap:20px;">
          <div style="display:flex;justify-content:space-between;align-items:center;padding:16px;background:rgba(255,255,255,0.02);border:1px solid var(--border);border-radius:12px;">
            <div>
              <div style="font-size:14px;font-weight:600;color:var(--txt1);">Appearance</div>
              <div style="font-size:12px;color:var(--txt3);margin-top:2px;">Toggle dark / light mode</div>
            </div>
            <button class="btn-ghost" onclick="toggleTheme()">Toggle Theme</button>
          </div>
        </div>
      </div>
    </div>
    `;
}
