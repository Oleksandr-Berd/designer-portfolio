import styled from "@emotion/styled";

export const ServiceList = styled.ul`
padding-left: 16px;
padding-right: 16px;
padding-bottom: 100px;

& > li:not(:last-child){
    margin-bottom: 24px;
}
`

export const ServicesItemDouble = styled.li`
& > svg:not(:last-child){
    margin-right: 25px;
}
`