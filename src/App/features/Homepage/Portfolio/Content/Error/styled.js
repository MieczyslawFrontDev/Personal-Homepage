import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-gap: 32px;
  text-align: center;
  margin-top: 66px;
  color: ${({theme}) => theme.colors.textSecondary};
`;

export const Header = styled.h3`
  font-weight: 700;
  font-size: 24px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 20px;
  }
`;

export const Paragraph = styled.p`
  font-size: 20px;
  line-height: 1.4;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 16px;
  }
`;
