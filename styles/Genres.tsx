import styled from 'styled-components';

export const GenresStyle = styled.div`
  width: 1280px;
  height: 720px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

export const Heading = styled.h1`
  margin-top: 100px;
  font-family: 'Bebas Neue', cursive;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 50px;
  color: rgb(29, 29, 29, 0.5);
`;

export const GenresItemStyle = styled.div`
  width: 150px;
  height: 70px;
  border: 2px solid rgb(106, 90, 205);
  border-radius: 20px;
  a {
    text-decoration: none;
  }
`;

export const GenresInfoStyle = styled.p`
  font-size: 20px;
  line-height: 25px;
  text-align: center;
`;

export const GenresListStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  max-width: 950px;
  gap: 50px;
  flex-wrap: wrap;
  .a {
    text-decoration: none;
  }
`;
