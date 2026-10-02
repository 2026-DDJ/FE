import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import SkeletonViewer from "../components/SkeletonViewer";
import IntroProgress from "../components/IntroProgress";
import Button from "../components/Button";

import {
  IntroContainer,
  IntroContent,
  LeftSection,
  Title,
  Description,
  MedicastText,
  SkeletonSection,
  ProgressSection,
  ButtonArea,
} from "../styles/Intro.styles";

const Intro = () => {
  const navigate = useNavigate();

  return (
    <IntroContainer>
      <Header />

      <IntroContent>
        <LeftSection>
          <Title>
            HOW SERVICE
            <br />
            WORKS
          </Title>

          <Description>
            <p>
              <MedicastText>MEDICAST</MedicastText>는 AI와 공공데이터를 기반으로
              <br />
              미래의 의료비를 예측하는 서비스입니다.
            </p>

            <p>
              복잡한 과정 없이, 간단한 건강정보 입력만으로
              <br />
              AI가 당신의 미래 의료비를 분석해드립니다.
            </p>
          </Description>
        </LeftSection>

        <SkeletonSection>
          <SkeletonViewer />
        </SkeletonSection>

        <ProgressSection>
          <IntroProgress />
        </ProgressSection>

        <ButtonArea>
          <Button onClick={() => navigate("/analysis")}>
            의료비 예측하기
          </Button>
        </ButtonArea>
      </IntroContent>
    </IntroContainer>
  );
};

export default Intro;