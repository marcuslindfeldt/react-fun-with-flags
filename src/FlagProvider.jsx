import { Component } from 'react';
import PropTypes from 'prop-types';
import { loadLocalFlags } from './localStorage';

class FlagProvider extends Component {
  static childContextTypes = {
    flags: PropTypes.object,
  };

  static propTypes = {
    children: PropTypes.node.isRequired,
    flags: PropTypes.shape({}).isRequired,
  };

  constructor(props) {
    super(props);

    this.flags = {
      ...props.flags,
      ...loadLocalFlags(),
    };
  }

  getChildContext() {
    return {
      flags: this.flags,
    };
  }

  render() {
    return this.props.children;
  }
}

export default FlagProvider;
