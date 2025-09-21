# ✅ SEO & Indexing Checklist for Next.js Project (`uiplaza.vercel.app`)

---

## 📌 1. Check If Your Site Is Indexed

Search in Google:
```
site:uiplaza.vercel.app
```

- ✅ If results appear: Site is indexed.
- ❌ If nothing appears: Site is NOT indexed.

---

## 🛠️ 2. Fix Common Indexing Issues

### a. ✅ robots.txt

Check: `https://uiplaza.vercel.app/robots.txt`

**Good example:**
```txt
User-agent: *
Allow: /
Sitemap: https://uiplaza.vercel.app/sitemap.xml
```

**Bad example (blocks all bots):**
```txt
User-agent: *
Disallow: /
```

---

### b. ✅ Meta Robots Tag

Make sure your pages don’t have `noindex`:
```html
<!-- BAD -->
<meta name="robots" content="noindex" />
```

**Use this instead:**
```html
<!-- GOOD -->
<meta name="robots" content="index, follow" />
```

---

### c. ✅ Sitemap.xml

Ensure you have a sitemap:
```
https://uiplaza.vercel.app/sitemap.xml
```

Use `next-sitemap`:
```bash
npm install next-sitemap
```

Create `next-sitemap.config.js`:
```js
module.exports = {
  siteUrl: 'https://uiplaza.vercel.app',
  generateRobotsTxt: true,
}
```

Then add script to `package.json`:
```json
"scripts": {
  "postbuild": "next-sitemap"
}
```

Build your site:
```bash
npm run build
```

---

## 🧭 3. Google Search Console

1. Go to: https://search.google.com/search-console
2. Add property: `uiplaza.vercel.app`
3. Verify domain (DNS or file method)
4. Submit `sitemap.xml`

---

## 🔍 4. SEO Optimization

### a. ✅ Basic Meta Tags (`<Head>` in `index.tsx`)

```tsx
<Head>
  <title>UI Plaza - Free UI Components & Templates</title>
  <meta name="description" content="Discover modern, free UI components and templates for your next project." />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://uiplaza.vercel.app/" />
</Head>
```

---

### b. ✅ Open Graph & Twitter Cards

```tsx
<Head>
  <meta property="og:title" content="UI Plaza - Free UI Components" />
  <meta property="og:description" content="Download free modern UI components and templates." />
  <meta property="og:url" content="https://uiplaza.vercel.app/" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</Head>
```

---

### c. ✅ Semantic HTML

Use proper structure:
```html
<main>
  <h1>Main Title</h1>
  <section>
    <h2>Section Title</h2>
  </section>
</main>
```

---

### d. ✅ Mobile-Friendly + Speed

Test here:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

---

## 📦 Final Checklist

| Task                            | Status  |
|---------------------------------|---------|
| Site is live                    | ✅ Done |
| No `noindex` tag                | ✅ Check |
| `robots.txt` allows crawling    | ✅ Check |
| Sitemap available               | ✅ Check |
| Added to Google Search Console |  ✅ Do it |
| SEO tags in `<Head>`            | ✅ Add them |
| Mobile + Speed Optimized        | ✅ Improve |
| Open Graph / Twitter meta tags  | ✅ Add |

---

## ✅ Done? Wait a few days...

After fixing these, Google may take **a few days to a few weeks** to crawl and index your pages again.

Use **Search Console > URL Inspection** to force reindex specific pages.

---
