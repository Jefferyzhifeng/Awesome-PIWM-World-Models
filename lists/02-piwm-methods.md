# PIWM Methods

> Integration mechanisms and representative method papers emphasized in the survey.

## Constraint Injection

- [PhysDiff: Physics-Guided Diffusion for Human Motion (Yuan et al., 2024)](https://arxiv.org/abs/2407.03480) - A practical template for adding physics residual losses to diffusion models.
- [Solving Inverse Problems in Medical Imaging with Score-Based Models (Song et al., ICLR 2022)](https://openreview.net/forum?id=vaRCHVj0uGI) - Physics/data consistency guidance in diffusion sampling.
- [Medical World Model: Tumor Evolution Simulation (Yang et al., ICCV 2025)](https://arxiv.org/abs/2507.01484) - Integrates disease dynamics and intervention simulation.
- [Generative Myocardial Motion Tracking with Biomechanics Priors (Qin et al., 2023)](https://doi.org/10.1016/j.media.2022.102682) - Latent generative tracking with physical priors.
- [BrLP: Latent Diffusion + Prior Knowledge for Disease Progression (Puglisi et al., MICCAI 2024)](https://doi.org/10.1007/978-3-031-72069-7_17) - Spatiotemporal progression modeling with structured priors.

## Architecture Embedding

- [Learning a Variational Network for Accelerated MRI (Hammernik et al., 2018)](https://doi.org/10.1002/mrm.26977) - Unrolled reconstruction with explicit physics consistency.
- [Learned Primal-Dual Reconstruction (Adler & Oktem, 2018)](https://doi.org/10.1109/TMI.2018.2799231) - Radon operator-aware CT reconstruction.
- [A Deep Cascade for Dynamic MR Reconstruction (Schlemper et al., 2018)](https://doi.org/10.1109/TMI.2017.2760978) - Data-consistency layers as hard physical constraints.
- [MoDL: Model-Based Deep Learning for Inverse Problems (Aggarwal et al., 2019)](https://doi.org/10.1109/TMI.2018.2865356) - Hybrid data-consistency and learned-prior architecture.
- [End-to-End Variational Networks for Accelerated MRI (Sriram et al., 2020)](https://doi.org/10.1007/978-3-030-59713-9_7) - Strong clinical MRI reconstruction pipeline.
- [Bayesian MRI Reconstruction with Diffusion Models (Luo et al., 2023)](https://doi.org/10.1002/mrm.29626) - Physics-aware probabilistic MRI reconstruction.

## Latent-Space Regulation

- [ReSample: Efficient Diffusion for Inverse Problems (Song et al., ICLR 2024)](https://openreview.net/forum?id=j8hdRqOUhN) - Latent-space consistency projection for inverse reconstruction.
- [A Latent Diffusion Model for Generating Brain MRI (Pinaya et al., 2022)](https://arxiv.org/abs/2211.06653) - Latent priors for medically meaningful synthesis.
- [Physics-Informed Latent Diffusion for MRI Synthesis (Lupke et al., 2024)](https://arxiv.org/abs/2406.19263) - Tissue-parameter-first generation with physical signal models.

## Simulation-in-the-Loop

- [Physics-Informed 3D MRI Reconstruction Under Free-Breathing (Lv et al., 2024)](https://arxiv.org/abs/2406.11185) - Simulation-enhanced data strategy for robust reconstruction.
- [Field II Ultrasound Simulation Program (Jensen, 1996)](https://field-ii.dk/) - Widely used simulator for ultrasound physics-aware model training.
- [k-Wave MATLAB Toolbox (Treeby & Cox, 2010)](https://doi.org/10.1117/1.3360308) - Photoacoustic/ultrasound wave simulation backbone.
- [Selection, Calibration, and Validation of Tumor Growth Models (Lima et al., 2016)](https://doi.org/10.1142/S021820251650052X) - Biomechanics-grounded simulation protocol for disease dynamics.

## Physical-Prior Modality Anchors

- [Sparse MRI (Lustig et al., 2007)](https://doi.org/10.1002/mrm.21391) - Compressed sensing prior for MRI reconstruction.
- [SENSE MRI (Pruessmann et al., 1999)](https://doi.org/10.1002/(SICI)1522-2594(199911)42:5%3C952::AID-MRM16%3E3.0.CO;2-S) - Parallel imaging model used in reconstruction operators.
- [GRAPPA (Griswold et al., 2002)](https://doi.org/10.1002/mrm.10171) - k-space parallel imaging baseline.
- [Radon Transform (Radon, 1917)](https://link.springer.com/article/10.1007/BF01449806) - Foundational transform for CT forward models.
