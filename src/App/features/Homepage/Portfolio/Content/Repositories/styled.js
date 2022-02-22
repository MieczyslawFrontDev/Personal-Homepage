import styled from "styled-components";

export const List = styled.ul`
  margin-top: 24px;
  max-width: 1216px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;
  padding: 0;
`;

export const Tile = styled.li`
  max-width: 592px;
  border: 6px solid rgba(209, 213, 218, 0.3);
  transition: 0.3s;
  border-radius: 4px;
  padding: 56px;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.tile.background};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);

  &:hover {
    border: 6px solid rgba(209, 213, 218, 0.3);
  }
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;
export const Text = styled.p`
  margin: 24px 0 24px 0;
`;

export const LinkContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
`;

export const Link = styled.a`
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 8px;
  text-decoration: none;
  border-bottom: 1px solid rgb(3 102 214 / 0.2);
`;
