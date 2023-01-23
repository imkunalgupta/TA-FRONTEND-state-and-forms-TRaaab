import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      fontSize: '30px',
    };
  }
  handleChange = (event) => {
    this.setState({ inputText: event.target.value });
  };

  changeSizeBySlider = (event) => {
    this.setState({
      fontSize: event.target.value + 'px',
    });
  };

  render() {
    let styles = [
      'hurricane',
      'inspiration',
      'lato',
      'montserrat',
      'opensans',
      'oswald',
      'palette',
      'poppins',
      'red',
      'roboto',
      'condensed',
      'source',
    ];
    return (
      <>
        <div className="container">
          <h1>Font Tester</h1>
          <div className="header">
            <input
              onChange={this.handleChange}
              type="Text"
              placeholder="Type Something"
            />
            <input
              type="range"
              min="10"
              max="100"
              onChange={this.changeSizeBySlider}
            />
          </div>
          <div className="grid">
            {styles.map((style, i) => (
              <div key={i} className="box">
                <h2>{style.toUpperCase}</h2>
                <p className={style} style={{ fontSize: this.state.fontSize }}>
                  {this.state.inputText}
                </p>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
