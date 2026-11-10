import snapshot from "../data/modelImportance.json";

const LABELS = {
  ingun: "가구원 수", income: "소득", health_ins: "건강보험 유형", region1: "거주 지역",
  self_rated_health: "주관적 건강상태", bmi: "BMI", exercise: "운동 여부", ougun: "외래 이용 횟수",
  ougun_dent: "치과 이용 횟수", dent_share: "치과 이용 비율", indemnity_insurance: "실손보험",
  hospitalized_year: "최근 1년 입원", activity_limitation: "활동 제한", anxiety_depression: "불안·우울", eco9: "직업군",
  ms_total_days: "총 의료이용 일수", ms_in_treatment_nunique: "입원 치료 종류 수",
  ms_facility_nunique: "이용 의료기관 종류 수", ms_mtype_1_count: "의료이용 유형 1 횟수",
  ms_mtype_3_count: "의료이용 유형 3 횟수", ms_in_reason_2_count: "입원 횟수",
  ms_in_trt_1_count: "입원 치료 1 횟수", ms_in_choice_1_count: "입원 선택 1 횟수",
  ms_in_care2_2_count: "입원 돌봄 2 횟수", ms_in_dsc_nunique: "입원 질환 종류 수",
  ms_dent_trt_10_count: "치과 치료 10 횟수", ms_dent_trt_5_count: "치과 치료 5 횟수",
  ms_in_sat7_mean: "입원 만족도 항목 7 평균",
};
export const MODEL_IMPORTANCE = snapshot;
export const getTopModelFactors = (key) => {
  const model = snapshot.models.find((item) => item.key === key);
  return (model?.factors ?? []).slice(0, 3).map(({ feature, importance }) => ({
    feature, name: LABELS[feature] ?? feature, score: importance * 100,
  }));
};
