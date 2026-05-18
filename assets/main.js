(() => {
  const i18n = {
    en: {
      kicker: 'Survey · Working Manuscript',
      title: 'Physics-Informed World Models for Medical Imaging',
      subtitle: 'A Survey and Technology Roadmap — formalizing the integration of Physics-Informed Neural Networks and World Models for clinically trustworthy medical imaging AI.',
      chip_pages: '52 pages',
      chip_refs: '265 references',
      chip_figs: '5 figures',
      chip_status: 'Working draft',
      read_abstract: 'Read Abstract',
      view_contrib: 'View Contributions',
      browse_resources: 'Browse Resources',
      github_btn: 'GitHub',

      abstract_kicker: 'Survey',
      abstract_title: 'Abstract',
      abstract_p1: 'Medical imaging AI is converging from two previously separate streams. Physics-Informed Neural Networks (PINN) embed governing equations of medical imaging physics (Bloch, Radon, wave, reaction-diffusion, continuum mechanics) into deep networks; world models capture rich semantic, anatomical, and dynamical priors through large-scale generative or self-supervised pretraining. Each stream has reached a structural ceiling.',
      abstract_p2: 'Pure PINN lacks semantic understanding, individual variation adaptivity, and cross-domain generalization. Pure world models hallucinate physically implausible images, fail at causal intervention, demand massive training data, and offer no hard physical consistency guarantees. We argue these seven limitations are pairwise complementary — the scissor argument — and that Physics-Informed World Models (PIWM) are the natural integration that resolves them simultaneously.',
      abstract_p3: "The survey formalizes the PIWM paradigm, introduces the physical-constraint-type axis unifying radiology and pathology, develops a taxonomy of four integration mechanisms, maps PIWM coverage across five medical imaging tasks, constructs literature-grounded capability matrices, operationalizes the paradigm-shift claim as a falsifiable dual-threshold hypothesis, and presents a four-phase technology roadmap toward clinically trustworthy AI.",

      contrib_title: 'Seven Framework Contributions',
      contrib_sub: 'Each contribution is original to this survey and traceable to a specific chapter and table in the manuscript.',
      c_t1: 'Scissor argument',
      c_d1: 'Three PINN ceilings + four world-model ceilings are pairwise complementary; PIWM is the natural integration that resolves all seven simultaneously.',
      c_t2: 'Physical-Constraint-Type axis',
      c_d2: 'Wave-equation family (MRI / CT / US) vs. mechanical-equation family (tumor / tissue / cell) — a single axis unifying radiology and pathology.',
      c_t3: 'Four integration mechanisms',
      c_d3: 'Constraint injection, architecture embedding, latent-space regulation, simulation-in-the-loop — each with formal loss / architectural specification.',
      c_t4: '4 × 5 application matrix',
      c_d4: 'Mechanism × task map with method-annotated cells across reconstruction, segmentation, detection, generation, and report.',
      c_t5: 'Capability matrices',
      c_d5: 'Five-dimension evaluation (radiology + pathology) with literature-grounded PSNR, Dice, AUC, and cross-site benchmarks.',
      c_t6: 'Dual-threshold hypothesis',
      c_d6: 'Falsifiable joint condition: |𝒩[y]| ≤ ε₁ AND Perf_T ≥ ε₂ simultaneously.',
      c_t7: 'Four-phase technology roadmap',
      c_d7: 'PINN (2020–2024) → World models (2023–2026) → PIWM (2025–2028) → Clinically trustworthy AI (2027+), with phase-transition gating criteria and seven enabling technologies.',

      scissor_title: 'The Scissor Argument',
      scissor_intro: 'Where PINN cannot reason semantically, world models can. Where world models cannot guarantee physical consistency, PINN can. Their integration — PIWM — is the natural resolution.',
      fig1_cap: '<strong>Figure 1.</strong> The scissor argument and four emergent PIWM capabilities. PINN supplies the physical fidelity that world models lack; world models supply the semantic understanding that PINN lacks.',

      mech_title: 'Four Integration Mechanisms',
      mech_intro: 'Each mechanism enforces |𝒩[y]| ≤ ε₁ through a different architectural or training-time strategy. The mechanisms are not mutually exclusive — many systems combine them.',
      fig2_cap: '<strong>Figure 2.</strong> Architectural patterns and training objectives for the four mechanisms.',
      m_t1: '① Constraint injection',
      m_d1: 'Soft, training-time. Physical residual added to the world-model loss. <em>Strength:</em> flexibility. Examples: PhysDiff, DPS-MRI, score-based diffusion priors.',
      m_t2: '② Architecture embedding',
      m_d2: 'Hard, structural. Output passes through a physics-encoded operator. <em>Strength:</em> hard guarantee. Examples: Learned Primal-Dual, data-consistency layer, physics-driven diffusion.',
      m_t3: '③ Latent-space regulation',
      m_d3: 'Physical constraints applied in latent space. <em>Strength:</em> combines hard physics with semantic latent richness. Examples: ReSample, physics-informed latent diffusion.',
      m_t4: '④ Simulation-in-the-loop',
      m_d4: 'Physical simulator generates synthetic training data. <em>Strength:</em> 10–100× data efficiency. Examples: Field II, Bloch dictionary + DRONE, rare-class augmentation.',

      matrix_title: 'PIWM Application Matrix (4 × 5)',
      matrix_intro: 'Four mechanisms × five medical imaging tasks define a 20-cell map. Densely populated cells indicate mature literature; sparse cells indicate open research opportunities.',
      fig5_cap: '<strong>Figure 5.</strong> PIWM coverage matrix; cell saturation scales with literature density. Open cells are research opportunities.',

      bench_title: 'Quantitative Benchmarks',
      fig3_cap: '<strong>Figure 3.</strong> (a) MRI reconstruction PSNR vs. acceleration on fastMRI; (b) low-dose CT PSNR on AAPM Mayo; (c) segmentation Dice vs. training-set size.',
      find1: '<strong>MRI 8× acceleration:</strong> PIWM (diffusion prior + DC layer) reaches PSNR ≈ 35–37 dB — 1.5–3 dB above pure physics-encoded baselines.',
      find2: '<strong>Low-dose CT (25% dose):</strong> Learned Primal-Dual reaches PSNR ≈ 33 dB on AAPM Mayo — 1.5–2 dB above FBPConvNet.',
      find3: '<strong>Data efficiency:</strong> MR fingerprinting reaches clinical-grade T₁/T₂ at N ≈ 50 vs. N > 5,000 for non-physics baselines — a 100× multiplier.',
      find4: '<strong>OOD robustness:</strong> Foundation-model-augmented PIWM reduces cross-vendor MRI degradation to ≤ 1 dB.',
      find5: '<strong>Regulatory signature:</strong> No pure-world-model reconstruction system has received FDA clearance for primary diagnostic use; multiple PIWM-adjacent systems have.',

      road_title: 'Four-Phase Technology Roadmap',
      fig4_cap: '<strong>Figure 4.</strong> Four-phase roadmap toward clinically trustworthy medical imaging AI; phase boundaries overlap rather than succeed each other discretely.',
      p1_t: 'Phase 1 — PINN imaging AI',
      p1_d: 'Vendor-deployed physics-encoded MRI reconstruction with FDA 510(k) clearance.',
      p2_t: 'Phase 2 — World models',
      p2_d: 'Medical foundation models (UNI, CONCH, Virchow, Prov-GigaPath); Medical World Model (MeWM).',
      p3_t: 'Phase 3 — PIWM',
      p3_d: 'Integrated paradigm satisfying ε₁ ∧ ε₂ for selected radiology tasks; pathology PIWM emerging.',
      p4_t: 'Phase 4 — Clinically trustworthy AI',
      p4_d: 'FDA / EU MDR clearances with auditable physical constraints; routine clinical deployment.',

      dual_title: 'Dual-Threshold Paradigm-Shift Condition',
      dual_p1: 'A medical imaging AI system <em>S</em> satisfies the PIWM paradigm-shift condition if and only if:',
      dual_p2: '<strong>(i) Physical-fidelity threshold:</strong> |𝒩[y]| ≤ ε₁ — e.g., MRI k-space residual ≤ 0.01, CT Radon residual ≤ 0.02, biomechanical equilibrium residual ≤ 0.05.',
      dual_p3: '<strong>(ii) Semantic-accuracy threshold:</strong> Perf_T ≥ ε₂ — e.g., Dice ≥ 0.90, AUC ≥ 0.85, PSNR ≥ 35 dB.',
      dual_p4: 'The two thresholds are <strong>jointly</strong> required. Pure PINN clears (i) only; pure world models approach (ii) only; PIWM is the first framework with structural capacity to satisfy both simultaneously.',

      res_title: 'Curated Resource Collection',
      res_intro: 'The eight curated lists mirror the survey\'s organization — readers can locate primary sources for any cell of the application or capability matrices.',
      c1_t: '01 · Foundations',
      c1_d: 'World models, PINN, neural operators, diffusion, foundation models.',
      c2_t: '02 · PIWM Methods',
      c2_d: 'Methods organized by the four integration mechanisms.',
      c3_t: '03 · Datasets',
      c3_d: 'fastMRI, AAPM Mayo, TCGA, MSD, simulator suites.',
      c4_t: '04 · Benchmarks',
      c4_d: 'Metrics for ε₁ and ε₂; cross-site protocols.',
      c5_t: '05 · Open Source',
      c5_d: 'Field II, k-Wave, FEniCS, MONAI Generative.',
      c6_t: '06 · Chinese-First',
      c6_d: 'Chinese resources with bilingual anchors.',
      c7_t: '07 · Surveys',
      c7_d: 'Adjacent and competing surveys.',
      c8_t: '08 · Engineering',
      c8_d: 'Reproducibility, federated learning, regulatory templates.',

      search_placeholder: 'Search lists — e.g. diffusion, fastMRI, pathology, foundation'
    },
    zh: {
      kicker: '综述 · 工作稿',
      title: '面向医学影像的物理信息世界模型综述',
      subtitle: '综述与技术路线图——形式化整合物理信息神经网络（PINN）与世界模型，迈向临床可信的医学影像 AI。',
      chip_pages: '52 页',
      chip_refs: '265 条参考文献',
      chip_figs: '5 张图',
      chip_status: '工作稿',
      read_abstract: '阅读摘要',
      view_contrib: '查看贡献',
      browse_resources: '浏览资源',
      github_btn: 'GitHub',

      abstract_kicker: '综述',
      abstract_title: '摘要',
      abstract_p1: '医学影像 AI 正从两条原本分立的技术路线走向汇聚。物理信息神经网络（PINN）将医学成像物理的支配方程（Bloch、Radon、波动、反应-扩散、连续介质力学）嵌入深度网络；世界模型则通过大规模生成式或自监督预训练，捕获丰富的语义、解剖与动力学先验。两条路线各自抵达了结构性天花板。',
      abstract_p2: '纯 PINN 缺乏语义理解、个体变异适应性与跨域泛化能力；纯世界模型存在物理幻觉，无法进行因果干预，对数据需求巨大，且无法提供硬性物理一致性保证。我们论证这七项局限两两互补——即剪刀论证——而物理信息世界模型（PIWM）正是同时解决全部局限的自然整合。',
      abstract_p3: '本综述形式化 PIWM 范式，引入统一放射与病理的物理约束类型轴，构建四种集成机制的分类法，刻画 PIWM 在五大医学影像任务中的覆盖，建立有文献支撑的能力矩阵，将范式转移主张操作化为可证伪的双阈值假设，并提出迈向临床可信 AI 的四阶段技术路线图。',

      contrib_title: '七项原创框架贡献',
      contrib_sub: '每项贡献均为本综述原创，且可追溯到论文的具体章节与表格。',
      c_t1: '剪刀论证',
      c_d1: 'PINN 三项天花板 + 世界模型四项天花板两两互补；PIWM 是同时化解全部七项的自然整合。',
      c_t2: '物理约束类型轴',
      c_d2: '波动方程族（MRI / CT / US）与力学方程族（肿瘤 / 组织 / 细胞）——统一放射与病理的单一坐标轴。',
      c_t3: '四种集成机制',
      c_d3: '约束注入、架构嵌入、隐空间正则、仿真闭环——每种机制配以形式化损失函数 / 架构规范。',
      c_t4: '4 × 5 应用矩阵',
      c_d4: '机制 × 任务的覆盖图，单元格标注代表性方法，涵盖重建、分割、检测、生成与报告生成。',
      c_t5: '能力矩阵',
      c_d5: '五维评估（放射 + 病理），含 PSNR / Dice / AUC / 跨中心降幅等文献基准。',
      c_t6: '双阈值假设',
      c_d6: '可证伪联合条件：|𝒩[y]| ≤ ε₁ 且 Perf_T ≥ ε₂ 同时成立。',
      c_t7: '四阶段技术路线图',
      c_d7: 'PINN（2020–2024）→ 世界模型（2023–2026）→ PIWM（2025–2028）→ 临床可信 AI（2027+），含阶段过渡门控判据与七项使能技术。',

      scissor_title: '剪刀论证',
      scissor_intro: 'PINN 无法进行语义推理的地方，世界模型可以；世界模型无法保证物理一致性的地方，PINN 可以。两者的整合——PIWM——正是自然的解。',
      fig1_cap: '<strong>图 1.</strong> 剪刀论证与四种 PIWM 涌现能力：PINN 提供世界模型所缺的物理保真度，世界模型提供 PINN 所缺的语义理解。',

      mech_title: '四种集成机制',
      mech_intro: '每种机制通过不同的架构或训练时策略来满足 |𝒩[y]| ≤ ε₁。这些机制并不互斥——多数系统会组合使用。',
      fig2_cap: '<strong>图 2.</strong> 四种机制的架构样式与训练目标。',
      m_t1: '① 约束注入',
      m_d1: '软约束，训练时引入。在世界模型损失中加入物理残差项。<em>优点：</em>灵活性。代表：PhysDiff、DPS-MRI、score-based 扩散先验。',
      m_t2: '② 架构嵌入',
      m_d2: '硬约束，结构性。输出经过物理编码算子。<em>优点：</em>硬性保证。代表：Learned Primal-Dual、数据一致性层、物理驱动扩散。',
      m_t3: '③ 隐空间正则',
      m_d3: '在隐空间施加物理约束。<em>优点：</em>硬性物理与语义隐空间表征的结合。代表：ReSample、物理信息隐扩散。',
      m_t4: '④ 仿真闭环',
      m_d4: '物理仿真器生成合成训练数据。<em>优点：</em>10–100 倍数据效率。代表：Field II、Bloch 字典 + DRONE、稀有类增广。',

      matrix_title: 'PIWM 应用矩阵（4 × 5）',
      matrix_intro: '四种机制 × 五项医学影像任务构成 20 单元格的图谱。密集单元格表示成熟文献；稀疏单元格则是开放研究机会。',
      fig5_cap: '<strong>图 5.</strong> PIWM 覆盖矩阵；单元格饱和度与文献密度成正比，空白单元格是研究机会。',

      bench_title: '定量基准',
      fig3_cap: '<strong>图 3.</strong>（a）fastMRI 上 MRI 重建 PSNR vs. 加速倍数；（b）AAPM Mayo 上低剂量 CT PSNR；（c）分割 Dice vs. 训练样本量。',
      find1: '<strong>MRI 8× 加速：</strong>PIWM（扩散先验 + DC 层）达 PSNR ≈ 35–37 dB——高出纯物理编码基线 1.5–3 dB。',
      find2: '<strong>低剂量 CT（25% 剂量）：</strong>Learned Primal-Dual 在 AAPM Mayo 上达 PSNR ≈ 33 dB——高出 FBPConvNet 1.5–2 dB。',
      find3: '<strong>数据效率：</strong>MR 指纹在 N ≈ 50 时达临床级 T₁/T₂ 精度，而非物理基线需要 N > 5,000——百倍倍数。',
      find4: '<strong>跨域鲁棒性：</strong>基础模型增强 PIWM 将跨厂商 MRI 降幅压至 ≤ 1 dB。',
      find5: '<strong>监管信号：</strong>目前尚无纯世界模型的重建系统获 FDA 主诊断用途批准；多款 PIWM 相关系统已获批。',

      road_title: '四阶段技术路线图',
      fig4_cap: '<strong>图 4.</strong> 四阶段路线图——阶段之间在时间上有所重叠，而非依次衔接。',
      p1_t: '阶段 1 — PINN 影像 AI',
      p1_d: '厂商部署物理编码 MRI 重建并获 FDA 510(k) 批准。',
      p2_t: '阶段 2 — 世界模型',
      p2_d: '医学基础模型（UNI、CONCH、Virchow、Prov-GigaPath）；医学世界模型（MeWM）。',
      p3_t: '阶段 3 — PIWM',
      p3_d: '整合范式在选定放射任务上满足 ε₁ ∧ ε₂；病理 PIWM 开始兴起。',
      p4_t: '阶段 4 — 临床可信 AI',
      p4_d: 'FDA / EU MDR 批准带可审计物理约束的系统；常规临床部署。',

      dual_title: '双阈值范式转移条件',
      dual_p1: '医学影像 AI 系统 <em>S</em> 当且仅当下列两项同时成立时，才满足 PIWM 范式转移条件：',
      dual_p2: '<strong>（i）物理保真阈值：</strong>|𝒩[y]| ≤ ε₁——如 MRI k 空间残差 ≤ 0.01、CT Radon 残差 ≤ 0.02、生物力学平衡残差 ≤ 0.05。',
      dual_p3: '<strong>（ii）语义精度阈值：</strong>Perf_T ≥ ε₂——如 Dice ≥ 0.90、AUC ≥ 0.85、PSNR ≥ 35 dB。',
      dual_p4: '两项阈值必须<strong>同时</strong>满足。纯 PINN 仅满足 (i)；纯世界模型仅趋近 (ii)；PIWM 是结构上首个具备同时满足二者能力的框架。',

      res_title: '配套资源精选',
      res_intro: '八份精选列表镜像综述的组织——读者可对应应用矩阵或能力矩阵的任一单元格找到原始文献。',
      c1_t: '01 · 基础理论',
      c1_d: '世界模型、PINN、神经算子、扩散与基础模型。',
      c2_t: '02 · PIWM 方法',
      c2_d: '按四种集成机制组织的方法。',
      c3_t: '03 · 数据集',
      c3_d: 'fastMRI、AAPM Mayo、TCGA、MSD、仿真套件。',
      c4_t: '04 · 评测',
      c4_d: 'ε₁ 与 ε₂ 指标；跨中心评估协议。',
      c5_t: '05 · 开源工具',
      c5_d: 'Field II、k-Wave、FEniCS、MONAI Generative。',
      c6_t: '06 · 中文优先',
      c6_d: '中文资源与双语锚点。',
      c7_t: '07 · 综述',
      c7_d: '相邻与竞争综述。',
      c8_t: '08 · 工程化',
      c8_d: '复现、联邦学习、监管模板。',

      search_placeholder: '搜索列表——例如 diffusion、fastMRI、pathology、foundation'
    }
  };

  const setLang = (lang) => {
    const dict = i18n[lang];
    if (!dict) return;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const key = node.getAttribute('data-i18n');
      if (dict[key]) {
        if (dict[key].includes('<')) {
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
  };

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
