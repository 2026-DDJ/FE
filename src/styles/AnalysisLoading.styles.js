import { COLORS } from "./Common.styles";

import styled, { keyframes } from "styled-components";

const skeletonScan = keyframes`
  0% {
    clip-path: inset(0 0 100% 0);
  }

  100% {
    clip-path: inset(0 0 0 0);
  }
`;

export const LoadingContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;

  background: ${COLORS.background};

  display: flex;
  flex-direction: column;

  overflow: hidden;
`;

export const LoadingContent = styled.main`
  @media (max-width: 600px) { padding: 110px 16px 32px; }
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 80px;
`;

export const LoadingTitle = styled.h1`
  @media (max-width: 600px) { padding-top: 0; font-size: 30px; }
  margin: 0;

  color: ${COLORS.pink};

  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;

  text-align: center;
  padding-top: 80px;
`;

export const SkeletonContainer = styled.div`
  @media (max-width: 600px) { width: min(100%, 300px); height: 465px; }
  position: relative;

  width: 400px;
  height: 620px;
`;

// 회색 스켈레톤 (기준)
export const SkeletonBackground = styled.img`
  @media (max-width: 600px) { width: 100%; height: 100%; }
  position: absolute;

  top: 0px;
  left: 0px;

  width: 400px;
  height: 620px;

  object-fit: contain;
`;

// 핑크 스켈레톤 (수동 조정)
export const SkeletonOverlay = styled.div`
  @media (max-width: 600px) { width: 100%; height: 100%; img { width: 100%; height: 100%; } }
  position: absolute;

  top: 0px;
  left: 0px;

  width: 400px;
  height: 620px;

  overflow: hidden;

  animation: ${skeletonScan} 4s ease-in-out forwards;

  img {
    position: absolute;

    top: 0px;
    left: 0px;

    width: 400px;
    height: 620px;

    object-fit: contain;
  }
`;
