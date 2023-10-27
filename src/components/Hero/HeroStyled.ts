import styled from "@emotion/styled";

export const CommonCon = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 100px;

  text-align: center;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-left: 0;
  }

  @media (min-width: 1440px) {
    justify-content: space-between;

    padding-left: 165px;
    padding-right: 165px;
    padding-bottom: 88px;
  }
`;

export const ImageCon = styled.div`
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 69px;
  }
`;

export const ContentCon = styled.div`
  text-align: left;
`;

export const Title = styled.h2`
  margin-bottom: 24px;

  color: #030303;
  font-size: 26px;
  font-weight: bold;

  @media (min-width: 768px) {
    width: 319px;

    font-size: 32px;
    line-height: 1.25;
  }

  @media (min-width: 1440px) {
    width: 500px;

    margin-bottom: 34px;

    font-size: 40px;
    line-height: 1.28;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 24px;

  color: #7a746e;
  font-size: 16px;
  line-height: 1.63;

  @media (min-width: 768px) {
    width: 319px;

    font-size: 18px;
    line-height: 1.56;
  }

  @media (min-width: 1440px) {
    margin-bottom: 32px;

    width: 500px;
  }
`;

export const LinkCon = styled.div`
  display: inline-block;

  padding-left: 27px;
  padding-right: 28px;
  padding-top: 8px;
  padding-bottom: 8px;

  background-color: #eb7565;

  border-radius: 28px;

  @media (min-width: 768px) {
    padding-left: 45px;
    padding-right: 45px;
    padding-top: 14px;
    padding-bottom: 14px;
  }

  & > a {
    color: #fff7f0;
    font-weight: bold;
    font-size: 14px;
    line-height: 2;

    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 1.75;
    }
  }

  @media (min-width: 1440px) {
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #f6a560;
      cursor: pointer;
      transition: background-color 0.3s ease-in-out;
    }
  }
`;
