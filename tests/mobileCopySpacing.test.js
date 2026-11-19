import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const source = (path) => readFileSync(new URL(`../src/pages/${path}`, import.meta.url), "utf8");
const desktopText = (jsx) => jsx
  .replaceAll('{" "}', " ")
  .replaceAll(/<span className="mobile-break"\s*\/>/g, "")
  .replaceAll(/<[^>]*>/g, "")
  .replaceAll(/\s+/g, " ");

test("manual mobile breaks never erase the desktop space between words", () => {
  for (const path of [
    "analysis/AnalysisResult.jsx",
    "simulation/Simulation.jsx",
  ]) {
    const jsx = source(path);
    const breaks = jsx.matchAll(/<span className="mobile-break"\s*\/>/g);
    for (const match of breaks) {
      const prefix = jsx.slice(0, match.index);
      assert.ok(prefix.endsWith('{" "}') || prefix.endsWith('{" "}'),
        `${path}: missing explicit desktop space before mobile break at ${match.index}`);
    }
  }
});

test("desktop copy preserves Korean word spacing on all affected pages", () => {
  const expectations = {
    "analysis/AnalysisResult.jsx": [
      "앞으로 1년간 예상되는 의료비",
      "건강한 변화를 시작해보세요.",
      "BMI와 운동 조건을 바꿔 예측비를 비교해보세요.",
      "실제 의료비나 생활 습관 변화의 인과적 효과를 보장하지 않습니다.",
    ],
    "simulation/Simulation.jsx": [
      "생활 습관을 바꿨을 때의 예상 의료비는?",
      "AI 모델이 다시 계산한 예측 결과를 비교합니다.",
      "바뀐 조건으로 의료비 다시 계산하기 →",
      "실제 의료비 절감이나 인과적 효과를 보장하지 않습니다.",
    ],
    "Data.jsx": ["머신러닝 모델을 학습하여 연간 의료비를 예측합니다."],
    "Intro.jsx": ["MEDICAST는 AI와 공공데이터를 기반으로 미래의 의료비를 예측하는 서비스입니다."],
  };
  for (const [path, phrases] of Object.entries(expectations)) {
    const rendered = desktopText(source(path));
    for (const phrase of phrases) {
      assert.ok(rendered.includes(phrase), `${path}: ${phrase}`);
    }
  }
});

test("mobile result title breaks after 1 year while the last comparison phrase stays together", () => {
  const result = source("analysis/AnalysisResult.jsx");
  assert.match(result, /앞으로 1년간\{" "\}<span className="mobile-break"\s*\/>예상되는 의료비/);
  assert.match(result, /<span className="mobile-nowrap">예측비를 비교해보세요\.<\/span>/);
});
