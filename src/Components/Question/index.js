import React, { useState } from 'react';

import Button from '../Button';
import Animation from '../Animation';
import Success from '../../Assets/success.json';
import Error from '../../Assets/error.json';

import { Wrapper, Question, Image, Title, Feedback } from './styles';

export default ({ isOpen, setAnswer, data }) => {
  const [answerState, setAnswerState] = useState('notAnswered');

  const handleAnswer = answerIndex => {
    const isCorrect = data.questions[answerIndex].isCorrect;

    setAnswerState(isCorrect ? 'correct' : 'incorrect');
    setAnswer(isCorrect);

    setTimeout(() => {
      setAnswerState('notAnswered');
    }, 1500);
  };

  return (
    <Wrapper isOpen={isOpen}>
      {answerState === 'notAnswered' && (
        <>
          <Image src={data.image} />
          <Title>{data.title}</Title>
          <Question>
            {data.questions.map((item, i) => (
              <Button onClick={() => handleAnswer(i)}>{item.title}</Button>
            ))}
          </Question>
        </>
      )}

      {answerState === 'correct' && (
        <Feedback>
          <Animation
            options={{ loop: false, autoPlay: false, animationData: Success }}
            width="5em"
            height="5em"
            isPaused={false}
          />
        </Feedback>
      )}

      {answerState === 'incorrect' && (
        <Feedback>
          <Animation
            options={{ loop: false, autoPlay: false, animationData: Error }}
            width="5em"
            height="5em"
            isPaused={false}
          />
        </Feedback>
      )}
    </Wrapper>
  );
};
