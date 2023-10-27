import styled from "@emotion/styled";

export const ServiceList = styled.ul`
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 100px;

  & > li:not(:last-child) {
    margin-bottom: 24px;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    padding-bottom: 120px;
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);

    padding-left: 165px;
    padding-right: 165px;
    padding-bottom: 136px;
  }
`;

export const ServicesItemDouble = styled.li`
& > svg:not(:last-child){
    margin-right: 25px;
}
`

export const ItemDoubleTablet = styled.div`
margin-bottom: 24px;

& > svg:not(:last-child){
    margin-right: 23px;
}
`

export const CombineItemDesktop = styled.li`
  & > svg:not(:last-child) {
    margin-bottom: 24px;
  }

`;
