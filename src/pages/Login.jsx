import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/medicast-logo.svg";

import Button from "../components/Button";
import InputBox from "../components/InputBox";

import {
  LoginContainer,
  Logo,
  LoginForm,
  InputSection,
  BottomSection,
  SignupLink,
} from "../styles/Login.styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      email,
      password,
    });
  };

  return (
    <LoginContainer>
      <Logo src={logo} alt="MEDICAST" />

      <LoginForm onSubmit={handleSubmit}>
        <InputSection>
          <InputBox
            label="이메일"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputBox
            label="비밀번호"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputSection>

        <BottomSection>
          <Button type="submit">로그인</Button>

          <SignupLink as={Link} to="/signup">
            회원가입
          </SignupLink>
        </BottomSection>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;