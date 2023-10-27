import styled from "@emotion/styled";

export const CommonCon = styled.div`
  padding-bottom: 32px;
  padding-left: 16px;
  padding-right: 16px;

  text-align: center;

  @media (min-width: 768px) {
    padding-bottom: 64px;
    padding-left: 38px;
    padding-right: 38px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 16px;

  color: #030303;
  font-size: 36px;
  font-weight: bold;

  @media (min-width: 768px) {
    margin-bottom: 27px;
    font-size: 44px;
  }
`;

export const Paragraph = styled.p`
  padding-left: 35px;
  padding-right: 35px;

  color: #7a746e;
  font-size: 16px;
  line-height: 1.63;

  @media (min-width: 768px) {
    padding-left: 75px;
    padding-right: 75px;

    font-size: 18px;
    line-height: 1.56;
  }
`;
