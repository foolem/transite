import trafficRed from '../Assets/traffic-red.png';
import trafficYellow from '../Assets/traffic-yellow.png';
import trafficGreen from '../Assets/traffic-green.png';

export default [
  {
    title: 'O que você deve fazer?',
    image: trafficRed,
    questions: [
      {
        title: 'Parar',
        isCorrect: true,
      },
      {
        title: 'Seguir',
        isCorrect: false,
      },
      {
        title: 'Virar a direita',
        isCorrect: false,
      },
    ],
  },
  {
    title: 'O que você deve fazer?',
    image: trafficGreen,
    questions: [
      {
        title: 'Parar',
        isCorrect: false,
      },
      {
        title: 'Virar a esquerda',
        isCorrect: false,
      },
      {
        title: 'Seguir',
        isCorrect: true,
      },
    ],
  },
  {
    title: 'O que você deve fazer?',
    image: trafficYellow,
    questions: [
      {
        title: 'Buzinar',
        isCorrect: false,
      },
      {
        title: 'Seguir',
        isCorrect: false,
      },
      {
        title: 'Reduzir',
        isCorrect: true,
      },
    ],
  },
];
