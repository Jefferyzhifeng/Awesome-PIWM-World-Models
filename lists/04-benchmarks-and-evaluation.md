# Benchmarks and Evaluation

> Metrics and benchmark dimensions used in the survey for PIWM assessment.

## Reconstruction and Generation Metrics

- [PSNR](https://en.wikipedia.org/wiki/Peak_signal-to-noise_ratio) - Standard image fidelity metric in MRI/CT reconstruction.
- [SSIM](https://ece.uwaterloo.ca/~z70wang/research/ssim/) - Structural similarity for perceptual quality.
- [LPIPS](https://github.com/richzhang/PerceptualSimilarity) - Perceptual distance for generative realism.
- [FID](https://proceedings.neurips.cc/paper/2017/hash/8a1d694707eb0fefe65871369074926d-Abstract.html) - Distribution-level quality metric for generated data.
- [NMSE](https://en.wikipedia.org/wiki/Mean_squared_error) - Normalized error metric commonly reported in MRI challenge results.

## Segmentation and Detection Metrics

- [Dice Similarity Coefficient](https://en.wikipedia.org/wiki/S%C3%B8rensen%E2%80%93Dice_coefficient) - Core overlap metric for segmentation.
- [Hausdorff Distance](https://en.wikipedia.org/wiki/Hausdorff_distance) - Boundary quality metric for clinical structures.
- [AUROC](https://en.wikipedia.org/wiki/Receiver_operating_characteristic) - Binary and multi-class detection quality.
- [Average Precision (AP)](https://en.wikipedia.org/wiki/Evaluation_measures_(information_retrieval)#Average_precision) - Detection precision-recall summary.
- [clDice (Shit et al., 2021)](https://arxiv.org/abs/2003.07311) - Topology-preserving metric/loss for tubular structures.

## Canonical Benchmarks

- [fastMRI Challenge](https://fastmri.med.nyu.edu/) - MRI reconstruction benchmark with public baselines.
- [LoDoPaB-CT Benchmark](https://github.com/jleuschn/lodopab_tech_ref) - Low-dose CT inverse-problem benchmark.
- [CAMELYON16](https://camelyon16.grand-challenge.org/) - Pathology detection benchmark under weak labels.
- [CAMELYON17](https://camelyon17.grand-challenge.org/) - Domain-shift pathology benchmark.
- [PANDA](https://www.kaggle.com/competitions/prostate-cancer-grade-assessment) - Large-scale pathology grading benchmark.

## PIWM-Specific Evaluation Axes

- Physical residual compliance (PDE/operator consistency)
- Semantic accuracy (task-level clinical metrics)
- Small-sample robustness (performance under low-N training)
- OOD generalization (cross-site, cross-device shifts)
- Clinical trustworthiness (auditable constraints and stability)
- Counterfactual validity (intervention-consistent outcome changes)
