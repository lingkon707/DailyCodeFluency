# Why Next.js Metadata Has a Twitter Section but No LinkedIn Section

Let’s break this down carefully.

---

## 1️⃣ Open Graph vs Twitter Card

**Open Graph (`openGraph`)**  
- Used by Facebook, LinkedIn, Slack, and basically any platform that supports OG tags.  
- Tags like `og:title`, `og:description`, `og:image` → this is what LinkedIn actually reads.

**Twitter Card (`twitter`)**  
- Twitter does not read Open Graph fully; it prefers its own meta tags (`twitter:title`, `twitter:description`, `twitter:image`).  
- That’s why Next.js has a separate `twitter` key in the metadata object.

---

## 2️⃣ Why there’s no LinkedIn key

- LinkedIn reads Open Graph tags, so it doesn’t need its own `linkedin` object.  
- Twitter does not reliably read OG, so Next.js provides a separate `twitter` section.

✅ **In short:**

| Platform   | Reads `openGraph`? | Needs `twitter`? |
|------------|------------------|----------------|
| LinkedIn   | ✅ Yes           | ❌ No          |
| Facebook   | ✅ Yes           | ❌ No          |
| Twitter    | ⚠ Partially      | ✅ Yes         |
| Slack/etc  | ✅ Yes           | ❌ No          |

So, the `twitter` section is for Twitter-specific meta tags, while LinkedIn and other OG platforms just use `openGraph`.

---

## 3️⃣ How This Relates to SEO

- `twitter` meta tags **do not affect Google SEO**, they only improve how your content looks on Twitter.  
- LinkedIn previews automatically use Open Graph, no special key needed.
