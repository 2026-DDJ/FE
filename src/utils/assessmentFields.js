const options = (entries) => entries.map(([value, label]) => ({ value: String(value), label }));
const levels = options([[1, "없음"], [2, "다소 있음"], [3, "심함"]]);

export const ASSESSMENT_STEPS = [
  { title: "1단계: 생활·경제 정보", fields: [
    { name: "householdSize", title: "가구원 수", type: "number", min: 1, max: 10, step: 1, suffix: "명", description: "함께 사는 사람은 본인을 포함해 몇 명인가요? (1~10명)" },
    { name: "region", title: "거주 지역", type: "select", description: "현재 거주하는 지역을 선택하세요.", options: options([
      ["서울특별시", "서울"], ["부산광역시", "부산"], ["대구광역시", "대구"], ["인천광역시", "인천"], ["광주광역시", "광주"], ["대전광역시", "대전"], ["울산광역시", "울산"], ["세종특별자치시", "세종"], ["경기도", "경기"], ["강원특별자치도", "강원"], ["충청북도", "충북"], ["충청남도", "충남"], ["전북특별자치도", "전북"], ["전라남도", "전남"], ["경상북도", "경북"], ["경상남도", "경남"], ["제주특별자치도", "제주"],
    ]) },
    { name: "occupation", title: "직업군", type: "select", description: "현재 하는 일에 가장 가까운 직업을 선택하세요.", options: options([[14, "관리자"], [24, "전문가·관련종사자"], [31, "사무"], [42, "서비스"], [52, "판매"], [61, "농림·어업"], [78, "기능원"], [87, "장치·기계조작·조립"], [94, "단순노무"], ["none", "경제활동 안 함"]]) },
    { name: "income", title: "연간 소득", type: "select", description: "지난 1년간 소득 구간을 선택하세요. (단위: 만 원)", options: options([["under-2400", "2,400만원 미만"], ["2400-4500", "2,400만원 이상 ~ 4,500만원 미만"], ["4500-7500", "4,500만원 이상 ~ 7,500만원 미만"], ["over-7500", "7,500만원 이상"]]) },
  ] },
  { title: "2단계: 건강 상태·생활 습관", fields: [
    { name: "height", title: "키", description: "키를 센티미터(cm) 단위로 입력하세요. 예: 160", type: "number", min: 0.1, step: "any", suffix: "cm" },
    { name: "weight", title: "몸무게", description: "몸무게를 킬로그램(kg) 단위로 입력하세요. 예: 50", type: "number", min: 0.1, step: "any", suffix: "kg" },
    { name: "exercise", title: "평소 규칙적으로 운동하시나요?", type: "buttons", options: options([["regular", "예"], ["none", "아니오"]]) },
    { name: "healthStatus", title: "주관적 건강상태", type: "buttons", options: options([["very-good", "매우 좋음"], ["good", "좋음"], ["normal", "보통"], ["bad", "나쁨"], ["very-bad", "매우 나쁨"]]) },
    { name: "activityLimitation", title: "활동 제한", type: "buttons", options: levels },
    { name: "anxietyDepression", title: "불안·우울", type: "buttons", options: levels },
  ] },
  { title: "3단계: 지난 1년간 병원 이용", fields: [
    { name: "outpatientVisits", title: "병원 외래 방문 횟수", description: "입원하지 않고 병원 지료를 받은 횟수를 적으세요. 예: 5", type: "number", min: 0, step: 1, suffix: "회" },
    { name: "dentalVisits", title: "치과 방문 횟수", description: "지난 1년간 치과에서 진료받은 횟수를 적으세요. 예: 2", type: "number", min: 0, step: 1, suffix: "회" },
    { name: "hospitalized", title: "지난 1년간 입원한 적이 있나요?", description: "하루 이상 병원에 입원한 경우를 선택하세요.", type: "buttons", options: options([[1, "있어요"], [0, "없어요"]]) },
  ] },
  { title: "4단계: 가입한 보험 정보", fields: [
    { name: "healthInsurance", title: "현재 가입한 건강보험은 무엇인가요?", description: "건강보험 자격에 맞는 항목을 선택하세요.", type: "select", options: options([[1, "직장 건강보험 가입자"], [2, "직장 건강보험 피부양자"], [3, "지역 건강보험 세대주"], [4, "지역 건강보험 세대원"], [5, "의료급여(1·2종) 세대주"], [6, "의료급여 세대원"], [7, "국가유공자"], ["none", "미가입"]]) },
    { name: "indemnityInsurance", title: "실손의료보험에 가입하셨나요?", description: "실손의료보험이란 병원비 일부를 돌려받는 민간 보험이에요.", type: "buttons", options: options([[1, "가입했어요"], [0, "가입하지 않았어요"]]) },
  ] },
];

export const isFieldValid = (field, value) => {
  if (value === "" || value == null) return false;
  if (field.type !== "number") return field.options.some((option) => option.value === value);
  const number = Number(value);
  return Number.isFinite(number) && number >= field.min &&
    (field.max == null || number <= field.max) &&
    (field.step !== 1 || Number.isInteger(number));
};
export const isStepValid = (step, assessment) => ASSESSMENT_STEPS[step - 1].fields.every((field) => isFieldValid(field, assessment[field.name]));
export const isAssessmentValid = (assessment) => ASSESSMENT_STEPS.every((_, index) => isStepValid(index + 1, assessment));

const REGION_CODES = [11, 26, 27, 28, 29, 30, 31, 36, 41, 42, 43, 44, 45, 46, 47, 48, 50];
const INCOME_VALUES = [1570.5, 3380, 5880, 10160];
// Mirrors AI/api/main.py MedicalCostInput; BMI and dent_share are derived by AI.
export const toPredictionInput = (data) => {
  if (!isAssessmentValid(data)) throw new Error("모든 설문 항목을 올바르게 입력해주세요.");
  return {
    ingun: Number(data.householdSize),
    income: INCOME_VALUES[ASSESSMENT_STEPS[0].fields[3].options.findIndex((option) => option.value === data.income)],
    health_ins: data.healthInsurance === "none" ? null : Number(data.healthInsurance),
    region1: REGION_CODES[ASSESSMENT_STEPS[0].fields[1].options.findIndex((option) => option.value === data.region)],
    self_rated_health: ["very-good", "good", "normal", "bad", "very-bad"].indexOf(data.healthStatus) + 1,
    height: Number(data.height), weight: Number(data.weight),
    exercise: data.exercise === "regular" ? 1 : 2,
    ougun: Number(data.outpatientVisits), ougun_dent: Number(data.dentalVisits),
    indemnity_insurance: Number(data.indemnityInsurance), hospitalized_year: Number(data.hospitalized),
    activity_limitation: Number(data.activityLimitation), anxiety_depression: Number(data.anxietyDepression),
    eco9: data.occupation === "none" ? null : Number(data.occupation),
  };
};
