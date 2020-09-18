import React, { useEffect, useState } from 'react';

import Car from '../../Components/Car';
import Cloud from '../../Components/Cloud';
import Question from '../../Components/Question';
import Finish from '../../Components/Finish';

import Levels from '../../Engine/Levels';

import { Frame, CarWrapper, Scenery, Score, Lifes } from './styles';

const initialState = {
  isQuestionOpen: false,
  isFinishOpen: false,
  currentLevel: 0,
  score: 0,
  hearts: 3,
};

export default () => {
  const [state, setState] = useState(initialState);

  const currentQuestion = Levels[state.currentLevel];
  const isFinished = state.isFinishOpen || state.hearts === 0;
  const haveMoreQuestions = !state.isFinishOpen && state.hearts > 0;

  useEffect(() => {
    if (!state.isQuestionOpen) {
      setTimeout(() => {
        setState(prevState => ({ ...prevState, isQuestionOpen: true }));
      }, 1000);
    }
  }, [state.isQuestionOpen]);

  const handleAnswer = isCorrect => {
    const newCurrent = state.currentLevel + 1;
    const isNextValid = newCurrent < Levels.length;
    const nextHearts = isCorrect ? state.hearts : state.hearts - 1;

    setState(prevState => ({
      ...prevState,
      currentLevel: isNextValid ? newCurrent : prevState.currentLevel,
      isFinishOpen: !isNextValid || nextHearts === 0 ? true : false,
      score: isCorrect ? prevState.score + 1 : prevState.score,
      hearts: nextHearts,
    }));

    setTimeout(() => {
      setState(prevState => ({ ...prevState, isPaused: false, isQuestionOpen: false }));
    }, 1000);
  };

  const handlePlayAgain = () => {
    setState({ ...initialState, isQuestionOpen: true });
  };

  return (
    <Frame>
      <Score>Score: {state.score}</Score>
      <Lifes>Vidas: {state.hearts}</Lifes>
      <Scenery>
        <Cloud size={10} />
        <Cloud size={15} />
        <Cloud size={2} />
        <Cloud size={12} />
        <Cloud size={5} />
      </Scenery>
      <CarWrapper>
        <Car />
      </CarWrapper>

      {haveMoreQuestions && currentQuestion && (
        <Question isOpen={state.isQuestionOpen} setAnswer={handleAnswer} data={currentQuestion} />
      )}
      {isFinished && (
        <Finish
          isOpen={state.isFinishOpen}
          state={state}
          levelAmount={Levels.length}
          handlePlayAgain={handlePlayAgain}
        />
      )}
    </Frame>
  );
};
