import styled from "styled-components";

export const Wrapper = styled.section`
  margin-top: 73px;
  padding: 32px;
  box-shadow:
  0px -2px 50px rgba(9, 10, 51, 0.02),
  0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  border: 6px solid ${({ theme }) => theme.colors.tile.border};
  background: ${({ theme }) => theme.colors.tile.background};
  transition: 0.3s;

  &:hover {
    border: 6px solid ${({ theme }) => theme.colors.tile.borderHover};
  }

  @media(max-width: ${({theme}) => theme.mobileMax}){
   padding: 16px;
   margin-top: 48px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(209, 213, 218, 0.3);
`;
export const Title = styled.h2`
  font-weight: 900;
  font-size: 30px;
  text-align: center;
  margin: 0 16px 0 0;
  color: ${({ theme }) => theme.colors.headers};

  @media(max-width: ${({theme}) => theme.mobileMax}){
    font-size: 18px;
  }
`;
export const Icon = styled.img`
  width: 27px;
  height: 27px;
`;

export const List = styled.ul`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px 32px;
  padding: 0;

  @media(max-width: ${({theme}) => theme.mobileMax}){
    grid-template-columns: 1fr;
    padding: 0;
  }
`;

export const Item = styled.li`
  font-size: 18px;
  line-height: 140%;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-left: 20px;

  &::marker {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media(max-width: ${({theme}) => theme.mobileMax}){
    font-size: 14px;
  }
`;
