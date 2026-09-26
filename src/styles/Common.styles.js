import styled from "styled-components";

export const COLORS = {
  background: "#051320",
  pink: "#FFDBED",
  button: "#373B49",
  white: "#fff",
};

export const PageContainer = styled.main`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${COLORS.background};
`;