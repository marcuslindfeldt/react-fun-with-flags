import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { loadLocalFlags } from './localStorage';
import { Provider } from './FlagContext';

class FlagProvider extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    flags: PropTypes.shape({}).isRequired,
  };

  constructor(props) {
    super(props);

    this.state.flags = {
      ...props.flags,
      ...loadLocalFlags(),
    };
  }

  render() {
    return (
      <Provider value={this.state.flags}>
        {this.props.children}
      </Provider>
    );
  }
}

export default FlagProvider;
