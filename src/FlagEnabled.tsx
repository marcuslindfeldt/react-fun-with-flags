import React, { FunctionComponent } from 'react';
import Flag, { FlagProps } from './Flag';

const FlagEnabled: FunctionComponent<FlagProps> = ({ children, ...props }) => (
  <Flag {...props}>{matches => (matches ? children : null)}</Flag>
);

export default FlagEnabled;
