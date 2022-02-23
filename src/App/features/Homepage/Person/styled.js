import styled from "styled-components";
import { ButtonLink } from "../ButtonLink";
// import myPhoto from "./images/Photo.jpg";
import { ReactComponent as EnvelopeIcon } from "./images/envelope.svg";

export const Wrapper = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 66px;
  max-width: 1089px;
  margin-top: -30px;

  @media (max-width: ${({ theme }) => theme.mobileMax}) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`;

export const Image = styled.img`
  /* width: 30vw;
  height: 30vw; */
  width: 384px;
  height: 384px;
  border-radius: 50%;

  @media (max-width: ${({ theme }) => theme.mobileMax}) {
    width: 132px;
    height: 132px;
    margin: 32px 0 20px 0;
  }
`;

export const About = styled.div`
  @media (max-width: ${({ theme }) => theme.mobileMax}) {
    margin: 0;
  }
`;

export const Caption = styled.div`
  margin-top: 64px;
  font-weight: bold;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 130%;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.mobileMax}) {
    margin-top: 0 ;
  }
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 38px;
  margin-top: 12px;
  color: ${({ theme }) => theme.colors.headers};
  line-height: 46px;
  letter-spacing: 0.05em;

  @media(max-width: ${({theme}) => theme.mobileMax}){
    font-size: 22px;
    margin-top: 8px;
  }
`;

export const Text = styled.p`
  margin: 36px 0 32px 0;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 140%;
  letter-spacing: 0.05em;

  @media(max-width: ${({theme}) => theme.mobileMax}){
    font-size: 18px;
    margin: 16px 0 24px 0; 
  }
`;

export const StyledButtonLink = styled(ButtonLink)`
  display: inline-flex;
  align-items: center;
`;

export const ButtonIcon = styled(EnvelopeIcon)`
  margin-right: 16px;
`;
