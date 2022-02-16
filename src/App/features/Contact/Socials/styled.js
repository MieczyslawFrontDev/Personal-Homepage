import styled from "styled-components";
import { ReactComponent as GitHub } from "../../../images/github.svg";
import { ReactComponent as Facebook } from "../../../images/facebook.svg";
import { ReactComponent as LinkedIn } from "../../../images/linkedIn.svg";

export const SocialList = styled.ul`
  max-width: 192px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  list-style: none;
  padding-left: 0;
  margin: 0;
`;

export const Item = styled.li`
  margin-right: 24px;
`;

export const Link = styled.a`
  &:hover {
    color: ${({ theme }) => theme.colors.scienceBlue};
  }
`;

export const GitHubIcon = styled(GitHub)`
&:hover path {
    transition: 0.3s linear;
    fill: ${({ theme }) => theme.colors.scienceBlue}
}
`
export const FacebookIcon = styled(Facebook)`
&:hover path {
    transition: 0.3s linear;
    fill: ${({ theme }) => theme.colors.scienceBlue}
}
`
export const LinkedInIcon = styled(LinkedIn)`
&:hover path {
    transition: 0.3s linear;
    fill: ${({ theme }) => theme.colors.scienceBlue}
}
`
