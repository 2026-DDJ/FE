import styled, { css } from "styled-components";

import { COLORS } from "./Common.styles";

export const HeaderContainer = styled.header`
  position: absolute;

  top: 50px;
  left: 6.5%;
  right: 8%;

  display: flex;
  align-items: center;

  z-index: 100;
`;

export const HeaderLogo = styled.img`
  width: 300px;
  height: auto;

  display: block;

  cursor: pointer;
`;

export const Navigation = styled.nav`
  margin-left: auto;

  display: flex;
  align-items: center;

  gap: 70px;
`;

export const NavItem = styled.button`
  padding: 0;

  border: none;
  background: transparent;

  color: ${COLORS.pink};

  font-size: 18px;
  font-weight: 600;

  white-space: nowrap;

  cursor: pointer;

  transition:
    opacity 0.2s ease,
    text-shadow 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  ${({ $active }) =>
    $active &&
    css`
      text-shadow:
        0 0 6px rgba(255, 219, 237, 0.9),
        0 0 14px rgba(255, 219, 237, 0.7),
        0 0 24px rgba(255, 219, 237, 0.45);
    `}
`;