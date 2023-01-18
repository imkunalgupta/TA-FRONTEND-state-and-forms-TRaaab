import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      step: 5,
      max: 15,
    };
  }
  handleIncrement = () => {
    let { step, max, count } = this.state;
    this.setState({
      count: count + step > max ? count : count + step,
    });
  };
  handleDecrement = () => {
    this.setState({
      count: this.state.count - this.state.step,
    });
  };
  handleReset = () => {
    this.setState({
      count: 0,
    });
  };
  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <div>
          <h3>Steps</h3>
          {[5, 10, 15].map((step) => (
            <button
              onClick={() => {
                this.setState({ step: step });
              }}
              className={this.state.step === step ? 'active' : 'steps'}
            >
              {step}
            </button>
          ))}
        </div>
        <div>
          <h3>Max</h3>
          {[15, 100, 200].map((max) => (
            <button
              onClick={() => {
                this.setState({ max: max });
              }}
              className={this.state.max === max ? 'active' : 'steps'}
            >
              {max}
            </button>
          ))}
        </div>
        <div>
          <button key="inc" className="counter" onClick={this.handleIncrement}>
            Increment
          </button>
          <button key="dec" className="counter" onClick={this.handleDecrement}>
            Decrement
          </button>
          <button key="reset" className="counter" onClick={this.handleReset}>
            Reset
          </button>
        </div>
      </>
    );
  }
}
export default App;
