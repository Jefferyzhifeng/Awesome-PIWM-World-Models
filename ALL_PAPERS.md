# All Papers Collection

> Complete paper index organized by the survey logic, now in an academic table format with `Modality` and `Mechanism` tags.

## 1) Paradigm Motivation and Foundations

| Paper | Year | Modality | Mechanism | Link |
|---|---:|---|---|---|
| A Survey on Deep Learning in Medical Image Analysis (Litjens et al.) | 2017 | General Medical Imaging | Survey Baseline | https://doi.org/10.1016/j.media.2017.07.005 |
| Deep Learning in Medical Image Analysis (Shen et al.) | 2017 | General Medical Imaging | Survey Baseline | https://doi.org/10.1146/annurev-bioeng-071516-044442 |
| Physics-Informed Neural Networks (Raissi et al.) | 2019 | General PDE / Imaging | PINN | https://doi.org/10.1016/j.jcp.2018.10.045 |
| Physics-Informed Machine Learning (Karniadakis et al.) | 2021 | General PDE / Imaging | Survey / PINN | https://doi.org/10.1038/s42254-021-00314-5 |
| Fourier Neural Operator (Li et al.) | 2021 | General PDE | Operator Learning | https://arxiv.org/abs/2010.08895 |
| DeepONet (Lu et al.) | 2021 | General PDE | Operator Learning | https://doi.org/10.1038/s42256-021-00302-5 |
| Recurrent World Models Facilitate Policy Evolution (Ha & Schmidhuber) | 2018 | General / RL | World Model | https://papers.nips.cc/paper_files/paper/2018/hash/2de5d16682c3c35007e4e92982f1a2ba-Abstract.html |
| A Path Towards Autonomous Machine Intelligence (LeCun) | 2022 | General | World Model / JEPA | https://openreview.net/forum?id=BZ5a1r-kVsf |
| DreamerV3 (Hafner et al.) | 2023 | General | World Model | https://arxiv.org/abs/2301.04104 |

## 2) Physical Priors by Modality (Phase 1)

| Paper | Year | Modality | Mechanism | Link |
|---|---:|---|---|---|
| Learning a Variational Network for Accelerated MRI (Hammernik et al.) | 2018 | MRI | Architecture Embedding | https://doi.org/10.1002/mrm.26977 |
| A Deep Cascade for Dynamic MR Reconstruction (Schlemper et al.) | 2018 | MRI | Architecture Embedding | https://doi.org/10.1109/TMI.2017.2760978 |
| MoDL: Model-Based Deep Learning for Inverse Problems (Aggarwal et al.) | 2019 | MRI / CT | Architecture Embedding | https://doi.org/10.1109/TMI.2018.2865356 |
| End-to-End Variational Networks for Accelerated MRI (Sriram et al.) | 2020 | MRI | Architecture Embedding | https://doi.org/10.1007/978-3-030-59713-9_7 |
| Bayesian MRI Reconstruction with Diffusion Models (Luo et al.) | 2023 | MRI | Architecture Embedding + Diffusion | https://doi.org/10.1002/mrm.29626 |
| Learned Primal-Dual Reconstruction (Adler & Oktem) | 2018 | CT | Architecture Embedding | https://doi.org/10.1109/TMI.2018.2799231 |
| Sparse MRI (Lustig et al.) | 2007 | MRI | Compressed Sensing Prior | https://doi.org/10.1002/mrm.21391 |
| SENSE MRI (Pruessmann et al.) | 1999 | MRI | Parallel Imaging Prior | https://doi.org/10.1002/(SICI)1522-2594(199911)42:5%3C952::AID-MRM16%3E3.0.CO;2-S |
| GRAPPA (Griswold et al.) | 2002 | MRI | Parallel Imaging Prior | https://doi.org/10.1002/mrm.10171 |
| Radon Transform (Radon) | 1917 | CT | Forward Operator Foundation | https://link.springer.com/article/10.1007/BF01449806 |
| Field II Ultrasound Simulation Program (Jensen) | 1996 | Ultrasound | Simulation-in-the-loop | https://field-ii.dk/ |
| k-Wave MATLAB Toolbox (Treeby & Cox) | 2010 | Ultrasound / Photoacoustics | Simulation-in-the-loop | https://doi.org/10.1117/1.3360308 |
| Selection, Calibration, and Validation of Tumor Growth Models (Lima et al.) | 2016 | Oncology Dynamics | Simulation-in-the-loop | https://doi.org/10.1142/S021820251650052X |

## 3) World Models for Medical Imaging (Phase 2)

| Paper | Year | Modality | Mechanism | Link |
|---|---:|---|---|---|
| Genie: Generative Interactive Environments (Bruce et al.) | 2024 | General Interactive | World Model / Generative | https://arxiv.org/abs/2402.15391 |
| Video Generation Models as World Simulators / Sora (OpenAI) | 2024 | General Video | World Model / Generative | https://openai.com/research/video-generation-models-as-world-simulators |
| Medical World Model (Yang et al.) | 2025 | Oncology / Medical Imaging | Medical World Model | https://arxiv.org/abs/2507.01484 |
| Denoising Diffusion Probabilistic Models (Ho et al.) | 2020 | General | Diffusion Foundation | https://arxiv.org/abs/2006.11239 |
| Score-Based Generative Modeling Through SDEs (Song et al.) | 2021 | General | Score-based Diffusion | https://arxiv.org/abs/2011.13456 |
| Solving Inverse Problems with Score-Based Models (Song et al.) | 2022 | MRI / CT | Diffusion + Data Consistency | https://openreview.net/forum?id=vaRCHVj0uGI |
| Segment Anything (Kirillov et al.) | 2023 | General Vision / Medical Transfer | Foundation Model | https://arxiv.org/abs/2304.02643 |
| BiomedCLIP (Zhang et al.) | 2023 | Biomedical Multimodal | Foundation Model (VLM) | https://arxiv.org/abs/2303.00915 |
| LLaVA-Med (Li et al.) | 2023 | Biomedical Multimodal | Foundation Model (VLM) | https://arxiv.org/abs/2306.00890 |
| nnU-Net (Isensee et al.) | 2021 | Medical Segmentation | Engineering Baseline | https://doi.org/10.1038/s41592-020-01008-z |
| General-Purpose Foundation Model for Computational Pathology (Chen et al.) | 2024 | Pathology | Foundation Model | https://doi.org/10.1038/s41591-024-02857-3 |
| Visual-Language Foundation Model for Computational Pathology (Lu et al.) | 2024 | Pathology | Foundation Model (VLM) | https://doi.org/10.1038/s41591-024-02856-4 |

## 4) PIWM Integration Mechanisms (Phase 3)

| Paper | Year | Modality | Mechanism | Link |
|---|---:|---|---|---|
| PhysDiff: Physics-Guided Diffusion for Human Motion (Yuan et al.) | 2024 | General Dynamics | Constraint Injection | https://arxiv.org/abs/2407.03480 |
| Generative Myocardial Motion Tracking with Biomechanics Priors (Qin et al.) | 2023 | Cardiac MRI | Constraint Injection | https://doi.org/10.1016/j.media.2022.102682 |
| BrLP: Latent Diffusion + Prior Knowledge (Puglisi et al.) | 2024 | Neuro MRI | Constraint Injection | https://doi.org/10.1007/978-3-031-72069-7_17 |
| Learning a Variational Network for Accelerated MRI (Hammernik et al.) | 2018 | MRI | Architecture Embedding | https://doi.org/10.1002/mrm.26977 |
| Learned Primal-Dual Reconstruction (Adler & Oktem) | 2018 | CT | Architecture Embedding | https://doi.org/10.1109/TMI.2018.2799231 |
| Deep Cascade for Dynamic MR Reconstruction (Schlemper et al.) | 2018 | MRI | Architecture Embedding | https://doi.org/10.1109/TMI.2017.2760978 |
| ReSample: Latent Diffusion via Hard Data Consistency (Song et al.) | 2024 | MRI / CT | Latent-space Regulation | https://openreview.net/forum?id=j8hdRqOUhN |
| Brain MRI Generation with Latent Diffusion (Pinaya et al.) | 2022 | Brain MRI | Latent-space Regulation | https://arxiv.org/abs/2211.06653 |
| Physics-Informed Latent Diffusion for MRI Synthesis (Lupke et al.) | 2024 | Brain MRI | Latent-space Regulation + Physics | https://arxiv.org/abs/2406.19263 |
| Physics-Informed 3D MRI Reconstruction Under Free-Breathing (Lv et al.) | 2024 | Abdominal MRI | Simulation-in-the-loop | https://arxiv.org/abs/2406.11185 |

## 5) Capability Gaps, Evaluation, and Roadmap (Phase 4)

| Paper | Year | Modality | Mechanism | Link |
|---|---:|---|---|---|
| PINN for Medical Image Analysis: A Systematic Review (Banerjee et al.) | 2025 | Medical Imaging | Survey / Capability Gap | https://doi.org/10.1145/3768158 |
| Physics-Informed ML for Computational Medical Imaging (Ahmadi et al.) | 2025 | Medical Imaging | Survey / Capability Gap | https://doi.org/10.1007/s10462-025-11303-w |
| Physics-Inspired Generative Models in Medical Imaging (Araujo et al.) | 2025 | Medical Imaging | Survey / Generative Physics | https://doi.org/10.1146/annurev-bioeng-102723-013922 |
| Physical Foundations for Trustworthy Medical Imaging AI (Cobo et al.) | 2025 | Medical Imaging | Survey / Trustworthiness | https://arxiv.org/abs/2505.02843 |
| Computational Histopathology Survey (Srinidhi et al.) | 2021 | Pathology | Survey / Capability Gap | https://doi.org/10.1016/j.media.2020.101813 |
| Deep-Learning Methods for Parallel MRI Reconstruction (Knoll et al.) | 2020 | MRI | Survey / Engineering Maturity | https://doi.org/10.1109/MSP.2019.2949470 |

## Related Curated Files

- Foundations list: [lists/01-foundations.md](lists/01-foundations.md)
- PIWM methods list: [lists/02-piwm-methods.md](lists/02-piwm-methods.md)
- Surveys and roadmaps list: [lists/07-surveys-and-roadmaps.md](lists/07-surveys-and-roadmaps.md)
- Datasets and environments: [lists/03-datasets-and-environments.md](lists/03-datasets-and-environments.md)
- Benchmarks and evaluation: [lists/04-benchmarks-and-evaluation.md](lists/04-benchmarks-and-evaluation.md)
- Open source and toolkits: [lists/05-open-source-and-toolkits.md](lists/05-open-source-and-toolkits.md)
- Reproducibility and engineering: [lists/08-reproducibility-and-engineering.md](lists/08-reproducibility-and-engineering.md)
