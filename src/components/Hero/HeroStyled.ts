import styled from "@emotion/styled";

export const CommonCon = styled.div`
  padding-left: 16px;
  padding-right: 16px;

  text-align: center;
`;

export const ImageCon = styled.div`
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  margin-bottom: 24px;

  color: #030303;
  font-size: 26px;
  font-weight: bold;
`;

export const Paragraph = styled.p`
  margin-bottom: 24px;

  color: #7a746e;
  font-size: 16px;
  line-height: 1.63;
`;

export const LinkCon = styled.div`
display: inline-block;

  padding-left: 27px;
  padding-right: 28px;
  padding-top: 8px;
  padding-bottom: 8px;

  background-color: #eb7565;

  border-radius: 28px;

  & > a {
    color: #fff7f0;
    font-weight: bold;
    font-size: 14px;
    line-height: 2;
  }
`;
