import styled from 'styled-components';

export const MovieStyle = styled.div`
  width: 1280px;
  height: 775px;
  p,
  h1,
  h3,
  a,
  h4 {
    font-family: Roboto, sans-serif;
    color: #ffffff;
  }
`;

export const AboutMovie = styled.div`
  display: flex;
  margin: 50px;
  font-family: Roboto, sans-serif;
  color: #ffffff;
`;

export const Poster = styled.div`
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Details = styled.div`
  max-width: 790px;
  height: 580px;
  background: rgba(29, 29, 29, 0.5);
  border-radius: 50px 50px;
  padding: 25px;
  font-family: Roboto, sans-serif;
  color: #ffffff;
`;

export const OverView = styled.div`
  font-family: Roboto, sans-serif;
  color: #ffffff;
`;
export const Title = styled.h1`
  font-family: Roboto, sans-serif;
  color: #ffffff;
  font-size: 30px;
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
