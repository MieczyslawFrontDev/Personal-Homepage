import styled from "styled-components";

export const Wrapper = styled.main`
  max-width: 1216px;
  margin: 100px auto;
  
  @media(max-width: ${({theme}) => theme.mobileMax}){
    margin: 0;
  }
`;
