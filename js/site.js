// ─────────────────────────────────────────────────────────
// Fetches /content/data.json (edited via /admin, the Decap CMS
// editor) and renders every section of the page from it.
// ─────────────────────────────────────────────────────────

function el(id) { return document.getElementById(id); }

function renderNav(d) {
  el('site-nav').innerHTML = `
    <nav>
      <div class="nav-logo">${d.logo_text}</div>
      <a href="${d.cta_link}" class="nav-cta">${d.cta_text}</a>
    </nav>`;
}

function renderHero(d) {
  const bullets = d.bullets.map(b => `<li><div class="check">✓</div>${b.bullet_text}</li>`).join('');
  el('hero').innerHTML = `
    <section class="hero" style="padding-top:120px; max-width:100%;">
      <div class="hero-inner">
        <div class="hero-left">
          <div class="tag">${d.tag_text}</div>
          <p class="hero-eyebrow">${d.eyebrow_text}</p>
          <h1 class="hero-h1">${d.headline_prefix} <span class="red">${d.headline_highlight}</span></h1>
          <p class="hero-sub">${d.subheadline}</p>
          <p class="hero-body">${d.body_html}</p>
          <ul class="hero-bullets">${bullets}</ul>
          <a href="${d.cta_link}" class="nav-cta" style="font-size:15px; padding:20px 40px; display:inline-block;">${d.cta_text}</a>
          <p style="font-size:12px; color:#444; margin-top:14px; font-style:italic;">${d.note_text}</p>
        </div>

        <div class="phone-wrap">
          <div class="phone">
            <div class="missed-badge">${d.phone_missed_count}</div>
            <div class="pscreen">
              <div class="status">
                <span class="s-time">${d.phone_time}</span>
                <div class="s-right">
                  <div class="sb" style="height:6px"></div>
                  <div class="sb" style="height:9px"></div>
                  <div class="sb" style="height:12px"></div>
                  <div class="sb" style="height:15px"></div>
                </div>
              </div>
              <div class="island"></div>
              <div class="lock-t">
                <div class="lock-hr">${d.phone_time}</div>
                <div class="lock-d">${d.phone_date}</div>
              </div>
              <div class="notif">
                <div class="n-top">
                  <div class="n-ico">📞</div>
                  <span class="n-app">Phone • Missed Call</span>
                  <span class="n-when">now</span>
                </div>
                <div class="n-title">${d.phone_notif1_title}</div>
                <div class="n-body">${d.phone_notif1_body}</div>
              </div>
              <div class="notif" style="opacity:0.82; margin-top:6px;">
                <div class="n-top">
                  <div class="n-ico">📞</div>
                  <span class="n-app">Phone • Missed Call</span>
                  <span class="n-when">2h ago</span>
                </div>
                <div class="n-title">${d.phone_notif2_title}</div>
                <div class="n-body">${d.phone_notif2_body}</div>
              </div>
              <div class="notif vm" style="opacity:0.6; margin-top:6px;">
                <div class="n-top">
                  <div class="n-ico g">🔊</div>
                  <span class="n-app">Voicemail</span>
                  <span class="n-when">3h ago</span>
                </div>
                <div class="n-title" style="color:#aaa;font-weight:500;font-size:12px;">${d.phone_notif3_quote}</div>
                <div class="n-body r">${d.phone_notif3_footer}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`;
}

function renderTrustBar(d) {
  const stats = d.stats.map(s => `<div class="trust-stat"><span class="num">${s.number}</span><span class="lbl">${s.label}</span></div>`).join('');
  el('trust-bar').innerHTML = `<div class="trust-bar">${stats}</div>`;
}

function renderPainSection(d) {
  const badItems = d.bad_items.map(i => `<div class="pain-item"><div class="pain-icon">${i.icon}</div><p><strong>${i.title}</strong>${i.body}</p></div>`).join('');
  const goodItems = d.good_items.map(i => `<div class="pain-item"><div class="pain-icon">${i.icon}</div><p><strong>${i.title}</strong>${i.body}</p></div>`).join('');
  el('pain-section').innerHTML = `
    <section class="full" id="why">
      <div class="inner">
        <div class="section-head fade-up">
          <div class="tag">${d.tag_text}</div>
          <div class="gold-bar"></div>
          <h2>${d.heading_html}</h2>
          <p>${d.description_text}</p>
        </div>
        <div class="pain-grid fade-up">
          <div class="pain-card bad">
            <h3 class="r">${d.bad_heading}</h3>
            ${badItems}
          </div>
          <div class="pain-card good">
            <h3 class="g">${d.good_heading}</h3>
            ${goodItems}
          </div>
        </div>
      </div>
    </section>`;
}

function renderHowItWorks(d) {
  const steps = d.steps.map(s => `
    <div class="step">
      <div class="step-num">${s.step_number}</div>
      <h3>${s.title}</h3>
      <p>${s.body}</p>
    </div>`).join('');
  el('how-it-works').innerHTML = `
    <section id="how">
      <div class="section-head fade-up">
        <div class="tag">${d.tag_text}</div>
        <div class="gold-bar"></div>
        <h2>${d.heading_html}</h2>
        <p>${d.description_text}</p>
      </div>
      <div class="steps fade-up">${steps}</div>
    </section>`;
}

function renderWhoItsFor(d) {
  const cards = d.cards.map(c => `
    <div class="who-card">
      <span class="who-icon">${c.icon}</span>
      <h3>${c.title}</h3>
      <div class="role">${c.role}</div>
      <p>${c.body}</p>
      <div class="who-stat">${c.stat_number}<span>${c.stat_label}</span></div>
    </div>`).join('');
  el('who-its-for').innerHTML = `
    <section class="full" id="who">
      <div class="inner">
        <div class="section-head fade-up">
          <div class="tag">${d.tag_text}</div>
          <div class="gold-bar"></div>
          <h2>${d.heading_html}</h2>
        </div>
        <div class="who-grid fade-up">${cards}</div>
      </div>
    </section>`;
}

function renderBookDemo(d) {
  const reassurance = d.reassurance_items.map(r => `
    <div style="text-align:center;">
      <div style="font-family:'Montserrat',sans-serif; font-size:22px; font-weight:900; color:var(--gold);">${r.value}</div>
      <div style="font-size:11px; color:var(--gray); text-transform:uppercase; letter-spacing:1px;">${r.label}</div>
    </div>`).join('');
  el('book-demo').innerHTML = `
    <section id="book">
      <div class="section-head fade-up">
        <div class="tag">${d.tag_text}</div>
        <div class="gold-bar"></div>
        <h2>${d.heading_html}</h2>
        <p>${d.description_text}</p>
      </div>

      <div class="fade-up" style="display:flex; justify-content:center; gap:40px; margin-bottom:40px; flex-wrap:wrap;">
        ${reassurance}
      </div>

      <div class="fade-up" style="max-width:900px; margin:0 auto; border:1px solid var(--border); border-radius:4px; overflow:hidden; background:#fff;">
        <div class="calendly-inline-widget"
          data-url="${d.calendly_url}"
          style="min-width:320px; height:700px;">
        </div>
      </div>

      <p style="text-align:center; font-size:12px; color:#444; font-style:italic; margin-top:20px;">
        ${d.footer_note_text}
      </p>
    </section>`;

  // Load the Calendly widget script once
  if (!document.querySelector('script[src*="calendly.com"]')) {
    const s = document.createElement('script');
    s.src = 'https://assets.calendly.com/assets/external/widget.js';
    s.async = true;
    document.body.appendChild(s);
  }
}

function renderTestimonials(d) {
  const items = d.items.map(item => `
    <div class="testi">
      <div class="stars">${'★'.repeat(item.rating)}</div>
      <blockquote>"${item.quote}"</blockquote>
      <div class="testi-author">
        <div class="testi-avatar">${item.initials}</div>
        <div>
          <div class="testi-name">${item.name}</div>
          <div class="testi-role">${item.role}</div>
        </div>
      </div>
    </div>`).join('');
  el('testimonials').innerHTML = `
    <section class="full" id="results">
      <div class="inner">
        <div class="section-head fade-up">
          <div class="tag">${d.tag_text}</div>
          <div class="gold-bar"></div>
          <h2>${d.heading_html}</h2>
        </div>
        <div class="testi-grid fade-up">${items}</div>
      </div>
    </section>`;
}

function renderFaq(d) {
  const items = d.items.map(item => `
    <div class="faq-item">
      <button class="faq-q" onclick="toggleFaq(this)">${item.question} <span class="arr">+</span></button>
      <div class="faq-a">${item.answer}</div>
    </div>`).join('');
  el('faq').innerHTML = `
    <section id="faq">
      <div class="section-head fade-up">
        <div class="tag">${d.tag_text}</div>
        <div class="gold-bar"></div>
        <h2>${d.heading_html}</h2>
      </div>
      <div class="faq-list fade-up">${items}</div>
    </section>`;
}

function renderFinalCta(d) {
  el('final-cta').innerHTML = `
    <div class="final-cta">
      <div class="tag">${d.tag_text}</div>
      <div class="gold-bar"></div>
      <h2>${d.heading_html}</h2>
      <p>${d.description_text}</p>
      <a href="${d.cta_link}" class="final-btn">${d.cta_text}</a>
      <br>
      <p class="final-note">${d.note_text}</p>
    </div>`;
}

function renderFooter(d) {
  el('footer').innerHTML = `
    <footer>
      <div class="footer-logo">${d.logo_text}</div>
      <p>${d.copyright_text}</p>
    </footer>`;
}

// FAQ accordion toggle — attached to window since it's called from
// inline onclick attributes inside dynamically-injected HTML.
window.toggleFaq = function (btn) {
  const answer = btn.nextElementSibling;
  const isOpen = answer.classList.contains('open');
  document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('open'));
  document.querySelectorAll('.faq-q').forEach(q => q.classList.remove('open'));
  if (!isOpen) {
    answer.classList.add('open');
    btn.classList.add('open');
  }
};

function initInteractions() {
  // Scroll fade-up animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up').forEach(elm => observer.observe(elm));

  // Nav shadow on scroll
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (nav) nav.style.boxShadow = window.scrollY > 20 ? '0 4px 40px rgba(0,0,0,0.6)' : 'none';
  });
}

async function loadContent() {
  const res = await fetch('/content/data.json', { cache: 'no-store' });
  const data = await res.json();

  renderNav(data.nav);
  renderHero(data.hero);
  renderTrustBar(data.trust_bar);
  renderPainSection(data.pain_section);
  renderHowItWorks(data.how_it_works);
  renderWhoItsFor(data.who_its_for);
  renderBookDemo(data.book_demo);
  renderTestimonials(data.testimonials);
  renderFaq(data.faq);
  renderFinalCta(data.final_cta);
  renderFooter(data.footer);

  initInteractions();
}

loadContent();
