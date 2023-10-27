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

export const CombineItemTablet = styled.li`


`
