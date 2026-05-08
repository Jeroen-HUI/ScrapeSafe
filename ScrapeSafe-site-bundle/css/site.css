/* ScrapeSafe marketing site tokens (aligned with app dark theme) */

:root {
  --bg: #0a0a0a;
  --bg-elevated: #111111;
  --surface: #1a1a1a;
  --text: #e8e8e8;
  --text-dim: #888888;
  --text-muted: #a8a8a8;
  --neon: #00f3ff;
  --neon-dim: rgba(0, 243, 255, 0.35);
  --pro: #e879f9;
  --border: rgba(255, 255, 255, 0.08);
  --ring: rgba(0, 243, 255, 0.45);
  --radius: 12px;
  --radius-lg: 20px;
  --font: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue",
    Arial, sans-serif;
  --step-header: clamp(2rem, 4vw, 2.75rem);
  --noise: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

body {
  margin: 0;
  font-family: var(--font);
  font-size: 1.0625rem;
  line-height: 1.6;
  color: var(--text);
  background-color: var(--bg);
  background-image: linear-gradient(
      180deg,
      #0e1012 0%,
      var(--bg) 28%,
      #070708 100%
    ),
    var(--noise);
  background-blend-mode: normal, soft-light;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

code {
  font-family: ui-monospace, "Cascadia Code", "Segoe UI Mono", monospace;
  font-size: 0.88em;
  background: rgba(255, 255, 255, 0.06);
  padding: 0.12em 0.4em;
  border-radius: 4px;
}

a {
  color: var(--neon);
  text-decoration-thickness: 1px;
  text-underline-offset: 0.2em;
}

a:hover {
  color: #5ff4ff;
}

:focus-visible {
  outline: 2px solid var(--neon);
  outline-offset: 3px;
}

.skip-link {
  position: absolute;
  left: -9999px;
  top: 0.75rem;
  z-index: 1000;
  padding: 0.5rem 1rem;
  background: var(--surface);
  color: var(--text);
  border-radius: var(--radius);
}

.skip-link:focus {
  left: 0.75rem;
}

.container {
  width: 100%;
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1.25rem;
}

.container--narrow {
  max-width: 42rem;
}

/* Header */

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(10, 10, 10, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.875rem 0;
  flex-wrap: wrap;
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  font-weight: 600;
  font-size: 1.125rem;
  letter-spacing: -0.02em;
  color: var(--text);
  text-decoration: none;
}

.logo__mark {
  width: 40px;
  height: 40px;
  object-fit: contain;
  border-radius: 10px;
  flex-shrink: 0;
}

.logo__wordmark {
  line-height: 1;
}

.logo:hover {
  color: var(--neon);
}

.logo__accent {
  color: var(--neon);
}

.nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem 1.25rem;
}

.nav a {
  color: var(--text-dim);
  text-decoration: none;
  font-size: 0.9375rem;
}

.nav a:hover {
  color: var(--text);
}

.nav__cta {
  padding: 0.45rem 0.9rem;
  border: 1px solid var(--neon-dim);
  border-radius: 999px;
  color: var(--neon) !important;
}

.nav__cta:hover {
  background: rgba(0, 243, 255, 0.08);
}

/* Hero */

.hero {
  padding: clamp(2.5rem, 6vw, 4.5rem) 0 clamp(3rem, 8vw, 5rem);
  border-bottom: 1px solid var(--border);
  overflow: visible;
}

.hero__grid {
  display: grid;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: start;
  overflow: visible;
}

@media (min-width: 900px) {
  .hero__grid {
    grid-template-columns: 1fr 1fr;
  }
}

.eyebrow {
  display: inline-block;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-dim);
  margin-bottom: 1rem;
}

.hero h1 {
  margin: 0 0 1rem;
  font-size: clamp(2.125rem, 5vw, 3.25rem);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.03em;
}

.hero__lead {
  margin: 0 0 1.25rem;
  font-size: 1.125rem;
  color: var(--text-muted);
  max-width: 36ch;
}

.hero__bullets {
  margin: 0 0 1.75rem;
  padding: 0;
  list-style: none;
}

.hero__bullets li {
  position: relative;
  padding-left: 1.35rem;
  margin-bottom: 0.65rem;
  color: var(--text-muted);
  font-size: 0.98rem;
}

.hero__bullets li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.55em;
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 50%;
  background: var(--neon);
  box-shadow: 0 0 12px var(--neon-dim);
}

.store-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.btn-store {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 48px;
  padding: 0.65rem 1.25rem;
  border-radius: var(--radius);
  font-weight: 600;
  font-size: 0.9375rem;
  text-decoration: none;
  border: 1px solid var(--neon-dim);
  color: var(--text);
  background: rgba(0, 243, 255, 0.06);
  transition: background 0.2s ease, border-color 0.2s ease;
}

.btn-store:hover {
  background: rgba(0, 243, 255, 0.12);
  border-color: var(--neon);
  color: #fff;
}

.btn-store--placeholder {
  opacity: 0.85;
}

.btn-store[aria-disabled="true"] {
  cursor: not-allowed;
}

.btn-store--soon {
  border-style: dashed;
  opacity: 0.88;
  cursor: default;
  background: rgba(255, 255, 255, 0.03);
  color: var(--text-dim);
}

.btn-store--soon:hover {
  background: rgba(255, 255, 255, 0.03);
  border-color: var(--neon-dim);
  color: var(--text-dim);
}

.store-hint {
  margin: 0;
  font-size: 0.8125rem;
  color: var(--text-dim);
}

.store-hint--ios {
  margin-top: 0.35rem;
}

.hero__visual {
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: visible;
  padding: 0.5rem 0;
  /* Keeps grid row tall enough; carousel paints peek outside slide frame */
  min-width: 0;
}

/* Hero carousel (center slide + faded peek of prev/next) */

.carousel {
  width: 100%;
  max-width: 420px;
  margin: 0 auto clamp(1.5rem, 4vw, 2.75rem);
  position: relative;
  overflow: visible;
}

.carousel:focus-visible {
  outline: 2px solid var(--neon);
  outline-offset: 4px;
  border-radius: var(--radius-lg);
}

/* Absolute slides ignore parent height: pad bottom so caption + image
   cannot paint over the toolbar; min-height fits typical phone frame */
.carousel__viewport {
  position: relative;
  width: 100%;
  min-height: clamp(580px, 72vh, 760px);
  padding-bottom: clamp(4.5rem, 11vw, 6.5rem);
  overflow: visible;
  border: none;
  background: transparent;
  box-shadow: none;
  touch-action: pan-y;
  cursor: grab;
}

.carousel__viewport:active {
  cursor: grabbing;
}

.carousel__track {
  position: relative;
  width: 100%;
  min-height: inherit;
}

.carousel__slide {
  position: absolute;
  top: 0;
  left: 50%;
  width: 78%;
  max-width: 300px;
  margin: 0;
  display: flex;
  flex-direction: column;
  background: var(--bg-elevated);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  overflow: hidden;
  transition: transform 0.45s ease, opacity 0.45s ease, filter 0.45s ease,
    left 0.45s ease, box-shadow 0.45s ease;
  transform-origin: center top;
  box-shadow: 0 20px 56px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.05);
}

.carousel__slide.is-active {
  left: 50%;
  transform: translateX(-50%) scale(1);
  z-index: 3;
  opacity: 1;
  filter: none;
  box-shadow: 0 28px 80px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.06), 0 0 40px rgba(0, 243, 255, 0.06);
}

.carousel__slide.is-prev {
  left: 17%;
  transform: translateX(-50%) scale(0.85);
  z-index: 1;
  opacity: 0.38;
  filter: brightness(0.74) saturate(0.88);
}

.carousel__slide.is-next {
  left: 83%;
  transform: translateX(-50%) scale(0.85);
  z-index: 2;
  opacity: 0.38;
  filter: brightness(0.74) saturate(0.88);
}

.carousel__slide.is-hidden {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 0;
}

@media (prefers-reduced-motion: reduce) {
  .carousel__slide {
    transition: none;
  }
}

.carousel__slide:not(.is-active) .carousel__caption {
  opacity: 0;
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
  margin: 0;
  border-top-width: 0;
  overflow: hidden;
}

.carousel__slide .carousel__caption {
  padding: 0.65rem 1rem;
  font-size: 0.8125rem;
  color: var(--text-dim);
  border-top: 1px solid var(--border);
  text-align: center;
  margin: 0;
  transition: opacity 0.35s ease, max-height 0.35s ease, padding 0.35s ease;
}

.carousel__slide img {
  width: 100%;
  max-height: min(64vh, 640px);
  height: auto;
  object-fit: contain;
  object-position: top center;
  display: block;
}

@media (max-width: 480px) {
  .carousel__slide.is-prev {
    left: 12%;
  }
  .carousel__slide.is-next {
    left: 88%;
  }
}

.carousel__toolbar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.carousel__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: var(--bg-elevated);
  color: var(--text);
  font-size: 1.35rem;
  line-height: 1;
  cursor: pointer;
  transition: border-color 0.15s ease, background 0.15s ease;
}

.carousel__btn:hover {
  border-color: var(--neon-dim);
  background: var(--surface);
}

.carousel__dots {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
  justify-content: center;
}

.carousel__dot {
  width: 8px;
  height: 8px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: var(--surface);
  cursor: pointer;
  box-shadow: inset 0 0 0 1px var(--border);
}

.carousel__dot.is-active {
  background: var(--neon);
  box-shadow: 0 0 12px var(--neon-dim);
}

.carousel__status {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.carousel .carousel__toolbar-wrap {
  position: relative;
  z-index: 10;
  margin-top: 0;
  padding-top: 1rem;
  padding-bottom: 0.25rem;
  background: var(--bg);
  border-radius: var(--radius-lg);
}


.business-card {
  max-width: 52rem;
  margin: 0 auto;
  padding: 2rem;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(232, 121, 249, 0.35);
  background: linear-gradient(
    145deg,
    rgba(232, 121, 249, 0.07) 0%,
    var(--bg-elevated) 42%,
    var(--bg-elevated) 100%
  );
}

.business-card__tag {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--pro);
  margin-bottom: 0.6rem;
}

.business-card h3 {
  margin: 0 0 0.75rem;
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
}

.business-card .section__intro {
  margin-bottom: 1.25rem;
}

.business-list {
  margin: 0;
  padding-left: 1.2rem;
  color: var(--text-muted);
}

.business-list li {
  margin-bottom: 0.6rem;
}

.business-note {
  margin: 1.25rem 0 0;
  font-size: 0.9375rem;
  color: var(--text-dim);
}

/* Sections */

.section {
  padding: clamp(3rem, 7vw, 5rem) 0;
  border-bottom: 1px solid var(--border);
}

.section__title {
  margin: 0 0 0.75rem;
  font-size: var(--step-header);
  font-weight: 600;
  letter-spacing: -0.02em;
}

.section__intro {
  margin: 0 0 2.5rem;
  max-width: 48ch;
  color: var(--text-muted);
}

/* How it works */

.steps {
  display: grid;
  gap: 1.5rem;
}

@media (min-width: 720px) {
  .steps {
    grid-template-columns: repeat(3, 1fr);
  }
}

.step {
  padding: 1.5rem;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  position: relative;
}

.step__num {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--neon);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.step h3 {
  margin: 0 0 0.5rem;
  font-size: 1.125rem;
}

.step p {
  margin: 0;
  font-size: 0.9375rem;
  color: var(--text-muted);
}

/* Feature rows */

.feature-grid {
  display: grid;
  gap: 1.25rem;
}

@media (min-width: 640px) {
  .feature-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 960px) {
  .feature-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.feature-card {
  padding: 1.5rem;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.feature-card:hover {
  border-color: rgba(0, 243, 255, 0.2);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
}

.feature-card__tag {
  font-size: 0.75rem;
  color: var(--neon);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.feature-card h3 {
  margin: 0 0 0.5rem;
  font-size: 1.05rem;
}

.feature-card p {
  margin: 0;
  font-size: 0.9375rem;
  color: var(--text-muted);
}

/* Proof band */

.proof {
  background: linear-gradient(
    180deg,
    rgba(0, 243, 255, 0.04) 0%,
    transparent 100%
  );
}

.proof__box {
  padding: 2rem;
  border: 1px dashed var(--border);
  border-radius: var(--radius-lg);
  text-align: center;
  color: var(--text-dim);
  font-size: 0.9375rem;
}

/* Safety */

.safety-list {
  margin: 0;
  padding-left: 1.25rem;
  color: var(--text-muted);
}

.safety-list li {
  margin-bottom: 0.75rem;
}

.pro-pill {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--pro);
  border: 1px solid rgba(232, 121, 249, 0.45);
  background: rgba(232, 121, 249, 0.08);
}

/* FAQ */

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.faq-list details {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg-elevated);
  overflow: hidden;
}

.faq-list summary {
  padding: 1rem 1.25rem;
  cursor: pointer;
  font-weight: 600;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.faq-list summary::-webkit-details-marker {
  display: none;
}

.faq-list summary::after {
  content: "+";
  color: var(--neon);
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1;
}

.faq-list details[open] summary::after {
  content: "–";
}

.faq-list .faq__body {
  padding: 0 1.25rem 1.15rem;
  margin: 0;
  color: var(--text-muted);
  font-size: 0.9375rem;
}

/* Download band */

.download-band {
  text-align: center;
}

.download-band .store-row {
  justify-content: center;
}

/* Waitlist */

.waitlist-section {
  background: linear-gradient(
    180deg,
    rgba(0, 243, 255, 0.03) 0%,
    transparent 100%
  );
}

.waitlist-form {
  max-width: 26rem;
  margin: 0 auto;
}

.waitlist-form__row {
  margin-bottom: 1rem;
}

.waitlist-form__label {
  display: block;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--text-dim);
  margin-bottom: 0.35rem;
}

.waitlist-form__input {
  width: 100%;
  padding: 0.875rem 1rem;
  font-size: 1rem;
  font-family: inherit;
  color: var(--text);
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: border-color 0.15s ease, background 0.15s ease;
}

.waitlist-form__input::placeholder {
  color: #555;
}

.waitlist-form__input:hover {
  border-color: rgba(255, 255, 255, 0.12);
}

.waitlist-form__input:focus {
  outline: none;
  border-color: var(--neon-dim);
  background: var(--surface);
}

.waitlist-form__submit {
  width: 100%;
  margin-top: 0.25rem;
  padding: 0.875rem 1.25rem;
  font-size: 1rem;
  font-weight: 600;
  font-family: inherit;
  color: #0a0a0a;
  background: var(--neon);
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  transition: filter 0.15s ease, opacity 0.15s ease;
}

.waitlist-form__submit:hover:not(:disabled) {
  filter: brightness(1.05);
}

.waitlist-form__submit:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.form-message {
  margin-top: 1rem;
  padding: 0.75rem 1rem;
  border-radius: var(--radius);
  font-size: 0.9375rem;
}

.form-message--success {
  background: rgba(34, 197, 94, 0.12);
  color: #86efac;
  border: 1px solid rgba(34, 197, 94, 0.28);
}

.form-message--error {
  background: rgba(239, 68, 68, 0.1);
  color: #fca5a5;
  border: 1px solid rgba(239, 68, 68, 0.28);
}

.form-message--info {
  color: var(--text-muted);
  border: 1px solid var(--border);
  background: var(--bg-elevated);
}

/* Footer */

.site-footer {
  padding: 3rem 0 2rem;
}

.footer__links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.5rem;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.footer__links a {
  color: var(--text-dim);
  font-size: 0.9rem;
  text-decoration: none;
}

.footer__links a:hover {
  color: var(--text);
}

.footer__social {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
}

.footer__social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  color: var(--text-dim);
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  text-decoration: none;
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease,
    box-shadow 0.2s ease;
}

.footer__social-link:hover {
  color: var(--neon);
  border-color: var(--neon-dim);
  background: rgba(0, 243, 255, 0.06);
  box-shadow: 0 0 0 1px rgba(0, 243, 255, 0.12);
}

.footer__social-link:focus-visible {
  outline: 2px solid var(--neon);
  outline-offset: 3px;
}

.footer__copy {
  margin: 0;
  text-align: center;
  font-size: 0.85rem;
  color: #555;
}
