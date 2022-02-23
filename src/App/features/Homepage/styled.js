import styled from "styled-components";

export const Wrapper = styled.main`
  max-width: 1216px;
  margin: 115px auto;
  
  @media(max-width: ${({theme}) => theme.mobileMax}){
    padding: 21px 16px;
    margin: 0;
  }
`;
