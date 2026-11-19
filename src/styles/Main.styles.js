
import styled from "styled-components";

import {
  PageContainer,
  COLORS,
} from "./Common.styles";

export const MainContainer = styled(PageContainer)`
  position: relative;

  min-height: 100vh;
  overflow: hidden;
`;

export const Header = styled.header`
  position: absolute;

  top: 50px;
  right: 120px;

  z-index: 10;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 70px;
`;

export const NavItem = styled.button`
  padding: 0;

  background: transparent;
  color: #29AE89;

  font-size: 18px;
  font-weight: 600;

  cursor: pointer;
`;

export const HeroSection = styled.section`
  position: relative;

  width: 100%;
  height: 100vh;
  min-height: 580px;
  @media (max-width: 768px) { height: 100dvh; min-height: 580px; }

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SkeletonArea = styled.div`
  position: absolute;

  top: 5%;
  left: 50%;

  transform: translateX(-50%);

  width: 620px;
  height: 90vh;
  @media (max-width: 768px) { top: 10%; width: min(100vw, 500px); height: 68%; }

  z-index: 1;
`;

export const MainLogo = styled.img`
  position: absolute;

  top: 70%;
  left: 50%;

  transform: translate(-50%, -50%);

  z-index: 2;

  width: min(70vw, 1100px);
  height: auto;

  pointer-events: none;
  @media (max-width: 768px) { top: 66%; width: 90%; }
`;

export const ButtonArea = styled.div`
  position: absolute;

  top: 80%;
  left: 50%;

  transform: translateX(-50%);

  z-index: 3;
  @media (max-width: 768px) { top: auto; bottom: max(8%, env(safe-area-inset-bottom)); width: calc(100% - 40px); display: flex; justify-content: center; > button { width: min(100%, 360px); } }
`;
