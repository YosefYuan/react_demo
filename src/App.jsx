import React from 'react';
import SetStateDemo from './component/SetState';
import ErrorBoundary from './component/ErrorBoundary';
class App extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <SetStateDemo test={123}></SetStateDemo>
      </ErrorBoundary>
    );
  }
}
export default App;
