// @flow strict-local

import React, { Component } from 'react';

// Types
import type { Node } from 'react';

// Component
import SystemError from '../components/system-error';

type Props = {
  children: Node,
}

type State = {|
  hasError: boolean,
|};

class ErrorBoundary extends Component<Props, State> {
  state = { hasError: false };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <SystemError />
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
