import React from 'react';
import data from '../accordian.json';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeQuestion: null,
    };
  }

  render() {
    //let queAns = data.map((q) => q);
    return (
      <>
        <ul>
          {data.map((que, i) => (
            <li>
              <h2
                onClick={() => {
                  this.setState({ activeQuestion: i });
                }}
              >
                {que.Q}
                {this.state.activeQuestion === i ? '👆' : '👇'}
              </h2>
              {i === this.state.activeQuestion && <p>{que.A}</p>}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
export default App;
