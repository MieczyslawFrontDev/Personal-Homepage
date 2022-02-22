import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: 691px;
  margin-top: 120px;
`;
export const Caption = styled.span`
  font-size: 12px;
  line-height: 130%;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.headers};
`;

export const Email = styled.h2`
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.headers};
  cursor: pointer;

  &:hover {
    transition: 0.3s linear;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
export const Text = styled.p`
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
  margin: 24px 0 56px 0;
  color: ${({ theme }) => theme.colors.textSecondary};

`;
