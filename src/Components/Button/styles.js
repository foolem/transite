import styled from 'styled-components';

export const Component = styled.button`
  min-width: 10em;
  min-height: 5em;
  border-radius: 5px;
  border: 0;
  background-color: orange;
  color: blackr;
  font-weight: bold;
  margin: 0.5em;
  transition: 100ms all ease-in-out;

  &:hover {
    background-color: #e79f1c;
    cursor: pointer;
  }
`;
