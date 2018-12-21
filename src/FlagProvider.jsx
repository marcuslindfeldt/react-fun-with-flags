import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { loadLocalFlags } from './localStorage';
import FlagContext from './FlagContext';

class FlagProvider extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    flags: PropTypes.shape({}).isRequired,
  };

  state = {
    flags: {}
  }

  constructor(props) {
    super(props);

    this.state.flags = {
      ...props.flags,
      ...(loadLocalFlags() || {}),
    };
  }

  render() {
    return (
      <FlagContext.Provider value={this.state.flags}>
        {this.props.children}
      </FlagContext.Provider>
    );
  }
}

export default FlagProvider;
