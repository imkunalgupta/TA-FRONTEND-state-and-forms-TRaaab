import React from 'react';

class MultipleInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      date: '',
      readOnly: '',
      textArea: '',
    };
    this.fileInput = React.createRef();
  }
  handleChange = (event) => {
    this.setState({ inputText: event.target.value });
  };
  handleDate = (event) => {
    this.setState({ date: event.target.value });
  };
  handleText = (event) => {
    this.setState({ textArea: event.target.value });
  };
  render() {
    return (
      <>
        <form>
          <label htmlFor="text">Text Input</label>
          <input
            type="text"
            id="text"
            value={this.state.inputText}
            onChange={this.handleChange}
          />
          <label htmlFor="date">Date Input</label>
          <input
            type="date"
            id="date"
            value={this.state.date}
            onChange={this.handleDate}
          />
          <label htmlFor="file"> File Input</label>
          <input type="file" ref={this.fileInput} />
          <label htmlFor="text">Read Only Input</label>
          <input
            type="text"
            id="text"
            value={this.state.inputText}
            placeholder="This can only be copied"
            readOnly
            disabled
          />
          <label htmlFor="text">Disabled Input</label>
          <input type="text" id="text" value={this.state.inputText} disabled />
          <label htmlFor="text">TextArea</label>
          <textarea
            type="text"
            onChange={this.handleText}
            value={this.state.textArea}
            rows="3"
          />
          <label htmlFor="text">TextArea Disabled</label>
          <textarea value={this.state.textArea} rows="3" disabled />
        </form>
      </>
    );
  }
}

export default MultipleInput;
