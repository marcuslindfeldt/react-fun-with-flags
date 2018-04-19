import { Component } from 'react';
import PropTypes from 'prop-types';

class Flag extends Component {
  static contextTypes = {
    flags: PropTypes.object,
  };

  static propTypes = {
    children: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
  };

  render() {
    const flag = this.context.flags[this.props.name];

    if (typeof flag === 'undefined') {
      // eslint-disable-next-line no-console
      console.error('Flag name does not exist');
    }

    return this.props.children(flag);
  }
}

export default Flag;
