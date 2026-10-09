import { useLocation, useNavigate } from "react-router-dom";

import logo from "../assets/medicast-logo.svg";

import {
  HeaderContainer,
  HeaderLogo,
  Navigation,
  NavItem,
} from "../styles/Header.styles";

const Header = ({ showLogo = true }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <HeaderContainer>
      {showLogo && (
        <HeaderLogo
          src={logo}
          alt="MEDICAST"
          onClick={() => navigate("/")}
        />
      )}

      <Navigation>
        <NavItem
          $active={location.pathname === "/intro"}
          onClick={() => navigate("/intro")}
        >
          서비스 소개
        </NavItem>

        <NavItem
          $active={location.pathname === "/data"}
          onClick={() => navigate("/data")}
        >
          데이터 정보
        </NavItem>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;