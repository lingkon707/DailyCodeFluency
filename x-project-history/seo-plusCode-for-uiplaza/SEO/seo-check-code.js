/www.seobility.net/
https://seorch.net/


// simple SEO Audit Script in JavaScript that you can run in 
// your browser's developer console (or embed in a tool) to check 
// basic SEO elements on any webpage — including meta tags, headings, canonical tags, and more.

(function seoAudit() {
  const report = [];

  // Title tag
  const title = document.title;
  report.push(`✅ Title: ${title || "❌ Not found"}`);

  // Meta Description
  const metaDesc = document.querySelector('meta[name="description"]');
  report.push(`✅ Meta Description: ${metaDesc ? metaDesc.content : "❌ Not found"}`);

  // Canonical tag
  const canonical = document.querySelector('link[rel="canonical"]');
  report.push(`✅ Canonical Tag: ${canonical ? canonical.href : "❌ Not found"}`);

  // H1 Tags
  const h1s = document.querySelectorAll('h1');
  report.push(`✅ H1 Tags Found: ${h1s.length}`);
  h1s.forEach((h1, i) => report.push(`   - H1[${i + 1}]: ${h1.textContent.trim()}`));

  // Meta Robots
  const robots = document.querySelector('meta[name="robots"]');
  report.push(`✅ Robots Meta Tag: ${robots ? robots.content : "❌ Not found"}`);

  // Image alt text
  const images = document.querySelectorAll('img');
  const missingAlts = Array.from(images).filter(img => !img.alt || img.alt.trim() === '');
  report.push(`✅ Images Found: ${images.length}`);
  report.push(`❌ Images Missing Alt: ${missingAlts.length}`);

  // Structured Data (Schema)
  const schemas = document.querySelectorAll('script[type="application/ld+json"]');
  report.push(`✅ Structured Data blocks (JSON-LD): ${schemas.length}`);

  // Language tag
  const htmlLang = document.documentElement.lang;
  report.push(`✅ HTML <html lang="">: ${htmlLang || "❌ Not set"}`);

  // Display Report
  console.group("🔍 Basic SEO Audit");
  report.forEach(line => console.log(line));
  console.groupEnd();
})();
