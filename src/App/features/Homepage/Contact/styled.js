import styled from "styled-components";

export const Wrapper = styled.footer`
  margin-top: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin-top: 48px;
  }
`;
export const Caption = styled.span`
  font-size: 12px;
  line-height: 130%;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.headers};
`;

export const Email = styled.h2`
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.headers};
  cursor: pointer;

  @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}){
    font-size: 18px;
  }

  &:hover {
    transition: 0.3s linear;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
export const Text = styled.p`
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
  margin: 24px 0 56px 0;
  color: ${({ theme }) => theme.colors.textSecondary};

  @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}){
    font-size: 14px;
    margin-bottom: 40px;
  }
`;
