/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   DATA — data.js
   All datasets · KPI values · mock analytics
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

const VX_DATA = {
    summary: {
        revenue: 52840000,
        investment: 12400000,
        roas: 4.26,
        cac: 1420,
        growth: 14.2,
        conversion: 3.45
    },
    trends: {
        revenue:    [38.2, 41.5, 40.8, 45.2, 49.8, 52.8],
        investment: [9.2, 10.4, 11.2, 10.8, 11.8, 12.4],
        roas:       [4.1, 3.9, 3.6, 4.2, 4.2, 4.26]
    },
    channels: [
        { id: 'search',  name: 'Search Intelligence', roas: 5.2, spend: 4.2, yield: 21.8, color: '#7C3AED' },
        { id: 'social',  name: 'Social Discovery',    roas: 3.8, spend: 3.8, yield: 14.4, color: '#38BDF8' },
        { id: 'email',   name: 'Retention Stream',    roas: 8.4, spend: 1.8, yield: 15.1, color: '#10B981' },
        { id: 'display', name: 'Brand Presence',      roas: 1.4, spend: 2.6, yield: 3.6,  color: '#8B5CF6' }
    ]
};

const VX_PAGES = {
    dashboard: { title: 'Growth Command',        sub: 'Portfolio Intelligence · Q2 Executive Overview' },
    campaigns:  { title: 'Yield Analytics',       sub: 'Channel Performance & Attribution Matrix' },
    audience:   { title: 'Market Intelligence',   sub: 'Behavioral Cohorts & Segment Velocity' },
    roi:        { title: 'ROI Strategy',          sub: 'Autonomous Optimization & Yield Forecasting' },
    ai:         { title: 'Strategic Signals',     sub: 'Real-time Decision Streams' },
    reports:    { title: 'Intelligence Reports',  sub: 'Audited Performance Portfolios' }
};
