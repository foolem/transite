import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 50%;
  height: 50%;
  position: absolute;
  top: 2em;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 3em;
  z-index: 99999 !important;
  background-color: white;
  border-radius: 10px;
  border: 1px solid #f1f1f1;
  position: absolute;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: 300ms all ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 2em;
  color: black;
  margin-bottom: 1em;
`;

export const Text = styled.p`
  font-size: 1em;
  color: black;
`;
