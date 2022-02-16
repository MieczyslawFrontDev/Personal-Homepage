import { Header, Wrapper, Title, Icon, List, Item } from "../styled";
import target from "../../../images/Rocket.png";

export const Future = () => (
  <Wrapper>
    <Header>
      <Title>What I want to learn next</Title>
      <Icon src={target} />
    </Header>
    <List>
      <Item>TypeScript</Item>
      <Item>React Native</Item>
      <Item>Node.js</Item>
    </List>
  </Wrapper>
);
