import styled from 'styled-components';

export const CardItem = styled.div`
  width: 380px;
  height: 460px;
  border-radius: 20px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;

export const CardContentTop = styled.div`
  padding: 20px 20px 0px 20px;
  height: 196px;
  background-image: url(${require('../../images/picture.png')});
  background-repeat: no-repeat;
  background-size: 308px 168px;
  background-position: center;
`;

export const Line = styled.div`
  position: relative;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;
export const Circle = styled.div`
  position: absolute;
  top: -500%;
  left: 150px;
  width: 64px;
  height: 64px;
  border: 8px solid #ebd8ff;
  border-radius: 50%;
  background: rgba(87, 54, 163, 1);
  overflow: hidden;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const CardContentBottom = styled.div`
  padding: 34px 36px 36px 36px;
  text-align: center;
`;

export const List = styled.ul`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  display: flex;
  gap: 16px;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 196px;
  height: 50px;
  border: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  background: #ebd8ff;
  &:hover,
  &:focus-visible {
    background: #5cd3a8;
    cursor: pointer;
  }
`;
