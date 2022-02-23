import styled from "styled-components";
import { ReactComponent as GitHub } from "./icons/github.svg";
import { ReactComponent as Facebook } from "./icons/facebook.svg";
import { ReactComponent as LinkedIn } from "./icons/linkedIn.svg";

export const SocialList = styled.ul`
  display: flex;
  align-items: flex-start;
  list-style: none;
  padding-left: 0;
  margin: 0;
`;

export const Item = styled.li`
  margin-right: 24px;
`;

export const Link = styled.a`

`;

export const GitHubIcon = styled(GitHub)`
  path {
    fill: ${({ theme }) => theme.colors.textSecondary};
  }

  &:hover path {
    transition: 0.3s linear;
    fill: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.mobileMax}) {
    width: 32px;
  }


`;
export const FacebookIcon = styled(Facebook)`
  path {
    fill: ${({ theme }) => theme.colors.textSecondary};
  }

  &:hover path {
    transition: 0.3s linear;
    fill: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.mobileMax}) {
    width: 32px;
  }
`;

export const LinkedInIcon = styled(LinkedIn)`
  path {
    fill: ${({ theme }) => theme.colors.textSecondary};
  }

  &:hover path {
    transition: 0.3s linear;
    fill: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.mobileMax}) {
    width: 32px;
  }
`;
