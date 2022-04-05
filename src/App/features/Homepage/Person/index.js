import { email } from "../../../../email";
import { Image, Caption, Title, Text, Wrapper, About } from "./styled";
import { StyledButtonLink } from "./styled";
import { ButtonIcon } from "./styled";

export const Person = () => (
  <Wrapper>
    <Image />
    <About>
      <Caption>This is</Caption>
      <Title>Mieczysław Przytuła</Title>
      <Text>
        👨🏻‍💻 I’m a begining Frontend Developer passionate with React, currently
        looking for new job opportunities. 😉
      </Text>
      <StyledButtonLink href={`mailto:${email}`} title={email}>
        <ButtonIcon />
        Hire Me
      </StyledButtonLink>
    </About>
  </Wrapper>
);
