import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import SkeletonViewer from "../components/SkeletonViewer";
import Button from "../components/Button";

import logo from "../assets/medicast-logo.svg";

import {
  MainContainer,
  HeroSection,
  SkeletonArea,
  MainLogo,
  ButtonArea,
} from "../styles/Main.styles";

const Main = () => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <Header showLogo={false} />

      <HeroSection>
        <SkeletonArea>
          <SkeletonViewer />
        </SkeletonArea>

        <MainLogo
          src={logo}
          alt="MEDICAST"
        />

        <ButtonArea>
          <Button onClick={() => navigate("/analysis")}>
            의료비 예측하기
          </Button>
        </ButtonArea>
      </HeroSection>
    </MainContainer>
  );
};

export default Main;