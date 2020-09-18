import trafficRed from '../Assets/traffic-red.png';
import trafficYellow from '../Assets/traffic-yellow.png';
import trafficGreen from '../Assets/traffic-green.png';
import dontPark from '../Assets/dontPark.jpeg';
import turnLeft from '../Assets/turnLeft.png';
import dontTurnLeft from '../Assets/dontTurnLeft.png';
import lombada from '../Assets/lombada.png';
import park from '../Assets/park.png';
import pistaEscorregadia from '../Assets/pista-escorregadia.jpg';
import stop from '../Assets/stop.jpg';

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
  {
    title: 'O que a placa significa?',
    image: dontPark,
    questions: [
      {
        title: 'Lombada',
        isCorrect: false,
      },
      {
        title: 'Vire a esquerda',
        isCorrect: false,
      },
      {
        title: 'Não estacione',
        isCorrect: true,
      },
    ],
  },
  {
    title: 'O que a placa significa?',
    image: turnLeft,
    questions: [
      {
        title: 'Vire a direita',
        isCorrect: false,
      },
      {
        title: 'Vire a esquerda',
        isCorrect: true,
      },
      {
        title: 'Estacione',
        isCorrect: false,
      },
    ],
  },
  {
    title: 'O que a placa significa?',
    image: lombada,
    questions: [
      {
        title: 'Lombada',
        isCorrect: true,
      },
      {
        title: 'Vire a esquerda',
        isCorrect: false,
      },
      {
        title: 'Estacione',
        isCorrect: false,
      },
    ],
  },
  {
    title: 'O que a placa significa?',
    image: park,
    questions: [
      {
        title: 'Permitido estacionar',
        isCorrect: true,
      },
      {
        title: 'Dê a preferência',
        isCorrect: false,
      },
      {
        title: 'Não estacione',
        isCorrect: false,
      },
    ],
  },
  {
    title: 'O que a placa significa?',
    image: pistaEscorregadia,
    questions: [
      {
        title: 'Semáforo a frente',
        isCorrect: false,
      },
      {
        title: 'Pare',
        isCorrect: false,
      },
      {
        title: 'Pista escorregadia',
        isCorrect: true,
      },
    ],
  },
  {
    title: 'O que a placa significa?',
    image: stop,
    questions: [
      {
        title: 'Pare',
        isCorrect: true,
      },
      {
        title: 'Vire a esquerda',
        isCorrect: false,
      },
      {
        title: 'Lombada',
        isCorrect: false,
      },
    ],
  },
  {
    title: 'O que a placa significa?',
    image: dontTurnLeft,
    questions: [
      {
        title: 'Pista escorregadia',
        isCorrect: false,
      },
      {
        title: 'Proibido virar a esquerda',
        isCorrect: true,
      },
      {
        title: 'Vire a esquerda',
        isCorrect: false,
      },
    ],
  },
];
