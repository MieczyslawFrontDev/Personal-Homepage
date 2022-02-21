import { Header, Paragraph, Wrapper } from "./styled";
import { ReactComponent as DangerIcon } from "./danger.svg";
import { ButtonLink } from "../../../ButtonLink";

export const ErrorBox = () => (
  <Wrapper>
    <DangerIcon />
    <Header>Ooops! Something went&nbsp;wrong...</Header>
    <Paragraph>Sorry, failed to load Github&nbsp;projects.<br/> You can check them directly&nbsp;on&nbsp;Github.</Paragraph>
    <ButtonLink href="https://github.com/MieczyslawFrontDev" target="_blank">Go to Github</ButtonLink>
  </Wrapper>
);