import styled from "@emotion/styled";

export const CommonCon = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 40px;

  @media (min-width: 768px) {
    padding-left: 39px;
    padding-right: 39px;
    padding-bottom: 56px;
  }
`;

export const InnerCon = styled.div`
  padding-top: 49px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 48px;

  text-align: center;

  color: #fff7f0;
  background-color: #030303;

  border-radius: 10px;

  @media (min-width: 768px) {
    padding-left: 75px;
    padding-right: 75px;
    padding-top: 56px;
    padding-bottom: 64px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 24px;

  font-weight: bold;
  font-size: 26px;

  @media (min-width: 768px) {
    margin-bottom: 26px;

    font-size: 32px;
    line-height: 1.25;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 24px;

  font-size: 16px;
  line-height: 1.63;

  @media (min-width: 768px){
width: 520px;

    margin-bottom: 26px;

    font-size: 18px;
    line-height: 1.56;
  }
`;

export const LinkCon = styled.div`
  display: inline-block;

  padding-left: 28px;
  padding-right: 28px;
  padding-top: 8px;
  padding-bottom: 8px;

  background-color: #eb7565;

  border-radius: 28px;

  & > a {
    color: #fff7f0;
    font-size: 14px;
    line-height: 2;

    @media (min-width: 768px){
      font-size: 16px;
      line-height: 1.75;
    }
  }

  @media (min-width: 768px){
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 45px;
    padding-right: 45px;
  }
`;
