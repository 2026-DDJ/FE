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
  color: ${COLORS.pink};

  font-size: 18px;
  font-weight: 600;

  cursor: pointer;
`;

export const HeroSection = styled.section`
  position: relative;

  width: 100%;
  height: 100vh;

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
`;

export const ButtonArea = styled.div`
  position: absolute;

  top: 80%;
  left: 50%;

  transform: translateX(-50%);

  z-index: 3;
`;