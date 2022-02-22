import styled from "styled-components";
import { ReactComponent as GitHub } from "../Portfolio/github_blue.svg";

export const Wrapper = styled.section`
  margin-top: 72px;
  display: grid;
  justify-items: center;
`;

export const Header = styled.header`
  text-align: center;
`;

export const Caption = styled.h2`
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  margin: 13px 0 8px 0;
  color: ${({ theme }) => theme.colors.headers};
`;

export const Paragraph = styled.p`
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
  margin: 0;
  color: ${({ theme }) => theme.colors.headers};
`;

export const GitHubIcon = styled(GitHub)`
  path {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;
