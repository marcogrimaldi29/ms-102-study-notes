/* =====================================================================
   MS-102 Study Notes — shared behaviour
   Injects header/footer, builds TOC, animates progress bars,
   handles theme toggle, mobile nav, Mermaid rendering.
   ===================================================================== */
(function () {
  "use strict";

  // ---- path helper: resolve asset/links relative to the site root ----
  // The home page lives at the site root; every other page lives in its own
  // folder (e.g. /domain-1-tenant/) for clean, extensionless URLs. ROOT is the
  // relative prefix back to the site root ("" at root, "../" inside a folder),
  // derived from this script's own src so it works at any depth.
  var ROOT = (function () {
    var s = document.currentScript;
    if (!s) {
      var all = document.getElementsByTagName("script");
      for (var i = 0; i < all.length; i++) {
        if (/assets\/js\/main\.js/.test(all[i].getAttribute("src") || "")) { s = all[i]; break; }
      }
    }
    var m = (s && (s.getAttribute("src") || "")).match(/^(.*?)assets\/js\/main\.js/);
    return m ? m[1] : "";
  })();

  // href: "" means the site root (resolved to "./" or "../" via ROOT below).
  var PAGES = [
    { id: "home",     href: "",                   label: "Home" },
    { id: "tenant",   href: "domain-1-tenant/",   label: "1 · Tenant" },
    { id: "identity", href: "domain-2-identity/", label: "2 · Identity" },
    { id: "defender", href: "domain-3-defender/", label: "3 · Defender XDR" },
    { id: "purview",  href: "domain-4-purview/",  label: "4 · Purview" },
    { id: "tips",     href: "exam-tips/",         label: "Exam Tips" }
  ];

  // Resolve a page href against ROOT, never yielding an empty href.
  function pageHref(href) { return (ROOT + href) || "./"; }

  // ---------- THEME ----------
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    try { localStorage.setItem("ms102-theme", t); } catch (e) {}
    var btn = document.getElementById("theme-btn");
    if (btn) btn.textContent = t === "dark" ? "☀️" : "🌙";
    // re-render mermaid for theme change
    if (window.__mermaidReady) renderMermaid(true);
  }
  function initTheme() {
    var saved;
    try { saved = localStorage.getItem("ms102-theme"); } catch (e) {}
    if (!saved) saved = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    applyTheme(saved);
  }

  // ---------- HEADER ----------
  function buildHeader() {
    var current = document.body.getAttribute("data-page") || "home";
    var nav = PAGES.map(function (p) {
      var active = p.id === current ? " active" : "";
      return '<a class="' + active.trim() + '" href="' + pageHref(p.href) + '">' + p.label + "</a>";
    }).join("");

    var header = document.createElement("header");
    header.className = "site-header";
    header.innerHTML =
      '<button class="icon-btn nav-toggle" id="nav-toggle" aria-label="Menu">☰</button>' +
      '<a class="brand" href="' + pageHref("") + '">' +
        '<img src="' + ROOT + 'assets/images/site-mark-no-bg.png" alt="logo">' +
        '<span><span class="brand-full">MS-102 </span>Study Notes</span>' +
      "</a>" +
      '<nav class="top-nav" id="top-nav">' + nav + "</nav>" +
      '<div class="header-tools">' +
        '<a class="ghub-link" href="https://github.com/marcogrimaldi29/ms-102-study-notes/" target="_blank" rel="noopener" title="Star on GitHub">★ <span>on</span> <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/></svg></a>' +
      "</div>";
    document.body.insertBefore(header, document.body.firstChild);

    var toggle = document.getElementById("nav-toggle");
    toggle.addEventListener("click", function () {
      document.getElementById("top-nav").classList.toggle("open");
    });
  }

  // ---------- FOOTER ----------
  function buildFooter() {
    var f = document.createElement("footer");
    f.className = "site-footer";
    f.innerHTML =
      '<div class="footer-inner">' +
        '<div class="footer-col footer-col-author">' +
          '<div class="author-card">' +
            '<img src="' + ROOT + 'assets/images/marcogrimaldi29.png" alt="Marco Grimaldi">' +
            '<div>' +
              '<span class="maintainer-badge">Maintainer</span>' +
              '<div class="ac-name">Marco Grimaldi</div>' +
              '<div class="ac-role">Cloud Solution Architect</div>' +
              '<div class="author-links">' +
                '<a href="https://github.com/marcogrimaldi29" target="_blank" rel="noopener"><svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/></svg> GitHub</a>' +
                '<a href="https://www.linkedin.com/in/marco-grimaldi29/" target="_blank" rel="noopener">in LinkedIn</a>' +
                '<a href="https://marcogrimaldi29.com/" target="_blank" rel="noopener"><img src="' + ROOT + 'assets/images/site-mark-no-bg.png" alt="" width="16" height="16" style="display:block"> Website</a>' +
              "</div>" +
            "</div>" +
          "</div>" +
          '<div class="star-cta">⭐ Found these notes helpful? <strong>Star the repo on GitHub</strong> to support the project and help others find it.</div>' +
          '<div class="contrib-note">🤝 <strong>Open to collaboration.</strong> Contributions, corrections and pull requests from the community are welcome — feel free to open an issue or PR on GitHub.</div>' +
        "</div>" +
        '<div class="footer-col">' +
          "<h5>Study Domains</h5>" +
          '<a href="' + ROOT + 'domain-1-tenant/">1 · Deploy &amp; manage tenant</a>' +
          '<a href="' + ROOT + 'domain-2-identity/">2 · Entra identity &amp; access</a>' +
          '<a href="' + ROOT + 'domain-3-defender/">3 · Defender XDR security</a>' +
          '<a href="' + ROOT + 'domain-4-purview/">4 · Purview compliance</a>' +
          '<a href="' + ROOT + 'exam-tips/">Exam tips &amp; caveats</a>' +
        "</div>" +
        '<div class="footer-col">' +
          "<h5>Official Resources</h5>" +
          '<a href="https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ms-102" target="_blank" rel="noopener">MS-102 Study Guide</a>' +
          '<a href="https://learn.microsoft.com/en-us/training/courses/ms-102t00" target="_blank" rel="noopener">Course MS-102T00-A</a>' +
          '<a href="https://learn.microsoft.com/en-us/microsoft-365/" target="_blank" rel="noopener">Microsoft 365 docs</a>' +
          '<a href="https://learn.microsoft.com/en-us/defender/" target="_blank" rel="noopener">Microsoft Defender docs</a>' +
          '<a href="https://learn.microsoft.com/en-us/entra/" target="_blank" rel="noopener">Microsoft Entra docs</a>' +
        "</div>" +
      "</div>" +
      '<div class="footer-bottom">' +
        "<span>© " + new Date().getFullYear() + " Marco Grimaldi · For study &amp; learning purposes only. Always verify against the official Microsoft documentation.</span>" +
        "<span>Built with HTML · CSS · JS · Mermaid · Cookieless analytics by Umami</span>" +
      "</div>";
    document.body.appendChild(f);
  }

  // ---------- TOC ----------
  function buildTOC() {
    var tocNav = document.getElementById("toc-list");
    var content = document.querySelector(".content");
    if (!tocNav || !content) return;
    var heads = content.querySelectorAll("h2, h3");
    var ul = document.createElement("ul");
    heads.forEach(function (h) {
      if (!h.id) h.id = h.textContent.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = "#" + h.id;
      a.textContent = h.textContent.replace(/^\s*\d+(\.\d+)*\s*/, "");
      a.className = h.tagName === "H3" ? "toc-h3" : "toc-h2";
      li.appendChild(a);
      ul.appendChild(li);
    });
    tocNav.appendChild(ul);

    // scrollspy
    var links = tocNav.querySelectorAll("a");
    var map = {};
    links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          links.forEach(function (l) { l.classList.remove("active"); });
          if (map[e.target.id]) map[e.target.id].classList.add("active");
        }
      });
    }, { rootMargin: "-80px 0px -70% 0px", threshold: 0 });
    heads.forEach(function (h) { obs.observe(h); });
  }

  // ---------- PROGRESS BARS ----------
  function animateProgress() {
    var bars = document.querySelectorAll(".progress > span[data-pct]");
    if (!bars.length) return;
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.style.width = e.target.getAttribute("data-pct") + "%";
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    bars.forEach(function (b) { obs.observe(b); });
  }

  // ---------- FLOATING BUTTONS (home + theme + back to top) ----------
  function backToTop() {
    var buttons = [];
    var isHome = (document.body.getAttribute("data-page") || "home") === "home";

    // Back to top (bottom-most)
    var btn = document.createElement("button");
    btn.className = "icon-btn float-btn back-top";
    btn.innerHTML = "↑";
    btn.setAttribute("aria-label", "Back to top");
    btn.setAttribute("title", "Back to top");
    btn.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
    buttons.push(btn);

    // Theme toggle (middle)
    var theme = document.createElement("button");
    theme.id = "theme-btn";
    theme.className = "icon-btn float-btn float-theme";
    theme.textContent = document.documentElement.getAttribute("data-theme") === "dark" ? "☀️" : "🌙";
    theme.setAttribute("aria-label", "Toggle theme");
    theme.setAttribute("title", "Toggle light/dark");
    theme.addEventListener("click", function () {
      var cur = document.documentElement.getAttribute("data-theme");
      applyTheme(cur === "dark" ? "light" : "dark");
    });
    buttons.push(theme);

    // Home (top-most) — omitted on the home page where it would be redundant
    if (!isHome) {
      var home = document.createElement("a");
      home.className = "icon-btn float-btn float-home";
      home.innerHTML = "🏠";
      home.href = pageHref("");
      home.setAttribute("aria-label", "Back to home");
      home.setAttribute("title", "Home");
      buttons.push(home);
    }

    buttons.forEach(function (b) { document.body.appendChild(b); });

    window.addEventListener("scroll", function () {
      var show = window.scrollY > 600;
      buttons.forEach(function (b) { b.classList.toggle("show", show); });
    }, { passive: true });
  }

  // ---------- MERMAID ----------
  function mermaidTheme() {
    return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "neutral";
  }
  function renderMermaid(reRender) {
    if (!window.mermaid) return;
    var nodes = document.querySelectorAll(".mermaid");
    if (!nodes.length) return;
    if (reRender) {
      nodes.forEach(function (n) {
        if (n.getAttribute("data-src")) { n.removeAttribute("data-processed"); n.innerHTML = n.getAttribute("data-src"); }
      });
    } else {
      nodes.forEach(function (n) { if (!n.getAttribute("data-src")) n.setAttribute("data-src", n.textContent.trim()); });
    }
    window.mermaid.initialize({
      startOnLoad: false, theme: mermaidTheme(), securityLevel: "loose",
      fontFamily: '"Segoe UI", system-ui, sans-serif',
      flowchart: { curve: "basis", useMaxWidth: true }
    });
    try { window.mermaid.run({ nodes: nodes }); } catch (e) { console.warn("mermaid", e); }
    window.__mermaidReady = true;
  }
  function loadMermaid() {
    if (!document.querySelector(".mermaid")) return;
    var s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js";
    s.onload = function () { renderMermaid(false); };
    document.head.appendChild(s);
  }

  // ---------- UMAMI (cookieless analytics) ----------
  // The website ID is injected at deploy time from the UMAMI_WEBSITE_ID secret
  // (see .github/workflows/deploy-pages.yml). The placeholder below is split when
  // compared so the build-time replace never touches the guard string.
  function loadUmami() {
    var id = "__UMAMI_WEBSITE_ID__";
    var unreplaced = "__UMAMI" + "_WEBSITE_ID__";
    if (!id || id === unreplaced) return; // not configured (local dev / secret unset)
    var s = document.createElement("script");
    s.defer = true;
    s.src = "https://cloud.umami.is/script.js";
    s.setAttribute("data-website-id", id);
    document.head.appendChild(s);
  }

  // ---------- INIT ----------
  initTheme();
  loadUmami();
  document.addEventListener("DOMContentLoaded", function () {
    buildHeader();
    buildFooter();
    buildTOC();
    animateProgress();
    backToTop();
    loadMermaid();
  });
})();
