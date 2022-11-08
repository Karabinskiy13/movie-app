import styled from 'styled-components';

export const CarouselStyled = styled.div`
  width: 1280px;
  height: 760px;

  @media (max-width: 768px) {
    width: 100%;
  }

  .slick-list {
    width: 1280px;
    height: 720px;
    margin-right: -30px;

    @media (max-width: 768px) {
      width: 350px;
    }
  }

  .slick-track {
    top: -21px;
  }

  .slick-next {
    right: -25px;
    height: 461px;
    width: 185px;

    @media (max-width: 768px) {
      opacity: 0;
    }
  }
`;

export const CarouselSlide = styled.div`
  display: flex;
  align-items: center;
  width: 1280px;
  height: 720px;

  @media (max-width: 768px) {
    max-height: 800px;
    width: 100%;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const CarouselInfo = styled.div`
  max-width: 650px;

  @media (max-width: 768px) {
    padding-left: 50px;
  }

  @media (max-width: 320px) {
    padding-left: 120px;
  }
`;

export const CarouselHeader = styled.h1`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 56px;
  text-shadow: black 0 0px 10px;
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

  @media (max-width: 768px) {
    margin-left: -40px;
    font-size: 13px;
    max-width: 270px;
  }
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

  @media (max-width: 768px) {
    margin-left: -10px;
    width: 200px;
  }
`;
