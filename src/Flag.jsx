import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './FlagContext';

class Flag extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
  };

  render() {
    return (
      <Consumer>
        {flags => {
          const flag = flags[this.props.name];

          if (typeof flag === 'undefined') {
            // eslint-disable-next-line no-console
            console.error('Flag name does not exist');
          }

          return this.props.children(flag);
        }}
      </Consumer>
    );
  }
}

export default Flag;
