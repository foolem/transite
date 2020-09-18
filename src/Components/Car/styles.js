import styled from 'styled-components';

export const Car = styled.div`
  width: 15em;
  height: 10em;
  position: relative;
`;

export const StreetLine = styled.div`
  position: absolute;
  bottom: 1.5em;
  left: 10em;
  height: 2px;
  width: ${window.innerWidth - 200}px;
  background-color: rgb(88, 89, 91);
`;
