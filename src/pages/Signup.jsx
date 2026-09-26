import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/medicast-logo.svg";

import Button from "../components/Button";
import InputBox from "../components/InputBox";

import {
  SignupContainer,
  Logo,
  SignupForm,
  InputSection,
  Agreement,
  BottomSection,
  LoginLink,
} from "../styles/Signup.styles";

const Signup = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    console.log({
      email: form.email,
      password: form.password,
    });
  };

  return (
    <SignupContainer>
      <Logo src={logo} alt="MEDICAST" />

      <SignupForm onSubmit={handleSubmit}>
        <InputSection>
          <InputBox
            label="이메일"
            name="email"
            type="email"
            value={form.email}
            placeholder="이메일을 입력하세요"
            onChange={handleChange}
            autoComplete="email"
          />

          <InputBox
            label="비밀번호"
            name="password"
            type="password"
            value={form.password}
            placeholder="비밀번호를 입력하세요"
            onChange={handleChange}
            autoComplete="new-password"
          />

          <InputBox
            label="비밀번호 확인"
            name="passwordConfirm"
            type="password"
            value={form.passwordConfirm}
            placeholder="비밀번호를 다시 입력하세요"
            onChange={handleChange}
            autoComplete="new-password"
            status={
              form.passwordConfirm.length==0
                ? null
                : form.password === form.passwordConfirm
                ? "success"
                : "error"
            }
          />
        </InputSection>

        <Agreement>
          회원가입 진행 시 개인정보 처리방침 및 서비스 이용약관에 동의하는 것으로 간주됩니다.
        </Agreement>

        <BottomSection>
          <Button type="submit">
            회원가입
          </Button>

          <LoginLink as={Link} to="/login">
            로그인
          </LoginLink>
        </BottomSection>
      </SignupForm>
    </SignupContainer>
  );
};

export default Signup;