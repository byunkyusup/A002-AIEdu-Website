import { chromium } from 'playwright';

const URL = process.env.URL || 'http://localhost:4185/';
const breakpoints = [
  { w: 375, h: 812, name: 'mobile-375' },
  { w: 768, h: 1024, name: 'tablet-768' },
  { w: 1440, h: 900, name: 'desktop-1440' },
];

const browser = await chromium.launch();
const errors = [];
for (const bp of breakpoints) {
  const page = await browser.newPage({ viewport: { width: bp.w, height: bp.h } });
  page.on('console', (m) => { if (m.type() === 'error') errors.push(`[${bp.name}] ${m.text()}`); });
  page.on('pageerror', (e) => errors.push(`[${bp.name}] PAGEERROR ${e.message}`));
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  await page.screenshot({ path: `scripts/shots/${bp.name}-full.png`, fullPage: true });
  await page.screenshot({ path: `scripts/shots/${bp.name}-fold.png` });
  const h1 = await page.locator('h1').first().textContent();
  console.log(`${bp.name}: h1="${h1?.trim().slice(0, 30)}"`);
  await page.close();
}
await browser.close();
console.log(errors.length ? 'CONSOLE ERRORS:\n' + errors.join('\n') : 'No console errors.');
