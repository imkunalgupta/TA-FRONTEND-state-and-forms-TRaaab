import React from 'react';
import data from '../accordian.json';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeQuestion: '',
    };
  }
  handleClick = (que) => {
    this.setState({
      activeQuestion: que,
    });
  };

  render() {
    let queAns = data.map((q) => q);
    return (
      <>
        <ul>
          {queAns.map((que, i) => (
            <li key={i} onClick={() => this.handleClick(que.Q)}>
              <div
                className={
                  this.state.activeQuestion === que.Q ? 'active flex' : 'flex'
                }
              >
                <h2>{que.Q}</h2>
                <span>
                  {''}
                  {this.state.activeQuestion === que.Q ? '👆' : '👇'}
                  {''}
                </span>
              </div>
              <h3>{this.state.activeQuestion === que.Q ? que.A : ''}</h3>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
export default App;
