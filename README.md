# MS-102 Study Notes — Microsoft 365 Administrator

[![Built with HTML/CSS/JS](https://img.shields.io/badge/Built%20with-HTML%20%C2%B7%20CSS%20%C2%B7%20JS-0078d4)](#)
[![Exam](https://img.shields.io/badge/Exam-MS--102-5c2d91)](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ms-102)
[![Live site](https://img.shields.io/badge/Read%20online-marcogrimaldi29.com-107c10)](https://marcogrimaldi29.com/ms-102-study-notes/)
[![Retires](https://img.shields.io/badge/Retires-Nov%2030%2C%202026-d83b01)](https://learn.microsoft.com/en-us/credentials/support/retired-certification-exams)

Comprehensive, exam-focused study notes for the **Microsoft MS-102: Microsoft 365 Administrator** certification — a free, modern study companion to the official Microsoft documentation.

### 👉 [Read the notes online](https://marcogrimaldi29.com/ms-102-study-notes/)

> [!WARNING]
> **MS-102 retires on November 30, 2026 at 11:59 PM Central Standard Time.** Microsoft is retiring both **Exam MS-102** and the **Microsoft 365 Certified: Administrator Expert** certification on that date. After it, you can't take the exam, earn the certification, or renew it. If you already hold it, it stays on your Microsoft Learn transcript until its current expiry date. ([study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ms-102) · [certification page](https://learn.microsoft.com/en-us/credentials/certifications/m365-administrator-expert/) · [exam retirement](https://learn.microsoft.com/en-us/credentials/support/retired-certification-exams))
>
> **Successor:** [Exam AB-650: Administering Microsoft 365 and AI Services](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ab-650) leads to [Microsoft 365 Certified: Microsoft 365 and AI Services Administrator Associate](https://learn.microsoft.com/en-us/credentials/certifications/ai-services-administrator-associate/), as announced in Microsoft's [June 2026 credentials roundup](https://techcommunity.microsoft.com/blog/skills-hub-blog/microsoft-credentials-roundup-june-2026/4528350). Note that it's an **Associate**-level certification, not an Expert one.

---

## ⚠️ Disclaimer

These notes are an **independent study aid created for learning and study purposes only**. They are **not affiliated with, authorised, or endorsed by Microsoft**.

Microsoft frequently renames, re-scopes, and re-licenses its products (e.g. *Azure AD → Microsoft Entra ID*, *Microsoft 365 Defender → Microsoft Defender XDR*, *Compliance center → Microsoft Purview*). Content can become outdated quickly.

**👉 Always verify every detail against the official Microsoft documentation before relying on it** — especially licensing, feature availability, and exam scope.

---

## 📚 What's inside

Aligned to the official **MS-102 "Skills Measured"** (version effective **April 28, 2026**) and the topics in the **MS-102T00** course.

| Section | Exam weight |
|---|---|
| [Deploy and manage a Microsoft 365 tenant](https://marcogrimaldi29.com/ms-102-study-notes/domain-1-tenant/) | 25–30% |
| [Implement and manage Microsoft Entra identity and access](https://marcogrimaldi29.com/ms-102-study-notes/domain-2-identity/) | 25–30% |
| [Manage security and threats using Microsoft Defender XDR](https://marcogrimaldi29.com/ms-102-study-notes/domain-3-defender/) | 30–35% |
| [Manage compliance using Microsoft Purview](https://marcogrimaldi29.com/ms-102-study-notes/domain-4-purview/) | 10–15% |
| [Exam tips & high-yield caveats](https://marcogrimaldi29.com/ms-102-study-notes/exam-tips/) | — |

### Studying for AB-650 instead?

AB-650 (20–25% tenants and workloads · 40–45% governance and security · 35–40% AI services) reuses much of the MS-102 administration core. Measured against the [AB-650 skills measured](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ab-650):

| These notes | Relevance to AB-650 |
|---|---|
| 1 · Tenant | **Mostly**: domains, org settings, Service health, Backup, licensing, users, groups, roles, PIM and admin units carry over. Adds branding, AI licensing, and mailbox, Teams and SharePoint management. |
| 2 · Identity | **Partly**: authentication methods, SSPR, Password Protection, Conditional Access, Identity Protection and MFA carry over. Directory sync isn't listed. |
| 3 · Defender XDR | **Narrower**: only Defender for Office 365 is listed. Defender for Endpoint, Defender for Cloud Apps, Secure Score and advanced hunting aren't listed. |
| 4 · Purview | **Reframed**: DLP, labels and retention as "identify requirements", plus DSPM for AI. |
| Not covered | **New**: Copilot, agents, Agent 365, Entra Agent ID and the Copilot Control System (35–40%). |

The [home page](https://marcogrimaldi29.com/ms-102-study-notes/#retirement) has the full comparison.

### Features

- 📊 **Progress bars** for each skill domain's exam weighting
- 🧜 **Mermaid diagrams** for architectures and decision flows
- 🎨 **Colour-coded comparison tables** and exam-caveat callouts
- 🧭 Per-page table of contents with scroll tracking
- 🌗 **Light / dark theme** (Microsoft/Azure-inspired styling, respects your OS preference)
- 📱 Fully responsive, with a print-friendly layout

### Privacy

The site uses **[Umami](https://umami.is/)** for **cookieless, privacy-respecting analytics** — no cookies, no personal data, and no cookie-consent banner.

---

## 🐞 Spotted a mistake?

Microsoft 365 changes fast and products are often renamed, so if something here is wrong or out of date, please [report an issue](https://github.com/marcogrimaldi29/ms-102-study-notes/issues).

---

## 💚 Support

If these notes helped you prepare for MS-102, there are a couple of ways to show it: ⭐ star this repo on GitHub so other candidates can find it, or 🤝 connect with me on LinkedIn.

<p>
  <a href="https://github.com/marcogrimaldi29/ms-102-study-notes"><img src="https://img.shields.io/badge/Star_on_GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="Star on GitHub" /></a>
  <a href="https://www.linkedin.com/in/marco-grimaldi29/"><img src="https://img.shields.io/badge/Connect_on_LinkedIn-0A66C2?style=for-the-badge&logo=data:image/svg%2Bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0yMC40NDcgMjAuNDUyaC0zLjU1NHYtNS41NjljMC0xLjMyOC0uMDI3LTMuMDM3LTEuODUyLTMuMDM3LTEuODUzIDAtMi4xMzYgMS40NDUtMi4xMzYgMi45Mzl2NS42NjdIOS4zNTFWOWgzLjQxNHYxLjU2MWguMDQ2Yy40NzctLjkgMS42MzctMS44NSAzLjM3LTEuODUgMy42MDEgMCA0LjI2NyAyLjM3IDQuMjY3IDUuNDU1djYuMjg2ek01LjMzNyA3LjQzM2EyLjA2MiAyLjA2MiAwIDAgMS0yLjA2My0yLjA2NSAyLjA2NCAyLjA2NCAwIDEgMSAyLjA2MyAyLjA2NXptMS43ODIgMTMuMDE5SDMuNTU1VjloMy41NjR2MTEuNDUyek0yMi4yMjUgMEgxLjc3MUMuNzkyIDAgMCAuNzc0IDAgMS43Mjl2MjAuNTQyQzAgMjMuMjI3Ljc5MiAyNCAxLjc3MSAyNGgyMC40NTFDMjMuMiAyNCAyNCAyMy4yMjcgMjQgMjIuMjcxVjEuNzI5QzI0IC43NzQgMjMuMiAwIDIyLjIyNSAweiIvPjwvc3ZnPg%3D%3D" alt="Connect on LinkedIn" /></a>
</p>

---

## 👤 Author

**Marco Grimaldi** — Cloud & Microsoft 365 practitioner.

- 🌐 Website / certification hub: **[marcogrimaldi29.com](https://marcogrimaldi29.com/)**
- ⌨️ GitHub: **[github.com/marcogrimaldi29](https://github.com/marcogrimaldi29)**
- 💼 LinkedIn: **[linkedin.com/in/marco-grimaldi29](https://www.linkedin.com/in/marco-grimaldi29/)**

Part of a wider collection of certification reviews and study notes (Microsoft, Google, PeopleCert) on my personal hub.

---

## 🔗 Official resources

- [MS-102 Study Guide (Skills Measured)](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ms-102)
- [Course MS-102T00: Microsoft 365 Administrator](https://learn.microsoft.com/en-us/training/courses/ms-102t00)
- [Free official practice assessment](https://learn.microsoft.com/en-us/credentials/certifications/exams/ms-102/practice/assessment)
- [Microsoft 365 documentation](https://learn.microsoft.com/en-us/microsoft-365/)
- [Exam and assessment lab retirement](https://learn.microsoft.com/en-us/credentials/support/retired-certification-exams) · [Credential retirement](https://learn.microsoft.com/en-us/credentials/support/credential-retirement)
- Successor: [AB-650 Study Guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ab-650) · [Microsoft 365 and AI Services Administrator Associate](https://learn.microsoft.com/en-us/credentials/certifications/ai-services-administrator-associate/) · [Course AB-650T00](https://learn.microsoft.com/en-us/training/courses/ab-650t00)

---

_For study & learning purposes only. Always verify against the official Microsoft documentation._
