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
`;

export const Image = styled.img`
  /* width: 30vw;
  height: 30vw; */
  width: 384px;
  height: 384px;
  border-radius: 50%;

  @media (max-width: 767px) {
    width: 132px;
  }
`;

export const Caption = styled.div`
  margin-top: 64px;
  font-weight: bold;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 130%;
  text-transform: uppercase;
`;
export const Title = styled.h1`
  font-weight: 900;
  font-size: 38px;
  margin-top: 12px;
  margin-bottom: 35px;
  color: ${({ theme }) => theme.colors.headers};
  line-height: 46px;
  letter-spacing: 0.05em;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 140%;
  letter-spacing: 0.05em;
`;

export const StyledButtonLink = styled(ButtonLink)`
  display: inline-flex;
  align-items: center;
  margin-top: 32px;
`;
export const ButtonIcon = styled(EnvelopeIcon)`
  margin-right: 16px;
`;
