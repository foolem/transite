import styled from 'styled-components';

export const Frame = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
`;

export const CarWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: flex-end;
  flex: 1;
  padding-top: 5em;
  height: 30%;
`;

export const Scenery = styled.div`
  display: flex;
  flex: 1;
  height: 70%;
  justify-content: space-around;

  padding: 2em;
`;

export const Score = styled.div`
  position: absolute;
  right: 1em;
  top: 1em;
  font-size: 1.5em;
  z-index: 999;
`;

export const Lifes = styled.div`
  position: absolute;
  right: 1em;
  top: 3em;
  font-size: 1.5em;
  z-index: 999;
`;
