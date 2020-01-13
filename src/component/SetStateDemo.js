import React from "react";

const getApi = () =>
  new Promise(resolve =>
    setTimeout(() => {
      const res = 666;
      console.log("res", res);
      resolve(res);
    }, 1000)
  );
export default class SomeComponent extends React.Component {
  state = {
    count: 0
  };

  handleClick = async () => {
    console.log("count:", this.state.count);
    // 在异步之前的操作被视为一次操作
    this.increaseCount();
    this.increaseCount();
    // Promise.resolve().then(() => {
    //   this.increaseCount();
    // });
    await getApi();
    this.increaseCount();
    this.increaseCount();
    setTimeout(() => {
      console.log("count:", this.state.count);
    });
  };

  increaseCount = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}> Click </button>
        <div> {this.state.count} </div>
      </div>
    );
  }
}
