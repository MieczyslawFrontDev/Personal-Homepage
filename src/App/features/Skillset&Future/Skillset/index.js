import { Header, Wrapper, Title, Icon, List, Item } from "../styled";
import skills from "../../../images/Skills.png";

export const Skillset = () => (
  <Wrapper>
    <Header>
      <Title>My skillset includes</Title>
      <Icon src={skills} />
    </Header>
    <List>
   <Item>Semantic & accessible HTML</Item>
   <Item>Markdown</Item>
   <Item>CSS Flexbox</Item>
   <Item>CSS Grid</Item>
   <Item>CSS BEM convention</Item>
   <Item>Responsive Web Design</Item>
   <Item>Git</Item>
   <Item>GitHub</Item>
   <Item>NPM</Item>
   <Item>JavaScript: ES6+</Item>
   <Item>Immutability</Item>
   <Item>React</Item>
   <Item>Styled-Components</Item>
   <Item>React Hooks</Item>
   <Item>React Router</Item>
   <Item>Promises, Async/Await</Item>
   <Item>Working with API (fetch, axios)</Item>
   <Item>Redux (Toolkit)</Item>
   <Item>Redux-Saga</Item>
   <Item>Scrum</Item>
   <Item>Figma</Item>
   <Item>Trello</Item>
   <Item>Teamwork</Item>
    </List>
  </Wrapper>
);
