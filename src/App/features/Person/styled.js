import styled from "styled-components";
import myPhoto from "../../images/Photo.jpg";

export const Wrapper = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 66px;
  max-width: 1089px;
`;

export const Image = styled.img`
  background-image: url(${myPhoto});
  background-size: cover;
  background-position: center;
  width: 30vw;
  width: 384px;
  height: 384px;
  border-radius: 50%;

  @media(max-width: 767px){
    width: 132px;
    height: 132px;
  }
`;

export const About = styled.div`
  display: grid;
  grid-template-columns: column;
  align-content: center;
  max-width: 633px;
`;
export const Caption = styled.span`
  font-weight: bold;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.slateGray};
  line-height: 130%;
  text-transform: uppercase;
`;
export const Title = styled.h1`
  font-weight: 900;
  font-size: 38px;
  margin-top: 12px;
  margin-bottom: 35px;
  color: ${({ theme }) => theme.colors.mainShaft};
  line-height: 46px;
  letter-spacing: 0.05em;
`;

export const Text = styled.p`
  margin-top: 0;
  margin-bottom: 32px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.slateGray};
  line-height: 140%;
  letter-spacing: 0.05em;
`;
export const Link = styled.a`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  max-width: 154px;
  padding: 12px 16px;
  background: ${({ theme }) => theme.colors.scienceBlue};
  border-radius: 4px;
  text-decoration: none;

  &:hover {
    box-shadow: 2px -2px 0px #8cc2ff,
    -2px 2px 0px #8cc2ff, 2px 2px 0px #8cc2ff,
    -2px -2px 0px #8cc2ff;
  }
`;

export const LinkText = styled.span`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.white};
`;