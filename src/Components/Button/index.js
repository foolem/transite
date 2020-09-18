import React from 'react';

import { Component } from './styles';

export default ({ onClick, children }) => {
  return <Component onClick={onClick}>{children}</Component>;
};
