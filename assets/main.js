(() => {
  const i18n = {
    en: {
      kicker: 'Awesome Collection',
      title: 'Physics-Informed World Models for Medical Imaging',
      subtitle: 'Research-and-engineering-focused curation for predictive and physics-informed world models.',
      chip1: '8 Curated Lists',
      chip2: 'Survey-Aligned',
      open_readme: 'Open README',
      browse_sections: 'Browse Sections',
      featured_btn: 'Papers by Topic',
      contribute_btn: 'Contribute',
      quick_nav: 'Quick Navigation',
      nav_foundations: 'Foundations',
      nav_methods: 'Methods',
      nav_datasets: 'Datasets',
      nav_benchmarks: 'Benchmarks',
      nav_toolkits: 'Toolkits',
      nav_chinese: 'Chinese-First',
      nav_surveys: 'Surveys',
      nav_repro: 'Reproducibility',
      core_sections: 'Core Sections',
      search_help: 'Use search to quickly locate a section.',
      c1_t: 'Foundations',
      c1_d: 'Milestone papers and core concepts.',
      c2_t: 'PIWM Methods',
      c2_d: 'Physics-informed and priors-aware approaches.',
      c3_t: 'Datasets',
      c3_d: 'Bench datasets and simulators.',
      c4_t: 'Evaluation',
      c4_d: 'Metrics, protocols, and benchmark tasks.',
      c5_t: 'Open Source',
      c5_d: 'Frameworks, codebases, and tooling.',
      c6_t: 'Chinese-First',
      c6_d: 'Chinese resources with bilingual anchors.',
      c7_t: 'Surveys',
      c7_d: 'Taxonomies, roadmaps, and open problems.',
      c8_t: 'Engineering',
      c8_d: 'Reproducibility and practical workflows.',
      timeline_title: 'Suggested Reading Timeline',
      t1: '<strong>Week 1:</strong> Foundations + one survey',
      t2: '<strong>Week 2:</strong> PIWM method families and assumptions',
      t3: '<strong>Week 3:</strong> Benchmark protocols and failure modes',
      t4: '<strong>Week 4:</strong> Reproduce one open-source baseline',
      featured_title: 'Papers by Topic (Paper + Code)',
      contrib_focus: 'Contribution Focus',
      f1: 'Primary-source links (papers, official docs, official repos)',
      f2: 'One-line neutral summary for each entry',
      f3: 'Strong practical signal for research or implementation',
      f4: 'Use entry tags like <code>[Paper]</code>, <code>[Code]</code>, <code>[Data]</code>, <code>[Survey]</code>',
      contrib_guide: 'Contribution Guide',
      index_title: 'Lists Index',
      index_desc: 'Use the searchable index page to scan all lists quickly.',
      open_index: 'Open Lists Index',
      search_placeholder: 'Search sections, e.g. diffusion / benchmark / pathology',
      resource_anchor: 'Featured Anchors'
    },
    zh: {
      kicker: '精选资源库',
      title: '面向医学影像的物理信息世界模型（PIWM）',
      subtitle: '面向研究与工程实践的 PIWM / World Models 资源整理。',
      chip1: '8 个核心列表',
      chip2: '与综述主线对齐',
      open_readme: '打开 README',
      browse_sections: '浏览目录',
      featured_btn: '按主题论文',
      contribute_btn: '参与贡献',
      quick_nav: '快速导航',
      nav_foundations: '基础与里程碑',
      nav_methods: '方法体系',
      nav_datasets: '数据与环境',
      nav_benchmarks: '评测基准',
      nav_toolkits: '工具与代码',
      nav_chinese: '中文优先资源',
      nav_surveys: '综述与路线图',
      nav_repro: '复现与工程',
      core_sections: '核心分区',
      search_help: '可用搜索快速定位分区。',
      c1_t: '基础理论',
      c1_d: '里程碑论文与核心概念。',
      c2_t: 'PIWM 方法',
      c2_d: '物理约束与先验融合方法。',
      c3_t: '数据集',
      c3_d: '基准数据与仿真环境。',
      c4_t: '评测',
      c4_d: '指标、协议与基准任务。',
      c5_t: '开源工具',
      c5_d: '框架、代码库与工程工具。',
      c6_t: '中文优先',
      c6_d: '中文资源及双语锚点。',
      c7_t: '综述路线图',
      c7_d: '方法图谱与未来问题。',
      c8_t: '工程复现',
      c8_d: '复现流程与实践规范。',
      timeline_title: '建议阅读路线',
      t1: '<strong>第 1 周：</strong>基础理论 + 1 篇综述',
      t2: '<strong>第 2 周：</strong>PIWM 方法家族与假设',
      t3: '<strong>第 3 周：</strong>评测协议与失败模式',
      t4: '<strong>第 4 周：</strong>复现一个开源基线',
      featured_title: '按主题论文（论文 + 代码）',
      contrib_focus: '贡献标准',
      f1: '优先主来源链接（论文/官方文档/官方仓库）',
      f2: '每条资源配一行中立摘要',
      f3: '优先高信号研究与工程资源',
      f4: '建议使用标签：<code>[Paper]</code>、<code>[Code]</code>、<code>[Data]</code>、<code>[Survey]</code>',
      contrib_guide: '贡献指南',
      index_title: '列表索引',
      index_desc: '使用可搜索的索引页快速浏览全部列表。',
      open_index: '打开索引页',
      search_placeholder: '搜索分区，例如 diffusion / benchmark / pathology',
      resource_anchor: '精选锚点'
    }
  };

  const setLang = (lang) => {
    const dict = i18n[lang];
    if (!dict) return;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const key = node.getAttribute('data-i18n');
      if (dict[key]) {
        if (dict[key].includes('<strong>') || dict[key].includes('<code>')) {
          node.innerHTML = dict[key];
        } else {
          node.textContent = dict[key];
        }
      }
    });
    const input = document.querySelector('#section-search');
    if (input) input.placeholder = dict.search_placeholder;
    localStorage.setItem('piwm_lang', lang);

    const enBtn = document.querySelector('#lang-en');
    const zhBtn = document.querySelector('#lang-zh');
    if (enBtn && zhBtn) {
      enBtn.classList.toggle('btn-primary', lang === 'en');
      zhBtn.classList.toggle('btn-primary', lang === 'zh');
    }

    const resourceCount = document.querySelector('#resource-count');
    if (resourceCount) {
      const featuredLinks = document.querySelectorAll('#featured a').length;
      resourceCount.textContent = `${featuredLinks}+ ${dict.resource_anchor}`;
    }
  };

  const year = new Date().getFullYear();
  const footer = document.querySelector('.footer p');
  if (footer) {
    footer.textContent = `Built for GitHub Pages. Licensed under MIT. Updated ${year}.`;
  }

  const searchInput = document.querySelector('#section-search');
  const cards = Array.from(document.querySelectorAll('#section-cards .card'));
  if (searchInput && cards.length > 0) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.trim().toLowerCase();
      cards.forEach((card) => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(query) ? '' : 'none';
      });
    });
  }

  const enBtn = document.querySelector('#lang-en');
  const zhBtn = document.querySelector('#lang-zh');
  if (enBtn) enBtn.addEventListener('click', () => setLang('en'));
  if (zhBtn) zhBtn.addEventListener('click', () => setLang('zh'));

  const hpTotal = document.querySelector('#hp-total');
  const hpCode = document.querySelector('#hp-code');
  const hpUpdated = document.querySelector('#hp-updated');
  const featuredListItems = document.querySelectorAll('#featured .paper-preview-list li');
  const featuredCodeLinks = document.querySelectorAll('#featured .badge-code');
  if (hpTotal) hpTotal.textContent = `Total Papers: ${featuredListItems.length}`;
  if (hpCode) hpCode.textContent = `With Code: ${featuredCodeLinks.length}`;
  if (hpUpdated) hpUpdated.textContent = `Updated: ${year}`;

  const saved = localStorage.getItem('piwm_lang') || 'en';
  setLang(saved);

  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length > 0 && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in'));
  }
})();
