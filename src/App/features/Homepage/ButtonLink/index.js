import styled from "styled-components";

export const ButtonLink = styled.a`
  padding: 12px 16px;
  background: ${({ theme }) => theme.colors.buttonLink.background};
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.buttonLink.text};
  transition: box-shadow 0.5s;

  &:hover {
    box-shadow: 2px -2px 0px #8cc2ff,
    -2px 2px 0px #8cc2ff, 2px 2px 0px #8cc2ff,
    -2px -2px 0px #8cc2ff;
  }
`;