import React from 'react';

import Button from '../Button';

import { Wrapper, Title, Text } from './styles';

export default ({ isOpen, state, levelAmount, handlePlayAgain }) => {
  return (
    <Wrapper isOpen={isOpen}>
      <Title>Fim</Title>
      <Text>
        Seu score foi: {state.score} de {levelAmount}
      </Text>

      <Button onClick={handlePlayAgain}>Jogar novamente</Button>
    </Wrapper>
  );
};
