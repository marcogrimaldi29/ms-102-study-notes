# MS-102 Study Notes — Microsoft 365 Administrator

[![Built with HTML/CSS/JS](https://img.shields.io/badge/Built%20with-HTML%20%C2%B7%20CSS%20%C2%B7%20JS-0078d4)](#)
[![Exam](https://img.shields.io/badge/Exam-MS--102-5c2d91)](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ms-102)
[![Hosted on GitHub Pages](https://img.shields.io/badge/Hosted-GitHub%20Pages-181717)](#)

Comprehensive, exam-focused study notes for the **Microsoft MS-102: Microsoft 365 Administrator** certification, built as a lightweight static website (HTML + CSS + vanilla JS). Designed to be a **companion to the official Microsoft documentation** — not a replacement for it.

> ⭐ **If these notes help you, please [star the repo on GitHub](https://github.com/marcogrimaldi29)** — it supports the project and helps other learners find it.

---

## ⚠️ Disclaimer

These notes are an **independent study aid created for learning and study purposes only**. They are **not affiliated with, authorised, or endorsed by Microsoft**.

Microsoft frequently renames, re-scopes, and re-licenses its products (e.g. *Azure AD → Microsoft Entra ID*, *Microsoft 365 Defender → Microsoft Defender XDR*, *Compliance center → Microsoft Purview*). Content can become outdated quickly.

**👉 Always verify every detail against the official Microsoft documentation before relying on it**, especially for licensing, feature availability, and exam scope.

---

## 📚 Repository overview

The site is aligned to the official **MS-102 "Skills Measured"** (version effective **April 28, 2026**) and covers the topics in the **MS-102T00** instructor-led course.

| Page | Domain | Exam weight |
|------|--------|-------------|
| `index.html` | Home, exam facts & skills-at-a-glance | — |
| `domain-1-tenant.html` | Deploy and manage a Microsoft 365 tenant | 25–30% |
| `domain-2-identity.html` | Implement and manage Microsoft Entra identity and access | 25–30% |
| `domain-3-defender.html` | Manage security and threats using Microsoft Defender XDR | 30–35% |
| `domain-4-purview.html` | Manage compliance using Microsoft Purview | 10–15% |
| `exam-tips.html` | High-yield caveats, licensing map & question strategy | — |

### Features

- 📊 **Animated progress bars** for each skill domain's exam weighting
- 🧜 **Mermaid diagrams** for architecture and decision flows (loaded via CDN)
- 🎨 **Colour-coded comparison tables**, exam-caveat callouts, and a per-page table of contents
- 🌗 **Light / dark theme** toggle (Microsoft/Azure-inspired Fluent styling, respects OS preference)
- 📱 Fully responsive, with a print-friendly stylesheet

### Project structure

```
.
├── index.html                  # Landing / overview
├── domain-1-tenant.html
├── domain-2-identity.html
├── domain-3-defender.html
├── domain-4-purview.html
├── exam-tips.html
├── assets/
│   ├── css/style.css           # Design system
│   ├── js/main.js              # Shared header/footer, TOC, theme, Mermaid, progress bars
│   └── images/
│       ├── site-mark-no-bg.png # Site logo
│       └── marcogrimaldi29.png # Author photo
└── README.md
```

The shared header and footer are injected by `assets/js/main.js`, so navigation stays consistent across pages — there is no build step.

---

## 🚀 Publishing with GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder, then **Save**.
5. Your site goes live at `https://<your-username>.github.io/<repo-name>/`.

No framework or build pipeline is required — it is plain static files.

---

## 🔎 SEO & discoverability

The site is configured to be found on the web and rank well:

- **Canonical URLs** on every page point to the production address `https://marcogrimaldi29.com/ms-102-study-notes/…`, so the custom-domain copy is treated as primary and the GitHub Pages (`*.github.io`) copy won't compete as duplicate content.
- **Open Graph + Twitter Card** meta tags give rich link previews on LinkedIn, X/Twitter, Slack, etc.
- **JSON-LD structured data** — `WebSite`, `Person`, and `Course` schema on the home page; `TechArticle` + `BreadcrumbList` on each study page — eligible for Google rich results.
- **`sitemap.xml`** lists all pages; **`robots.txt`** allows all crawlers and references the sitemap.
- Descriptive `<title>`, `meta description`, semantic headings, and `theme-color` on every page.

### ⚠️ Two manual steps so search engines actually find it

Because the site lives under a **sub-path** (`/ms-102-study-notes/`) of `marcogrimaldi29.com`:

1. **`robots.txt` is only honoured at the domain root.** Crawlers read `https://marcogrimaldi29.com/robots.txt`, **not** the one in this sub-folder. Add (or merge) this line into your main site's root `robots.txt`:
   ```
   Sitemap: https://marcogrimaldi29.com/ms-102-study-notes/sitemap.xml
   ```
2. **Submit the sitemap in [Google Search Console](https://search.google.com/search-console)** (and optionally [Bing Webmaster Tools](https://www.bing.com/webmasters)) for `marcogrimaldi29.com`, then submit `https://marcogrimaldi29.com/ms-102-study-notes/sitemap.xml`. This is the fastest way to get indexed.

> If you later serve the site from its **own** domain/subdomain instead of a sub-path, add a `CNAME` file and move `robots.txt`/`sitemap.xml` to that root. (No `CNAME` is included now, on purpose, so it doesn't hijack `marcogrimaldi29.com`.)

### Be found on GitHub

- Give the repo a clear **description** and add **topics** like `ms-102`, `microsoft-365`, `study-notes`, `certification`, `microsoft-entra`, `microsoft-defender`, `microsoft-purview`, `exam-prep`.
- This `README.md` is the repo's landing page — keep it keyword-rich (it already is).

## 📈 Analytics (cookieless, privacy-friendly)

This repo uses **[Umami](https://umami.is/)** — a **cookieless, privacy-respecting, GDPR-friendly** analytics platform that does **not** track personal data or require a cookie-consent banner.

Analytics are loaded site-wide from [`assets/js/main.js`](assets/js/main.js) (included on every page), which injects the Umami script using a placeholder website ID:

```js
var id = "__UMAMI_WEBSITE_ID__"; // replaced at deploy time
```

The `__UMAMI_WEBSITE_ID__` placeholder is replaced **at deploy time** from a repository secret, so the ID is never committed to source. (If the placeholder is left unreplaced — local dev or no secret — the loader is inert and no analytics are sent.) Setup:

1. **Add the secret** — repo **Settings → Secrets and variables → Actions → New repository secret**, name `UMAMI_WEBSITE_ID`, value = your Umami website ID.
2. **Switch Pages to Actions** — repo **Settings → Pages → Build and deployment → Source = GitHub Actions** (the included [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) injects the ID and deploys on every push to `main`).

> **Note:** a Umami website ID is a public, client-side identifier — it is visible in the deployed page's source to anyone who looks. This setup keeps it out of the **repository** (and git history), but it cannot be hidden from site visitors. The ID is not sensitive, so a repository **variable** (`vars.UMAMI_WEBSITE_ID`) works just as well as a secret if you prefer. Locally (or with branch-based Pages), the placeholder stays unreplaced and no analytics are sent.

---

## 👤 Author & contact

**Marco Grimaldi** — Cloud & Microsoft 365 practitioner.

- 🌐 Website / certification hub: **[marcogrimaldi29.com](https://marcogrimaldi29.com/)**
- ⌨️ GitHub: **[github.com/marcogrimaldi29](https://github.com/marcogrimaldi29)**
- 💼 LinkedIn: **[linkedin.com/in/marcogrimaldi29](https://www.linkedin.com/in/marcogrimaldi29/)**

These notes are part of a wider collection of certification reviews and study notes (Microsoft, Google, PeopleCert) on my personal hub. Feedback, corrections, and issues are welcome — please open an issue or PR.

---

## 🔗 Official resources

- [MS-102 Study Guide (Skills Measured)](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ms-102)
- [Course MS-102T00: Microsoft 365 Administrator](https://learn.microsoft.com/en-gb/training/courses/ms-102t00)
- [Free official practice assessment](https://learn.microsoft.com/en-us/credentials/certifications/exams/ms-102/practice/assessment)
- [Microsoft 365 documentation](https://learn.microsoft.com/en-us/microsoft-365/)

---

_For study & learning purposes only. Verify against official Microsoft documentation._
