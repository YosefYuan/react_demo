import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.someRoot = null;
  }

  componentDidMount() {
    this.someRoot = this.createElement('div');
    this.someRoot.appendChild(this.el);
  }

  createElement() {
    const ele = document.createElement('div');
    ele.id = 'test';
    document.body.appendChild(ele);
    return ele;
  }

  componentWillUnmount() {
    this.someRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
export default App;
