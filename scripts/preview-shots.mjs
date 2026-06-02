import { chromium } from 'playwright';

const URL = process.env.URL || 'http://localhost:4185/';
const browser = await chromium.launch();

// 1) 데스크톱 히어로 (README 배너용) — 2x DPR로 선명하게
const desk = await browser.newPage({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 2 });
await desk.goto(URL, { waitUntil: 'networkidle' });
await desk.waitForTimeout(1200); // 히어로 밑줄/플로팅 애니메이션 안착
await desk.screenshot({ path: 'docs/preview-hero.png' });

// 2) 데스크톱 전체 페이지
await desk.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await desk.waitForTimeout(800); // 스크롤 리빌 트리거
await desk.evaluate(() => window.scrollTo(0, 0));
await desk.waitForTimeout(300);
await desk.screenshot({ path: 'docs/preview-full.png', fullPage: true });
await desk.close();

// 3) 모바일
const mob = await browser.newPage({ viewport: { width: 390, height: 760 }, deviceScaleFactor: 2 });
await mob.goto(URL, { waitUntil: 'networkidle' });
await mob.waitForTimeout(1200);
await mob.screenshot({ path: 'docs/preview-mobile.png' });
await mob.close();

await browser.close();
console.log('saved docs/preview-hero.png, docs/preview-full.png, docs/preview-mobile.png');
