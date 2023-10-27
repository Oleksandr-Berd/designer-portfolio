import styled from "@emotion/styled";
import { Carousel } from "react-bootstrap";

export const CommonCon = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 100px;

  text-align: center;

  @media (min-width: 768px){
    padding-bottom: 120px;
  }

 @media (min-width: 1440px){
  padding-bottom: 88px;
 }
`;

export const Title = styled.h2`
  margin-bottom: 32px;

  color: #030303;
  font-size: 24px;

  @media (min-width: 768px) {
    margin-bottom: 56px;

    font-size: 32px;
    line-height: 1.25;
  }
`;

export const Item = styled(Carousel.Item)`
  @media (min-width: 1440px) {
    &&& > img{height: 360px;}
  }
`;

export const CarouselStyled = styled(Carousel)`
  @media (min-width: 1440px) {
    &&& {
      height: 360px;
    }
  }
`;
  


