#!/usr/bin/env node
// Playwright driver for the qa-automation-portfolio Vite/React SPA.
// Usage:
//   node driver.mjs smoke                    - full smoke flow, screenshots + console errors
//   node driver.mjs screenshot <path> <out>  - navigate to <path> and screenshot to <out>
//
// Requires the Vite dev server already running (see SKILL.md "Run (agent path)").

import { chromium } from 'playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const shotsDir = path.join(__dirname, 'screenshots');
const baseUrl = process.env.APP_URL || 'http://localhost:5173';

const [, , cmd = 'smoke', argA, argB] = process.argv;

function url(pathname) {
  return new URL(pathname, baseUrl).toString();
}

async function withBrowser(fn) {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
  const errors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', (err) => errors.push(String(err)));
  try {
    await fn(page);
  } finally {
    await browser.close();
  }
  return errors;
}

function reportErrors(errors) {
  if (errors.length) {
    console.log('Console errors:');
    for (const e of errors) console.log(' -', e);
    process.exitCode = 1;
  } else {
    console.log('No console errors.');
  }
}

if (cmd === 'screenshot') {
  const pathname = argA || '/';
  const out = argB || path.join(shotsDir, 'screenshot.png');
  const errors = await withBrowser(async (page) => {
    await page.goto(url(pathname), { waitUntil: 'networkidle' });
    await page.waitForSelector('h1');
    await page.screenshot({ path: out, fullPage: true });
    console.log(`Screenshot saved to ${out}`);
  });
  reportErrors(errors);
} else if (cmd === 'smoke') {
  const errors = await withBrowser(async (page) => {
    // 1. Home / hero renders.
    await page.goto(url('/'), { waitUntil: 'networkidle' });
    await page.waitForSelector('h1');
    await page.screenshot({ path: path.join(shotsDir, '01-home.png'), fullPage: false });
    console.log('01-home.png - hero rendered');

    // 2. Case Studies section, first flip card renders and flips on click.
    await page.locator('#case-studies').scrollIntoViewIfNeeded();
    const firstCard = page.locator('.case-study-flip').first();
    await firstCard.waitFor();
    await page.screenshot({ path: path.join(shotsDir, '02-case-studies.png'), fullPage: false });
    console.log('02-case-studies.png - case studies grid, front side');

    await firstCard.click();
    await page.waitForSelector('.case-study-flip.is-flipped');
    await page.screenshot({ path: path.join(shotsDir, '03-case-study-flipped.png'), fullPage: false });
    console.log('03-case-study-flipped.png - first card flipped to resume-detail side');

    // 3. Language switch (client-side state, no navigation).
    await page.getByRole('button', { name: /switch language to french/i }).click();
    await page.waitForSelector('h2#case-studies-title:has-text("Expérience projet")');
    await page.screenshot({ path: path.join(shotsDir, '04-lang-fr.png'), fullPage: false });
    console.log('04-lang-fr.png - UI switched to French');
  });
  reportErrors(errors);
} else {
  console.error(`Unknown command: ${cmd}`);
  console.error('Usage: node driver.mjs [smoke|screenshot <path> <out>]');
  process.exitCode = 2;
}
