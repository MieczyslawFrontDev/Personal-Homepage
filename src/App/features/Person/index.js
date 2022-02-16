import { ReactComponent as Message } from "../../images/message.svg";
import {
  Image,
  About,
  Caption,
  Title,
  Text,
  Wrapper,
  Link,
  LinkText,
} from "./styled";

export const Person = () => (
  <Wrapper>
    <Image />
    <About>
      <Caption>This is</Caption>
      <Title>Mieczysław Przytuła</Title>
      <Text>
        👨🏻‍💻 I’m a begining Frontend Developer passionate with React, currently
        looking for new job opportunities.
      </Text>
      <Link
        href="mailto:frontend.dev.pm@gmail.com"
        title="frontend.dev.pm@gmail.com"
      >
        <Message />
        <LinkText>Hire Me</LinkText>
      </Link>
    </About>
  </Wrapper>
);
