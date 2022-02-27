import { Header, Wrapper, Title, Icon, List, Item } from "../styled";
import skillsIcon from "../icons/Skills.png";
import { skillsData } from "../skillsData";

export const Skillset = () => (
  <Wrapper>
    <Header>
      <Title>My skillset includes</Title>
      <Icon src={skillsIcon} alt="" />
    </Header>
    <List>
      {skillsData.map((item) => (
        <Item key={item}>{item}</Item>
      ))}
    </List>
  </Wrapper>
);
