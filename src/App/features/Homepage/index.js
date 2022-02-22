import { Wrapper } from "./styled";
import { ThemeSwitch } from "../../common/ThemeSwitch";
import { Person } from "../../features/Homepage/Person";
import { Skillset } from "../../features/Homepage/Skillset&Future/Skillset";
import { Future } from "../../features/Homepage/Skillset&Future/Future";
import { Portfolio } from "../../features/Homepage/Portfolio";
import { Contact } from "../../features/Homepage/Contact";

export const PersonalHomepage = () => (
  <Wrapper>
    <ThemeSwitch />
    <Person />
    <Skillset />
    <Future />
    <Portfolio />
    <Contact />
  </Wrapper>
);
