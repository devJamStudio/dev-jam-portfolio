/**
 * Smoke check over ./public after `gatsby build`.
 * Guards the locale mirroring in gatsby-node.ts and the Tailwind content glob —
 * both fail silently (missing pages, unstyled markup) rather than breaking the build.
 */
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import assert from "node:assert/strict";

const PUBLIC = fileURLToPath(new URL("../public/", import.meta.url));
const read = (p) => readFileSync(join(PUBLIC, p), "utf8");
const has = (p) => existsSync(join(PUBLIC, p));

const PAGES = ["", "about", "offer", "portfolio", "tech-stack", "contact"];

for (const page of PAGES) {
  assert.ok(has(join(page, "index.html")), `missing EN page /${page}`);
  assert.ok(has(join("pl", page, "index.html")), `missing PL page /pl/${page}`);
}

const en = read("about/index.html");
const pl = read("pl/about/index.html");

assert.ok(en.includes('lang="en"'), "EN page missing lang=en");
assert.ok(pl.includes('lang="pl"'), "PL page missing lang=pl");
assert.ok(
  en.includes('hrefLang="pl"') || en.includes('hreflang="pl"'),
  "EN page missing hreflang alternate to PL",
);
// The language switcher used to render "/pl/*/" when it read the path from
// the router instead of pageContext; assert the real cross-links both ways.
assert.ok(
  en.includes('href="/pl/about/"'),
  "EN page does not link to its PL counterpart",
);
assert.ok(
  pl.includes('href="/about/"'),
  "PL page does not link back to its EN counterpart",
);
assert.ok(
  en.includes('href="https://devjam.studio/pl/about/"'),
  "hreflang alternate should be an absolute URL with a trailing slash",
);
assert.ok(en.includes("Automation first"), "EN about copy missing");
assert.ok(pl.includes("Najpierw automatyzacja"), "PL about copy missing");

// The typewriter paints client-side; the static heading is what crawlers read.
assert.ok(
  read("index.html").includes("AI automation, DevOps pipelines"),
  "EN home heading missing",
);
assert.ok(
  read("pl/index.html").includes("Automatyzacja AI, pipeline"),
  "PL home heading missing",
);

const bundles = readdirSync(PUBLIC)
  .filter((f) => f.endsWith(".js"))
  .map((f) => read(f))
  .join("");
for (const slogan of ["AI Automation", "Agentic Workflows", "Automatyzacja AI"]) {
  assert.ok(bundles.includes(slogan), `slogan not shipped: ${slogan}`);
}

const offer = read("offer/index.html");
for (const name of ["Automation &amp; AI", "DevOps", "E-commerce"]) {
  assert.ok(offer.includes(name), `offer card missing: ${name}`);
}

const stack = read("tech-stack/index.html");
for (const tech of ["Docker", "Terraform", "Kubernetes", "Claude", "n8n"]) {
  assert.ok(stack.includes(tech), `stack entry missing: ${tech}`);
}

// Contentful-driven detail pages come from createPages, which onCreatePage
// never sees — they have to be localised there instead.
const details = readdirSync(join(PUBLIC, "portfolio"), {
  withFileTypes: true,
}).filter((e) => e.isDirectory());
assert.ok(details.length > 0, "no portfolio detail pages were built");
for (const slug of [
  "menswear-list",
  "i-love-montessori",
  "rentcar-cash",
  "carpol-de",
  "bluba",
]) {
  assert.ok(
    details.some((e) => e.name === slug),
    `portfolio project missing: ${slug}`,
  );
}
// A project with a screenshot must actually render one; a project without one
// (unlaunched site) must fall back to its name rather than an empty box.
assert.ok(
  /<img[^>]+alt="Menswear List"/.test(read("portfolio/menswear-list/index.html")),
  "Menswear List screenshot did not render",
);
assert.ok(
  read("portfolio/i-love-montessori/index.html").includes(
    "has not launched yet",
  ),
  "unlaunched project should say so instead of showing a dead link",
);
for (const { name } of details) {
  assert.ok(
    has(join("pl", "portfolio", name, "index.html")),
    `portfolio detail page missing in PL: ${name}`,
  );
  const ctx = JSON.parse(
    read(join("..", "public", "page-data", "portfolio", name, "page-data.json")),
  ).result.pageContext;
  assert.equal(ctx.locale, "en", `${name} detail page has no locale`);
  assert.equal(ctx.basePath, `/portfolio/${name}/`, `${name} basePath wrong`);
}

// Tailwind purges against its `content` glob; a class only used in the new
// pages proves new files are actually being scanned.
const css = readdirSync(PUBLIC)
  .filter((f) => f.endsWith(".css"))
  .map((f) => read(f))
  .join("");
assert.ok(css.includes("leading-relaxed"), "Tailwind is not scanning new files");

console.log(`ok — ${PAGES.length} pages x 2 locales, styles and copy present`);
