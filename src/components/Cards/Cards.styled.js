import styled from 'styled-components';

export const Box = styled.div`
  padding-bottom: 20px;
`;

export const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Button = styled.button`
  width: 400px;
  height: 50px;
  border: none;
  margin: 30px auto;
  margin-bottom: 30px;

  display: block;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  background: #f0ce3c;
  &:hover,
  &:focus-visible {
    background: #5cd3a8;
    cursor: pointer;
  }
`;

export const Drop = styled.div`
  margin: 20px auto;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  width: 600px;
`;
