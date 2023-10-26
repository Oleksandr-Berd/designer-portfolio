import styled from "@emotion/styled";

export const HeaderStyled = styled.header`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

padding-top: 16px;
padding-left: 16px;
padding-right: 16px;
`;

export const LinkCon = styled.div`
padding-left: 27px;
padding-right: 28px;
padding-top: 8px;
padding-bottom: 8px;

background-color: #000;

border: none;
border-radius: 28px;

  & > a {
    color: #fff7f0;
  }
`;