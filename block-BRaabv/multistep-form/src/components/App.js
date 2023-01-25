import React from 'react';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      email: '',
      firstname: '',
      lastname: '',
      dob: '',
      address: '',
      password: '',
      message: '',
      choice: '',
      check: '',
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, username, password } = this.state;
    alert(`Your registration detail: \n 
    Email: ${email} \n 
    Username: ${username} \n
    Password: ${password}`);
  };

  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  };
  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
  };

  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary"
          type="button"
          onClick={this._prev}
        >
          Previous
        </button>
      );
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button className="btn " type="button" onClick={this._next}>
          Next
        </button>
      );
    }
    return null;
  }

  render() {
    let serial = ['Signup', 'Message', 'Checkbox'];
    return (
      <>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="grid">
              <div>
                <img
                  src={
                    this.state.currentStep === 1
                      ? '/images/img1.jpg'
                      : this.state.currentStep === 2
                      ? '/images/img2.jpg'
                      : '/images/img2.jpg'
                  }
                  alt="background"
                />
              </div>
              <div className="space">
                <div className="menu">
                  {serial.map((data, i) => (
                    <p className="gap" key={i}>
                      <span
                        className={
                          this.state.currentStep === i + 1
                            ? 'selected-Step'
                            : ''
                        }
                      >
                        {i + 1}
                      </span>
                      {''}
                      {data}
                    </p>
                  ))}
                </div>
                <hr />
                <FirstStep
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  email={this.state.email}
                />
                <SecondStep
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  username={this.state.username}
                />
                <ThirdStep
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  password={this.state.password}
                />
                {this.previousButton()}
                {this.nextButton()}
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default App;
