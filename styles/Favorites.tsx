import styled from 'styled-components';

export const FavoritesPoster = styled.div`
  max-width: 320px;
  max-height: 400px;
`;
export const FavoritesTitle = styled.h3`
  font-family: Roboto, sans-serif;
  color: #ffffff;
  font-size: 15px;
`;

export const FavoritesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 100px;
  align-items: flex-start;
  row-gap: 110px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 40px;
  }
  @media (max-width: 320px) {
    grid-template-columns: repeat(1, 1fr);
    column-gap: 16px;
  }
`;
