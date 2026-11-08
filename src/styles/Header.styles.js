
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
  @media (max-width: 600px) { top: 32px; left: 5%; right: 5%; }
`;

export const HeaderLogo = styled.img`
  width: 300px;
  @media (max-width: 600px) { width: 148px; }
  height: auto;

  display: block;

  cursor: pointer;
`;

export const Navigation = styled.nav`
  margin-left: auto;

  display: flex;
  align-items: center;

  gap: 70px;
  @media (max-width: 600px) { gap: 16px; }
`;

export const NavItem = styled.button`
  padding: 0;

  border: none;
  background: transparent;

  color: ${COLORS.pink};

  font-size: 18px;
  @media (max-width: 600px) { font-size: 16px; }
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
      0 0 4px rgba(41, 174, 137, 0.18),
      0 0 10px rgba(41, 174, 137, 0.12),
      0 0 18px rgba(137, 230, 203, 0.08);
    `}
`;
