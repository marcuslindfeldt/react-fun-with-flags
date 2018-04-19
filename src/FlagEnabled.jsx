import React from 'react';
import PropTypes from 'prop-types';

import Flag from './Flag';

const FlagEnabled = ({ children, ...props }) => (
  <Flag {...props}>{matches => (matches ? children : null)}</Flag>
);

FlagEnabled.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FlagEnabled;
