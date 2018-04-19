import React from 'react';
import PropTypes from 'prop-types';

import Flag from './Flag';

const FlagDisabled = ({ children, ...props }) => (
  <Flag {...props}>{matches => (!matches ? children : null)}</Flag>
);

FlagDisabled.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FlagDisabled;
