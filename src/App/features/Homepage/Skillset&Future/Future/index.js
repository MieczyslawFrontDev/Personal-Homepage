import { Header, Wrapper, Title, Icon, List, Item } from "../styled";
import rocketIcon from "../icons/Rocket.png";
import { nextSkillsData } from "../skillsData";

export const Future = () => (
  <Wrapper>
    <Header>
      <Title>What I want to learn next</Title>
      <Icon src={rocketIcon} />
    </Header>
    <List>
      {nextSkillsData.map(item => (
        <Item key={item}>{item}</Item>
      ))}
    </List>
  </Wrapper>
);