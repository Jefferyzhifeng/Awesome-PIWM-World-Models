/* List Viewer — renders Markdown lists as web pages with TOC + pager */
(() => {
  const LISTS = [
    { slug: '01-foundations', title: 'Foundations and Milestones', kicker: '01 · Foundations',
      sub: 'World models, PINN, neural operators, diffusion, and medical foundation models.' },
    { slug: '02-piwm-methods', title: 'PIWM Methods', kicker: '02 · Methods',
      sub: 'Representative PIWM systems organized by the four integration mechanisms.' },
    { slug: '03-datasets-and-environments', title: 'Datasets and Environments', kicker: '03 · Datasets',
      sub: 'Benchmark datasets (fastMRI, AAPM Mayo, TCGA, MSD) and physical simulators.' },
    { slug: '04-benchmarks-and-evaluation', title: 'Benchmarks and Evaluation', kicker: '04 · Evaluation',
      sub: 'Metrics for physical fidelity (ε₁) and semantic accuracy (ε₂); cross-site protocols.' },
    { slug: '05-open-source-and-toolkits', title: 'Open Source and Toolkits', kicker: '05 · Tooling',
      sub: 'Frameworks, codebases, and engineering tools for PIWM research.' },
    { slug: '06-chinese-first-resources', title: 'Chinese-First Resources', kicker: '06 · 中文',
      sub: 'Chinese-language resources with bilingual anchors.' },
    { slug: '07-surveys-and-roadmaps', title: 'Surveys and Roadmaps', kicker: '07 · Surveys',
      sub: 'Adjacent and competing surveys; technology roadmaps.' },
    { slug: '08-reproducibility-and-engineering', title: 'Reproducibility and Engineering', kicker: '08 · Engineering',
      sub: 'Reproducibility practices, federated learning, regulatory templates.' }
  ];

  const REPO_BLOB = 'https://github.com/Jefferyzhifeng/Awesome-PIWM-World-Models/blob/main/lists/';
  const REPO_EDIT = 'https://github.com/Jefferyzhifeng/Awesome-PIWM-World-Models/edit/main/lists/';

  const params = new URLSearchParams(window.location.search);
  let slug = params.get('list') || '01-foundations';

  const meta = LISTS.find((l) => l.slug === slug);
  if (!meta) {
    showError(`No list found for "${slug}".`);
    return;
  }

  document.title = `${meta.title} — PIWM Survey`;
  document.querySelector('#view-kicker').textContent = meta.kicker;
  document.querySelector('#view-title').textContent = meta.title;
  document.querySelector('#view-subtitle').textContent = meta.sub;
  const sourceLink = document.querySelector('#view-source');
  sourceLink.href = REPO_BLOB + meta.slug + '.md';
  const editLink = document.querySelector('#view-edit');
  editLink.href = REPO_EDIT + meta.slug + '.md';

  // Pager setup
  const idx = LISTS.findIndex((l) => l.slug === slug);
  const prevEl = document.querySelector('#pager-prev');
  const nextEl = document.querySelector('#pager-next');
  if (idx > 0) {
    const prev = LISTS[idx - 1];
    prevEl.href = `view.html?list=${prev.slug}`;
    prevEl.textContent = `← ${prev.title}`;
  } else {
    prevEl.classList.add('disabled');
    prevEl.textContent = '— Start of lists —';
  }
  if (idx < LISTS.length - 1) {
    const next = LISTS[idx + 1];
    nextEl.href = `view.html?list=${next.slug}`;
    nextEl.textContent = `${next.title} →`;
  } else {
    nextEl.classList.add('disabled');
    nextEl.textContent = '— End of lists —';
  }

  // Fetch markdown
  fetch(`${meta.slug}.md`)
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.text();
    })
    .then((md) => render(md))
    .catch((err) => showError(`Could not load <code>${meta.slug}.md</code>: ${err.message}`));

  function render(md) {
    // Strip the first H1 since we display the title separately in the hero
    md = md.replace(/^#\s+.+\n/, '');

    const rawHtml = marked.parse(md, {
      gfm: true,
      breaks: false,
      headerIds: true,
      mangle: false
    });
    const html = window.DOMPurify ? DOMPurify.sanitize(rawHtml, { ADD_ATTR: ['target', 'rel'] }) : rawHtml;

    const article = document.querySelector('#view-article');
    article.innerHTML = html;

    // Force external links to open in new tab
    article.querySelectorAll('a[href^="http"]').forEach((a) => {
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    });

    // Add IDs to headings (in case marked didn't) and build TOC
    const tocList = document.querySelector('#toc-list');
    tocList.innerHTML = '';
    const headings = article.querySelectorAll('h2, h3');
    let itemCount = 0;
    headings.forEach((h) => {
      if (!h.id) {
        h.id = h.textContent
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-');
      }
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = `#${h.id}`;
      a.textContent = h.textContent;
      if (h.tagName === 'H3') li.classList.add('toc-h3');
      li.appendChild(a);
      tocList.appendChild(li);
    });
    if (tocList.children.length === 0) {
      tocList.innerHTML = '<li class="toc-loading">— No subsections —</li>';
    }

    // Count entries (list items in article body)
    const items = article.querySelectorAll('ul > li, ol > li').length;
    document.querySelector('#view-count').textContent = `${headings.length} sections`;
    document.querySelector('#view-items').textContent = `${items} items`;

    // Scrollspy
    setupScrollspy(headings);

    // Smooth scroll for TOC clicks
    tocList.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', (e) => {
        const targetId = a.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          history.replaceState(null, '', `#${targetId}`);
        }
      });
    });

    // Anchor jump on initial load (preserve hash)
    if (window.location.hash) {
      const target = document.getElementById(window.location.hash.substring(1));
      if (target) setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  }

  function setupScrollspy(headings) {
    const links = document.querySelectorAll('#toc-list a');
    if (!('IntersectionObserver' in window) || headings.length === 0) return;
    const map = new Map();
    links.forEach((a) => map.set(a.getAttribute('href').substring(1), a));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        const link = map.get(id);
        if (!link) return;
        if (entry.isIntersecting) {
          links.forEach((l) => l.classList.remove('active'));
          link.classList.add('active');
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    headings.forEach((h) => io.observe(h));
  }

  function showError(msg) {
    const article = document.querySelector('#view-article');
    article.innerHTML = `<div class="view-error"><h2>Could not load list</h2><p>${msg}</p>` +
      `<p><a class="btn" href="index.html">← Back to All Lists</a></p></div>`;
    document.querySelector('#view-title').textContent = 'List not found';
    document.querySelector('#view-subtitle').textContent = '';
    document.querySelector('#view-count').textContent = '—';
    document.querySelector('#view-items').textContent = '—';
  }
})();
