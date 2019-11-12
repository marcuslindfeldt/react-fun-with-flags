import React, { FunctionComponent } from 'react';
import Flag, { FlagProps } from './Flag';

const FlagDisabled: FunctionComponent<FlagProps> = ({ children, ...props }) => (
  <Flag {...props}>{matches => (!matches ? children : null)}</Flag>
);

export default FlagDisabled;
