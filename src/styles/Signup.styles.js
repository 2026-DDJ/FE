import styled from "styled-components";
import {
  PageContainer,
  COLORS,
} from "./Common.styles";

export const SignupContainer = styled(PageContainer)`
  justify-content: center;
  padding: 80px 0;
`;

export const Logo = styled.img`
  width: 410px;
  height: auto;
  margin-bottom: 70px;
`;

export const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Agreement = styled.p`
  width: 580px;
  margin-top: 24px;

  color: ${COLORS.pink};

  font-size: 12px;
  font-weight: 400;
  line-height: 1.6;

  text-align: center;
  opacity: 0.7;
`;

export const BottomSection = styled.div`
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const LoginLink = styled.a`
  color: ${COLORS.white};

  font-size: 18px;
  font-weight: 600;

  text-decoration: underline;
  text-underline-offset: 3px;

  cursor: pointer;
`;