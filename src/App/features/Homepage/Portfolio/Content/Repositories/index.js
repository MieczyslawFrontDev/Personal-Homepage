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
              <span>
                <Link href={homepage} target="_blank" rel="noreferrer">
                  Application
                </Link>
              </span>
            </Links>
          )}
          <Links>
            Code:
            <span>
              <Link href={html_url} target="_blank" rel="noreferrer">
                Repository
              </Link>
            </span>
          </Links>
        </LinkContainer>
      </Tile>
    ))}
  </List>
);
