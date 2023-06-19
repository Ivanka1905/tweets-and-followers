import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Box = styled.main`
  padding-bottom: 56px;
  background: #f0e6fa;
`;

export const MainImg = styled.div`
  padding: 20px;
  height: 450px;
  background-image: url(${require('../images/picture.png')});
  background-repeat: no-repeat;
  background-size: 462px 252px;
  background-position: center;
`;
export const TitleTweets = styled.h1`
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 20px;
  text-align: center;
  background: #5cd3a8;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  font-family: 'Montserrat';
  font-style: normal;
  color: #373737;
`;

export const Title = styled.h1`
  margin: 0px;
  padding: 30px;
  text-align: center;
  background: #5cd3a8;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  font-family: 'Montserrat';
  font-style: normal;
  color: #373737;
`;

export const NavLinkButtonSmall = styled(NavLink)`
  width: 200px;
  border: none;
  text-align: center;
  margin: 0;
  position: sticky;
  top: 20px;
  padding: 15px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  color: white;
  background: #fa7b57;
  &:hover,
  &:focus-visible {
    background: #fac957;
  }
`;

export const NavLinkButton = styled(NavLink)`
  width: 600px;
  border: none;
  margin: auto;
  display: block;
  text-align: center;
  padding: 21px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 24px;
  color: white;
  background: #fa7b57;
  &:hover,
  &:focus-visible {
    background: #fac957;
  }
`;

export const Footer = styled.div`
  padding: 10px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;

export const Span = styled.a`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #ebd8ff;
  font-family: 'Montserrat';
  font-size: 14px;
`;
