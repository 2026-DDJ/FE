
import styled from "styled-components";

export const COLORS = {
  background: "#FFFFFF",
  pink: "#29AE89",
  button: "#EAF7F4",
  white: "#202020",
};

export const PageContainer = styled.main`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${COLORS.background};
`;
