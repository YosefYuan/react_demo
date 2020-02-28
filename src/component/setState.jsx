import React from 'react';

class StateDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: 123
    };
  }

  componentDidMount() {
    const { test } = this.props;
    console.log('test', test);
    this.setState((state, props) => ({
      origin: state.origin + props.test
    }));
  }

  render() {
    return <div>{this.state.origin}</div>;
  }
}

export default StateDemo;
