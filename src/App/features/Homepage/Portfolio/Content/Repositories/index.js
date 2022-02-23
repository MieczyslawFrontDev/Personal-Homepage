import { Text, LinkContainer, Link, Tile, Title, List, Links } from "./styled";

export const Repositories = ({ repositories }) => (
  <List>
    {repositories.map(({ id, name, description, homepage, html_url }) => (
      <Tile key={id}>
        <Title>{name}</Title>
        <Text>{description}</Text>
        <LinkContainer>
          {!homepage && (
            <Links>
              Demo:
              <Link href={homepage} target="_blank" rel="noreferrer">
                Application
              </Link>
            </Links>
          )}
          <Links>
            Code:
            <Link href={html_url} target="_blank" rel="noreferrer">
              Repository
            </Link>
          </Links>
        </LinkContainer>
      </Tile>
    ))}
  </List>
);
