import { Wrapper, Caption, Paragraph, Header, Projects, GitHubIcon } from "./styled";
// import { Tile } from "./Tile";

export const Portfolio = () => (
  <Wrapper>
    <Header>
      <GitHubIcon />
      <Caption>Portfolio</Caption>
      <Paragraph>My recent projects</Paragraph>
    </Header>
    <Projects>
      {/* <Tile /> */}
    </Projects>
  </Wrapper>
);
