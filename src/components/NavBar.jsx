import styled from "styled-components";
import { Menu, PersonRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const NavBarDiv = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 16px 40px;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  gap: 30px;
  background: ${({ theme }) => theme.bgLight};

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.7px);
  -webkit-backdrop-filter: blur(5.7px);
  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const ButtonDiv = styled.div`
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  max-width: 70px;
  display: flex;
  gap: 3px;
  border-radius: 10px;
  padding: 6px 10px;
  align-items: center;
  color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};
`;

const IcoButton = styled(IconButton)`
  color: ${({ theme }) => theme.text_primary} !important;
`;
const NavBar = ({ menuOpen, setMenuOpen }) => {
  return (
    <NavBarDiv>
      <IcoButton onClick={() => setMenuOpen(!menuOpen)}>
        <Menu />
      </IcoButton>
      <ButtonDiv>
        <PersonRounded />
        Login
      </ButtonDiv>
    </NavBarDiv>
  );
};

export default NavBar;
