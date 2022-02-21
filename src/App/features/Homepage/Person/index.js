import { email } from "../../../../email";
import { Image, Caption, Title, Text, Wrapper } from "./styled";
import { StyledButtonLink } from "./styled";
import { ButtonIcon } from "./styled";
import Avatar from "./images/avatar.jpg";

export const Person = () => (
  <Wrapper>
    <Image src={Avatar} alt="Mieczysław Przytuła"/>
    <div>
      <Caption>This is</Caption>
      <Title>Mieczysław Przytuła</Title>
      <Text>
        👨🏻‍💻 I’m a begining Frontend Developer passionate with React, currently
        looking for new job opportunities.
      </Text>
      <StyledButtonLink href={`mailto:${email}`} title={email}>
        <ButtonIcon />
        Hire Me
      </StyledButtonLink>
    </div>
  </Wrapper>
);
