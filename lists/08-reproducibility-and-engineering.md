# Reproducibility and Engineering

> Practical engineering references for reliable PIWM experiments and deployment.

## Experiment Tracking and Versioning

- [Weights & Biases](https://wandb.ai/site) - Standard experiment tracking for multi-run ablations.
- [MLflow](https://mlflow.org/) - Open-source model lifecycle and reproducibility tracking.
- [DVC](https://dvc.org/) - Dataset and pipeline version control for large imaging assets.

## Medical Imaging Workflow Stacks

- [MONAI Bundle](https://docs.monai.io/en/stable/mb_specification.html) - Reproducible packaging format for medical models.
- [nnU-Net Reproducibility Guidance](https://github.com/MIC-DKFZ/nnUNet/blob/master/documentation/reproducibility.md) - Practical baseline reproducibility checklist.
- [fastMRI Baselines](https://github.com/facebookresearch/fastMRI) - Common MRI reconstruction baselines and evaluation scripts.
- [Grand-Challenge Platform](https://grand-challenge.org/) - Standardized external evaluation platform for medical AI.

## Governance and Regulatory Context

- [FDA AI/ML SaMD Action Plan (2021)](https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-and-machine-learning-software-medical-device) - Regulatory baseline for adaptive medical AI systems.
- [EU AI Act (Regulation (EU) 2024/1689)](https://eur-lex.europa.eu/eli/reg/2024/1689/oj) - Risk-based requirements relevant to high-impact medical AI.

## Engineering Checks for PIWM

- Report both semantic metrics (e.g., Dice/AUROC) and physical consistency metrics.
- Track failure modes on rare disease cohorts and cross-site shifts.
- Publish pre-processing details (spacing, normalization, crop policies).
- Use fixed random seeds and record hardware/software versions.
- Release validation protocol and data split rationale.
- Provide inference-time constraints and safety guardrails for clinical deployment.
- Include uncertainty calibration and outlier-detection behavior.

## Minimal Reproducibility Checklist

1. Exact data version and acquisition constraints.
2. Full training config (optimizer, lr schedule, epochs, seed).
3. Model checkpoint and hash.
4. Evaluation script with deterministic settings.
5. External validation and subgroup reporting.
