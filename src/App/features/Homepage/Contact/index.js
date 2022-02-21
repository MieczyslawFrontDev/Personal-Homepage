import { contactText } from "./ContactText";
import { Socials } from "./Socials";
import { Caption, Email, Text, Wrapper } from "./styled";

export const Contact = () => (
  <Wrapper>
    <Caption>Let's talk</Caption>
    <Email>frontend.dev.pm@gmail.com</Email>
    <Text>{contactText}</Text>
    <Socials />
  </Wrapper>
);
