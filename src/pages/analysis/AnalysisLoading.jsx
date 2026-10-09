import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";

import skeletonBg from "../../assets/skeleton_bg.png";
import skeletonOg from "../../assets/skeleton_og.png";

import {
  LoadingContainer,
  LoadingContent,
  LoadingTitle,
  SkeletonContainer,
  SkeletonBackground,
  SkeletonOverlay,
} from "../../styles/AnalysisLoading.styles";

const AnalysisLoading = () => {
  const navigate = useNavigate();

  const handleAnimationEnd = (event) => {
    if (event.target !== event.currentTarget) return;

    navigate("/analysis/result", {
      replace: true,
    });
  };

  return (
    <LoadingContainer>
      <Header />

      <LoadingContent>
        <LoadingTitle>분석 중...</LoadingTitle>

        <SkeletonContainer>
          <SkeletonBackground
            src={skeletonBg}
            alt="Skeleton"
          />

          <SkeletonOverlay
            onAnimationEnd={handleAnimationEnd}
          >
            <img
              src={skeletonOg}
              alt=""
            />
          </SkeletonOverlay>
        </SkeletonContainer>
      </LoadingContent>
    </LoadingContainer>
  );
};

export default AnalysisLoading;