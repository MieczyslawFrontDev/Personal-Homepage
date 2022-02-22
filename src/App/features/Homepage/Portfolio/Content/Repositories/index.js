import { Text, LinkContainer, Link, Tile, Title, List } from "./styled";

export const Repositories = ({ repositories }) => (
  <List>
    {repositories.map(({ id, name, description, homepage, html_url }) => (
      <Tile key={id}>
        <Title>{name}</Title>
        <Text>{description}</Text>
        <LinkContainer>
          {homepage && (
            <span>
              Demo:
              <Link href={homepage} target="_blank" rel="noreferrer">
                {homepage}
              </Link>
            </span>
          )}
          <span>
            Code:
            <Link href={html_url} target="_blank" rel="noreferrer">
              Repository
            </Link>
          </span>
        </LinkContainer>
      </Tile>
    ))}
  </List>
);
