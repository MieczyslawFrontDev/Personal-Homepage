import styled from "styled-components";

export const Wrapper = styled.main`
  max-width: 1216px;
  margin: 20px auto;
  
  @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}){
    margin: 0;
  }
`;
