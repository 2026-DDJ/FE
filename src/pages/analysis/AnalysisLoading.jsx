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

          <SkeletonOverlay>
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