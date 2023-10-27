import styled from "@emotion/styled";

export const CommonCon = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 40px;
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
`;

export const Title = styled.h2`
  margin-bottom: 24px;

  font-weight: bold;
  font-size: 26px;
`;

export const Paragraph = styled.p`
  margin-bottom: 24px;

  font-size: 16px;
  line-height: 1.63;
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
  }
`;
