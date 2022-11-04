import styled from 'styled-components';

export const CarouselStyled = styled.div`
  width: 1280px;
  height: 760px;
  .slick-list {
    width: 1280px;
    height: 720px;
    margin-right: -30px;
  }

  .slick-track {
    top: -21px;
  }

  .slick-next {
    right: -25px;
    height: 461px;
    width: 185px;
  }
`;

export const CarouselSlide = styled.div`
  display: flex;
  align-items: center;
  height: 720px;
`;

export const CarouselInfo = styled.div`
  margin-left: 80px;
  max-width: 650px;
`;

export const CarouselHeader = styled.h1`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 56px;
  line-height: 64px;
  color: #ffffff;
`;

export const CarouselText = styled.p`
  max-width: 620px;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 32px;
  color: #ffffff;
`;

export const CarouselButton = styled.button`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 40px 40px rgba(0, 0, 0, 0.12);
  width: 288px;
  height: 56px;
  background: rgba(44, 44, 44, 0.3);
  box-shadow: 0px 16px 16px 4px rgba(0, 0, 0, 0.12);
  border-radius: 40px;
`;
