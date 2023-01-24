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
}

export default MultipleInput;
