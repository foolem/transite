import React from 'react';

import Animation from '../Animation';
import CarAnimation from '../../Assets/car.json';

import { Car, StreetLine } from './styles';

export default () => {
  return (
    <Car>
      <Animation
        options={{
          loop: true,
          autoplay: true,
          animationData: CarAnimation,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }}
        width="100%"
        height="100%"
      />
      <StreetLine />
    </Car>
  );
};
