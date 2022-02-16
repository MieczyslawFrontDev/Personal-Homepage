import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 592px;
  border: 6px solid rgba(209, 213, 218, 0.3);
  box-shadow: 
  0px -2px 50px rgba(9, 10, 51, 0.02),
  0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  padding: 56px;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.slateGrey};
`;
export const Title = styled.h3`
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.scienceBlue};
  margin: 0;
`;
export const Text = styled.p`
margin: 24px 0 24px 0;
`
export const LinkContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
`;
export const Link = styled.a`
  align-items: center;
  color: ${({ theme }) => theme.colors.scienceBlue};
  margin-left: 8px;
  text-decoration: none;
  border-bottom: 1px solid rgb(3 102 214 / 0.2);  
`;
