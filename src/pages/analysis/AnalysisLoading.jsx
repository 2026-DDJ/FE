import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { readAssessment } from "../../utils/assessment";
import { createPrediction } from "../../api/predictions";
import skeletonBg from "../../assets/skeleton_bg.png";
import skeletonOg from "../../assets/skeleton_og.png";
import {
  LoadingContainer, LoadingContent, LoadingTitle, SkeletonContainer,
  SkeletonBackground, SkeletonOverlay,
} from "../../styles/AnalysisLoading.styles";

const AnalysisLoading = () => {
  const navigate = useNavigate();
  const started = useRef(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    createPrediction(readAssessment())
      .then((response) => {
        if (response?.status === "COMPLETED" || response?.status === "PENDING") {
          navigate("/analysis/result", { replace: true });
        } else {
          setError(response?.errorCode
            ? `예측에 실패했습니다. (${response.errorCode})`
            : "AI 예측에 실패했습니다. 다시 시도해주세요.");
        }
      })
      .catch((err) => setError(err.message));
  }, [navigate]);

  return (
    <LoadingContainer>
      <Header />
      <LoadingContent>
        <LoadingTitle>{error ? "분석을 완료하지 못했어요" : "분석 중..."}</LoadingTitle>
        {error ? (
          <div role="alert" style={{ color: "white", marginTop: 24, textAlign: "center" }}>
            <p>{error}</p>
            <Link to="/analysis/4" style={{ color: "inherit" }}>설문으로 돌아가기</Link>
          </div>
        ) : (
          <SkeletonContainer>
            <SkeletonBackground src={skeletonBg} alt="" />
            <SkeletonOverlay aria-hidden="true"><img src={skeletonOg} alt="" /></SkeletonOverlay>
          </SkeletonContainer>
        )}
      </LoadingContent>
    </LoadingContainer>
  );
};
export default AnalysisLoading;
