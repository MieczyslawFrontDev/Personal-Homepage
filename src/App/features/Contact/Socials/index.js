import { socialsData } from "./socialsData";
import { SocialList, Item, Link } from "./styled";

export const Socials = () => (
  <SocialList>
    {socialsData.map(({ name, url, Icon }) => (
      <Item key={name}>
        <Link href={url} title={name} target="_blank" rel="noreferrer">
          <Icon />
        </Link>
      </Item>
    ))}
  </SocialList>
);
