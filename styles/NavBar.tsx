import styled from 'styled-components';

export const NavBarStyled = styled.div`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background: rgba(29, 29, 29, 0.5);
  box-shadow: 0px 40px 40px 8px rgba(0, 0, 0, 0.16);
  backdrop-filter: blur(24px);
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  width: 50px;
  height: 720px;
`;

export const Icons = styled.div`
  margin: 20px;
  width: 30px;
  height: 30px;
  hover {
    transform: scale(1.2);
    transition: transform 0.15s linear;
  }
`;
export const SearchIcon = styled.div`
  width: 45px;
  height: 45px;
  margin-left
`;
