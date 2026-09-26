import { useNavigate } from "react-router-dom";

import SkeletonViewer from "../components/SkeletonViewer";
import Button from "../components/Button";

import logo from "../assets/medicast-logo.svg";

import {
  MainContainer,
  Header,
  Navigation,
  NavItem,
  HeroSection,
  SkeletonArea,
  MainLogo,
  ButtonArea,
} from "../styles/Main.styles";

const Main = () => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <Header>
        <Navigation>
          <NavItem>서비스 소개</NavItem>
          <NavItem>데이터 정보</NavItem>
          <NavItem>마이 페이지</NavItem>
        </Navigation>
      </Header>

      <HeroSection>
        <SkeletonArea>
          <SkeletonViewer />
        </SkeletonArea>

        <MainLogo
          src={logo}
          alt="MEDICAST"
        />

        <ButtonArea>
          <Button
            onClick={() => navigate("/analysis")}
          >
            의료비 예측하기
          </Button>
        </ButtonArea>
      </HeroSection>
    </MainContainer>
  );
};

export default Main;