import {
  CloseRounded,
  CloudUploadRounded,
  DarkModeRounded,
  FavoriteRounded,
  HomeRounded,
  LightModeRounded,
  LogoutRounded,
  SearchRounded,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuContainer = styled.div.attrs((props) => ({
  // Filter out non-standard props
  menuOpen: undefined,
}))`
  flex: 0.5;
  flex-direction: column;
  height: 100vh;
  display: flex;
  padding: 0px 2rem 0 0;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 1100px) {
    position: fixed;
    z-index: 1000;
    width: 100%;
    max-width: 250px;
    left: ${({ menuOpen }) =>
      menuOpen === undefined ? "0" : menuOpen ? "0" : "-100%"};
    transition: ${({ menuOpen }) =>
      menuOpen === undefined ? "none" : "left 0.3s ease-in-out"};
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 12px;
`;

const Logo = styled.div`
  color: ${({ theme }) => theme.primary};

  font-weight: 20px;
`;

const Close = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 1100px) {
    display: block;
  }
`;

const Elements = styled.div`
  padding: 4px 16px;
  display: flex;
  cursor: pointer;
  align-items: center;
  gap: 12px;
  color: ${({ theme }) => theme.text_secondary};
  width: 100%;
  &:hover {
    background-color: ${({ theme }) => theme.text_secondary + 50};
  }
`;

const NavText = styled.div`
  padding: 12px 0px;
`;

const HR = styled.div`
  width: 100%;
  height: 1px;
  margin: 10px 0px;
  background-color: ${({ theme }) => theme.text_secondary + 50};
`;

const Sidebar = ({ menuOpen, setMenuOpen, darkMode, setDarkMode }) => {
  const menuItems = [
    {
      link: "/",
      name: "Dashboard",
      icon: <HomeRounded />,
    },
    {
      link: "/search",
      name: "Search",
      icon: <SearchRounded />,
    },
    {
      link: "/favourites",
      name: "Favourites",
      icon: <FavoriteRounded />,
    },
  ];

  const buttons = [
    {
      fun: () => console.log("Upload"),
      name: "Upload",
      icon: <CloudUploadRounded />,
    },
    {
      fun: () => setDarkMode(!darkMode),
      name: darkMode ? "Light Mode" : "Dark mode",
      icon: darkMode ? <LightModeRounded /> : <DarkModeRounded />,
    },
    {
      fun: () => console.log("Log Out"),
      name: "Log Out",
      icon: <LogoutRounded />,
    },
  ];

  return (
    <MenuContainer menuOpen={menuOpen}>
      <Flex>
        <Logo>VideoGraphy</Logo>
        <Close onClick={() => setMenuOpen(false)}>
          <CloseRounded />
        </Close>
      </Flex>

      {menuItems.map((item, i) => (
        <Link to={item.link} key={i} style={{ textDecoration: "none" }}>
          <Elements>
            {item.icon}
            <NavText>{item.name}</NavText>
          </Elements>
        </Link>
      ))}
      <HR />
      {buttons.map((item, i) => (
        <Elements onClick={item.fun} key={i}>
          {item.icon}
          <NavText>{item.name}</NavText>
        </Elements>
      ))}
    </MenuContainer>
  );
};

export default Sidebar;
