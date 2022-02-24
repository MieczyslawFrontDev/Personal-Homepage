import styled from "styled-components";

export const List = styled.ul`
margin-top: 24px;
padding: 0;
list-style: none;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 32px;

@media (max-width: ${({ theme }) => theme.mobileMax}) {
    grid-template-columns: 1fr;
    grid-gap: 24px;
  }
`
export const Tile = styled.li`
  padding: 56px;
  border: 6px solid ${({ theme }) => theme.colors.tile.border};
  transition: 0.3s;
  border-radius: 4px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.tile.background};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);

  &:hover {
    border: 6px solid ${({ theme }) => theme.colors.tile.borderHover};
  }

  @media (max-width: ${({ theme }) => theme.mobileMax}) {
    padding: 20px;
    margin: 0;
  }
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.mobileMax}) {
    font-size: 16px;
  }
`;

export const Text = styled.p`
  line-height: 140%;
  margin: 24px 0 24px 0;

  @media (max-width: ${({ theme }) => theme.mobileMax}) {
    font-size: 14px;
  }
`;

export const LinkContainer = styled.div`
  display: grid;
  grid-gap: 10px;

  @media (max-width: ${({ theme }) => theme.mobileMax}){
    font-size: 14px;
  }
`;

export const Links = styled.span`
display: grid;
grid-template-columns: 4em 1fr;
`
export const Link = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  border-bottom: 1px solid rgb(3 102 214 / 0.2);

  &:hover{
    border-bottom: 1px solid rgb(3 102 214);
  }
`;
