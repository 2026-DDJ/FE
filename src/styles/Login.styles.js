
import styled from "styled-components";
import { PageContainer, COLORS } from "./Common.styles";

export const LoginContainer = styled(PageContainer)`
  justify-content: center;
  padding: 80px 20px;
`;

export const Logo = styled.img`
  width: 410px;
  height: auto;
  margin-bottom: 90px;
  @media (max-width: 600px) { width: min(100%, 320px); margin-bottom: 48px; }
`;

export const LoginForm = styled.form`
  width: min(100%, 580px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const BottomSection = styled.div`
  margin-top: 86px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const SignupLink = styled.a`
  color: #202020;

  font-size: 18px;
  font-weight: 600;

  text-decoration: underline;
  text-underline-offset: 3px;

  cursor: pointer;
`;
