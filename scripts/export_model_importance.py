"""Export global split-gain importance, never personal attributions.

Usage: python scripts/export_model_importance.py /path/to/AI
Dependencies: joblib, scikit-learn==1.7.2, xgboost==3.4.1
Only load trusted model artifacts. The source SHA and hashes pin this snapshot.
"""
import hashlib
import json
from pathlib import Path
import subprocess
import sys

import joblib

source = Path(sys.argv[1]).resolve()
features = joblib.load(source / "models/metadata.pkl")["features"]
models = []
for key, label in [("low_model", "일반 의료비 예측"), ("high_model", "고액 의료비 예측"), ("classifier", "고비용군 분류")]:
    artifact = source / f"models/{key}.pkl"
    pipeline = joblib.load(artifact)
    transformed = pipeline.named_steps["prep"].get_feature_names_out()
    estimator = pipeline.named_steps["model"]
    assert estimator.importance_type in (None, "gain")
    scores = dict.fromkeys(features, 0.0)
    for name, importance in zip(transformed, estimator.feature_importances_, strict=True):
        original = name.split("__", 1)[1]
        feature = next((field for field in sorted(features, key=len, reverse=True)
                        if original == field or original.startswith(field + "_")), None)
        assert feature is not None, name
        scores[feature] += float(importance)
    total = sum(scores.values())
    assert total > 0
    models.append({
        "key": key, "label": label,
        "sha256": hashlib.sha256(artifact.read_bytes()).hexdigest(),
        "factors": [{"feature": feature, "importance": value / total}
                    for feature, value in sorted(scores.items(), key=lambda item: (-item[1], item[0]))],
    })
output = {
    "repository": "https://github.com/2026-DDJ/AI",
    "commit": subprocess.check_output(["git", "-C", str(source), "rev-parse", "HEAD"], text=True).strip(),
    "method": "XGBoost normalized gain; sum one-hot category importances by original feature, then normalize across all 28 features. Each model is ranked separately.",
    "models": models,
}
target = Path(__file__).resolve().parents[1] / "src/data/modelImportance.json"
target.parent.mkdir(exist_ok=True)
target.write_text(json.dumps(output, ensure_ascii=False, indent=2) + "\n")
for model in models:
    print(model["key"], model["factors"][:3])
