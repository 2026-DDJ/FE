// Keep calculations in won; round only the displayed amount to whole 만원.
export const formatMedicalCost = (won) =>
  `약 ${Math.round(won / 10000).toLocaleString("ko-KR")}만원`;
