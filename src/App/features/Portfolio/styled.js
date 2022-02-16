import styled from "styled-components";
import { ReactComponent as GitHub } from "../../images/github.svg";

export const Wrapper = styled.section`
  max-width: 1216px;
  margin-top: 72px;
`;
export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Caption = styled.h2`
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.mineShaft};
  margin: 13px 0 8px 0;
`;
export const Paragraph = styled.p`
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
  margin: 0;
  color: ${({ theme }) => theme.colors.mineShaft};
`;
export const Projects = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
  margin-top: 24px;
`;

export const GitHubIcon = styled(GitHub)`
  path {
    fill: ${({ theme }) => theme.colors.scienceBlue};
  }
`;
