(function () {
  let activeArticle = null;
  let progressBar = null;

  function updateProgress() {
    if (!activeArticle || !progressBar) return;
    const rect = activeArticle.getBoundingClientRect();
    const start = window.scrollY + rect.top - 96;
    const distance = Math.max(activeArticle.offsetHeight - window.innerHeight + 140, 1);
    const progress = Math.min(Math.max((window.scrollY - start) / distance, 0), 1);
    progressBar.style.transform = `scaleX(${progress})`;
  }

  function ensureProgressBar() {
    progressBar = document.querySelector(".reading-progress");
    if (!progressBar) {
      progressBar = document.createElement("div");
      progressBar.className = "reading-progress";
      progressBar.setAttribute("aria-hidden", "true");
      document.body.appendChild(progressBar);
    }
  }

  function initPage() {
    const article = document.querySelector(".md-content article");
    const title = article?.querySelector("h1");
    const oldMeta = document.querySelector(".chapter-meta");
    if (oldMeta) oldMeta.remove();

    document.body.classList.remove("is-chapter");
    activeArticle = null;

    if (article && title && /^Chapter\s+\d+/i.test(title.textContent.trim())) {
      document.body.classList.add("is-chapter");
      activeArticle = article;
      ensureProgressBar();

      const chapterMatch = title.textContent.trim().match(/^Chapter\s+(\d+)/i);
      const text = article.textContent.replace(/\s+/g, " ").trim();
      const wordCount = text ? text.split(" ").length : 0;
      const readingMinutes = Math.max(1, Math.ceil(wordCount / 230));
      const meta = document.createElement("div");
      meta.className = "chapter-meta";
      meta.innerHTML = `<span>Chapter ${chapterMatch ? chapterMatch[1] : ""}</span><span>${wordCount.toLocaleString()} words</span><span>${readingMinutes} min read</span><span>Evidence through 31 Jul 2026</span>`;
      title.insertAdjacentElement("afterend", meta);
      updateProgress();
    } else if (progressBar) {
      progressBar.style.transform = "scaleX(0)";
    }
  }

  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);

  if (typeof document$ !== "undefined") {
    document$.subscribe(initPage);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPage);
  } else {
    initPage();
  }
})();
