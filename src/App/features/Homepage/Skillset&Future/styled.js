import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: 1216px;
  background: ${({ theme }) => theme.colors.white};
  margin-top: 73px;
  padding: 32px;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
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
  line-height: 36px;
  text-align: center;
  letter-spacing: 0.05em;
  margin: 0 16px 0 0;
  color: ${({ theme }) => theme.colors.mainShaft};
`;
export const Icon = styled.img`
  width: 27px;
  height: 27px;
`;
export const List = styled.ul`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-left: 20px;
`;
export const Item = styled.li`
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.slateGray};

  &::marker {
    color: ${({ theme }) => theme.colors.scienceBlue};
  }
`;
