import React from 'react';

import Animation from '../Animation';
import CloudAnimation from '../../Assets/cloud.json';

import { Cloud } from './styles';

export default ({ size }) => {
  return (
    <Cloud size={size}>
      <Animation
        options={{
          loop: true,
          autoplay: true,
          animationData: CloudAnimation,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }}
        width="100%"
        height="100%"
      />
    </Cloud>
  );
};
