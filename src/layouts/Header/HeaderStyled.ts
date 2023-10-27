import styled from "@emotion/styled";

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 32px;

  @media (min-width: 768px) {
    padding-top: 34px;
    padding-bottom: 64px;
    padding-left: 39px;
    padding-right: 40px;

    & > svg {
      width: 64px;
      height: 64px;
    }
  }
`;

export const LinkCon = styled.div`
  padding-left: 27px;
  padding-right: 28px;
  padding-top: 8px;
  padding-bottom: 8px;

  background-color: #030303;

  border: none;
  border-radius: 28px;

@media (min-width: 768px){
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 45px;
  padding-right: 45px;
}

  & > a {
    color: #fff7f0;
    font-weight: bold;
    font-size: 14px;
    line-height: 2;

    @media (min-width: 768px){
      font-size: 16px;
      line-height: 1.63;
    }
  }
`;
