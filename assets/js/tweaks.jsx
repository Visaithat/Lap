/* global React, ReactDOM */
const { useState, useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "goldIntensity": 100,
  "heroLayout": "split",
  "illustrationStyle": "shield",
  "headerSurface": "blur"
}/*EDITMODE-END*/;

// ── tiny tweak-state hook ─────────────────────────────────
function useTweaks(defaults) {
  const [state, setState] = useState(defaults);
  const setTweak = (k, v) => {
    const next = { ...state, [k]: v };
    setState(next);
    try {
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [k]: v } }, '*');
    } catch (_) {}
  };
  return [state, setTweak];
}

// ── apply tweaks to the DOM ───────────────────────────────
function applyTweaks(t) {
  const root = document.documentElement;

  // Yellow intensity — adjust accent saturation via mix to white.
  const gi = Math.max(40, Math.min(140, t.goldIntensity));
  root.style.setProperty('--lap-accent-500', mixHex('#FFC20F', '#FFFFFF', (140 - gi) / 100));
  root.style.setProperty('--lap-accent-600', mixHex('#E0A800', '#FFFFFF', (140 - gi) / 100));

  // Hero layout
  const text = document.querySelector('[data-hero-text]');
  const art  = document.querySelector('[data-hero-art]');
  if (text && art) {
    text.classList.remove('lg:col-span-7', 'lg:col-span-6', 'lg:col-span-12', 'text-center', 'mx-auto');
    art.classList.remove('lg:col-span-5', 'lg:col-span-6', 'hidden');
    if (t.heroLayout === 'split') {
      text.classList.add('lg:col-span-7');
      art.classList.add('lg:col-span-5');
    } else if (t.heroLayout === 'balanced') {
      text.classList.add('lg:col-span-6');
      art.classList.add('lg:col-span-6');
    } else if (t.heroLayout === 'centered') {
      text.classList.add('lg:col-span-12', 'text-center', 'mx-auto');
      art.classList.add('hidden');
    }
  }

  // Illustration swap
  const artSvg = document.querySelector('[data-hero-art] svg.relative');
  if (artSvg) {
    artSvg.innerHTML = ILLUSTRATIONS[t.illustrationStyle] || ILLUSTRATIONS.shield;
  }

  // Header surface
  const header = document.querySelector('.lap-header');
  if (header) {
    header.style.background = t.headerSurface === 'solid' ? '#FFFFFF' : 'rgba(255,255,255,0.85)';
    header.style.backdropFilter = t.headerSurface === 'solid' ? 'none' : 'saturate(160%) blur(14px)';
  }
}

function mixHex(a, b, t) {
  t = Math.max(0, Math.min(1, t));
  const ah = a.replace('#',''), bh = b.replace('#','');
  const ar = parseInt(ah.slice(0,2),16), ag = parseInt(ah.slice(2,4),16), ab = parseInt(ah.slice(4,6),16);
  const br = parseInt(bh.slice(0,2),16), bg = parseInt(bh.slice(2,4),16), bb = parseInt(bh.slice(4,6),16);
  const r = Math.round(ar + (br-ar)*t), g = Math.round(ag + (bg-ag)*t), bv = Math.round(ab + (bb-ab)*t);
  return '#' + [r,g,bv].map(x => x.toString(16).padStart(2,'0')).join('');
}

const ILLUSTRATIONS = {
  shield: `
    <path d="M160 30 Q220 32 270 60 Q278 150 256 230 Q230 320 160 360 Q90 320 64 230 Q42 150 50 60 Q100 32 160 30 Z" fill="#0290DA"/>
    <path d="M160 56 Q210 60 252 84 Q258 154 240 224 Q218 300 160 332 Q102 300 80 224 Q62 154 68 84 Q110 60 160 56 Z" fill="#36A9E1" opacity="0.25"/>
    <path d="M90 200 Q120 170 150 200 T210 200 T260 190" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
    <path d="M80 230 Q115 200 150 230 T215 230 T265 220" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.6"/>
    <circle cx="160" cy="140" r="34" fill="#FFC20F"/>
    <circle cx="160" cy="140" r="34" fill="none" stroke="#FFFFFF" stroke-width="2"/>
    <path d="M148 140 L156 148 L172 132" fill="none" stroke="#014C75" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`,
  umbrella: `
    <path d="M160 80 Q70 80 50 200 Q160 160 270 200 Q250 80 160 80 Z" fill="#0290DA"/>
    <path d="M160 80 Q120 80 100 200 Q130 180 160 200 Z" fill="#36A9E1" opacity="0.55"/>
    <path d="M160 80 Q200 80 220 200 Q190 180 160 200 Z" fill="#36A9E1" opacity="0.4"/>
    <line x1="160" y1="200" x2="160" y2="320" stroke="#014C75" stroke-width="6" stroke-linecap="round"/>
    <path d="M160 320 Q145 335 160 350 Q175 335 160 320" fill="none" stroke="#FFC20F" stroke-width="5" stroke-linecap="round"/>
    <circle cx="160" cy="80" r="8" fill="#FFC20F"/>`,
  circles: `
    <circle cx="120" cy="140" r="80" fill="#0290DA"/>
    <circle cx="200" cy="140" r="80" fill="#FFC20F" opacity="0.85"/>
    <circle cx="160" cy="220" r="60" fill="#36A9E1" opacity="0.7"/>
    <circle cx="160" cy="180" r="20" fill="#FFFFFF"/>`,
  naga: `
    <path d="M30 320 Q80 280 120 320 T210 320 T290 300" fill="none" stroke="#0290DA" stroke-width="14" stroke-linecap="round"/>
    <path d="M30 280 Q80 240 120 280 T210 280 T290 260" fill="none" stroke="#36A9E1" stroke-width="10" stroke-linecap="round" opacity="0.7"/>
    <path d="M160 60 Q210 70 230 130 Q240 200 200 230 Q160 250 120 230 Q80 200 90 130 Q110 70 160 60 Z" fill="#0290DA"/>
    <circle cx="140" cy="140" r="6" fill="#FFFFFF"/>
    <circle cx="180" cy="140" r="6" fill="#FFFFFF"/>
    <circle cx="160" cy="180" r="22" fill="#FFC20F"/>`
};

// ── components ────────────────────────────────────────────
function TweaksApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [active, setActive] = useState(false);
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    function onMsg(e) {
      const d = e.data || {};
      if (d.type === '__activate_edit_mode') setActive(true);
      else if (d.type === '__deactivate_edit_mode') setActive(false);
    }
    window.addEventListener('message', onMsg);
    setAvailable(true);
    try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch(_) {}
    return () => window.removeEventListener('message', onMsg);
  }, []);

  useEffect(() => { applyTweaks(t); }, [t]);

  if (!active) return null;

  const close = () => {
    setActive(false);
    try { window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*'); } catch(_) {}
  };

  return (
    <div style={S.panel}>
      <div style={S.header}>
        <b>Tweaks</b>
        <button onClick={close} style={S.x} aria-label="Close">×</button>
      </div>
      <div style={S.body}>
        <Section>Hero layout</Section>
        <Radio label="Layout" value={t.heroLayout}
          options={[{v:'split',l:'Split 60/40'},{v:'balanced',l:'Balanced'},{v:'centered',l:'Centered'}]}
          onChange={(v) => setTweak('heroLayout', v)} />

        <Section>Illustration</Section>
        <Radio label="Style" value={t.illustrationStyle}
          options={[{v:'shield',l:'Shield'},{v:'umbrella',l:'Umbrella'},{v:'naga',l:'Naga'},{v:'circles',l:'Circles'}]}
          onChange={(v) => setTweak('illustrationStyle', v)} />

        <Section>Brand</Section>
        <div>
          <label style={S.lbl}>Gold intensity <span style={S.val}>{t.goldIntensity}%</span></label>
          <input type="range" min="40" max="140" step="5" value={t.goldIntensity}
            onChange={(e) => setTweak('goldIntensity', parseInt(e.target.value, 10))}
            style={S.range} />
        </div>

        <Section>Header</Section>
        <Radio label="Surface" value={t.headerSurface}
          options={[{v:'blur',l:'Blur'},{v:'solid',l:'Solid'}]}
          onChange={(v) => setTweak('headerSurface', v)} />
      </div>
    </div>
  );
}

function Section({ children }) { return <div style={S.section}>{children}</div>; }
function Radio({ label, value, options, onChange }) {
  return (
    <div>
      <label style={S.lbl}>{label}</label>
      <div style={S.seg}>
        {options.map(o => (
          <button key={o.v} onClick={() => onChange(o.v)}
            style={{...S.segBtn, ...(value === o.v ? S.segBtnActive : {})}}>{o.l}</button>
        ))}
      </div>
    </div>
  );
}

const S = {
  panel: { position:'fixed', right:16, bottom:16, zIndex:2147483646, width:260,
    background:'rgba(250,249,247,0.95)', color:'#0F172A', borderRadius:14,
    border:'1px solid rgba(2,144,218,0.2)', boxShadow:'0 12px 40px rgba(2,144,218,0.18)',
    backdropFilter:'blur(20px) saturate(150%)', font:'12px/1.4 Inter, system-ui, sans-serif',
    overflow:'hidden' },
  header: { display:'flex', alignItems:'center', justifyContent:'space-between',
    padding:'10px 8px 10px 14px', borderBottom:'1px solid rgba(2,144,218,0.1)' },
  x: { border:0, background:'transparent', width:24, height:24, borderRadius:6,
    color:'#475569', cursor:'pointer', fontSize:18, lineHeight:1 },
  body: { padding:'12px 14px', display:'flex', flexDirection:'column', gap:12,
    maxHeight:'calc(100vh - 80px)', overflowY:'auto' },
  section: { fontSize:10, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.08em',
    color:'#475569', marginTop:4 },
  lbl: { display:'flex', justifyContent:'space-between', alignItems:'center',
    fontSize:11, fontWeight:600, color:'#1E293B', marginBottom:6 },
  val: { color:'#0290DA', fontVariantNumeric:'tabular-nums' },
  seg: { display:'grid', gridTemplateColumns:'1fr 1fr', gap:4, background:'#FFF',
    border:'1px solid #E2E8F0', borderRadius:10, padding:3 },
  segBtn: { border:0, padding:'7px 8px', fontSize:11, fontWeight:600, borderRadius:7,
    background:'transparent', color:'#475569', cursor:'pointer', fontFamily:'inherit' },
  segBtnActive: { background:'#0290DA', color:'#FFF' },
  range: { width:'100%', accentColor:'#0290DA' }
};

const root = document.getElementById('tweaks-root');
if (root) ReactDOM.createRoot(root).render(<TweaksApp />);
