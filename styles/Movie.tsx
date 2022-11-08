import styled from 'styled-components';

export const MovieStyle = styled.div`
  width: 1280px;
  max-height: 775px;
  p,
  h1,
  h3,
  a,
  h4 {
    font-family: Roboto, sans-serif;
    color: #ffffff;
  }
  @media (max-width: 768px) {
    padding-left: 50px;
    max-width: 370px;
    max-height: 900px;
    background-image: none !important;
  }
`;

export const AboutMovie = styled.div`
  display: flex;
  margin: 50px;
  font-family: Roboto, sans-serif;
  color: #ffffff;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 30px;
  }
  @media (max-width: 320px) {
    padding-left: 70px;
  }
`;

export const Poster = styled.div`
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-right: 15px;
  }
`;

export const Details = styled.div`
  max-width: 790px;
  height: 580px;
  background: rgba(29, 29, 29, 0.5);
  border-radius: 50px 50px;
  padding: 25px;
  font-family: Roboto, sans-serif;
  color: #ffffff;

  @media (max-width: 768px) {
    height: 100%;
    padding: 0;
    margin: 0;
    text-align: end;
    background: none;
  }
`;

export const OverView = styled.div`
  font-family: Roboto, sans-serif;
  color: #ffffff;
  font-size: 25px;

  @media (max-width: 768px) {
    font-size: 15px;
    min-width: 160px;
  }
`;

export const Title = styled.h1`
  font-family: Roboto, sans-serif;
  color: #ffffff;
  font-size: 80px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const TitleBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleBadgeHeader = styled.h1`
  margin-bottom: 10px;
  font-family: 'Bebas Neue', cursive;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 50px;
  color: white;
`;

export const ReleaseData = styled.h1`
  margin-top: 10px;
`;

export const StarsStyle = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const Money = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  align-items: center;
`;
