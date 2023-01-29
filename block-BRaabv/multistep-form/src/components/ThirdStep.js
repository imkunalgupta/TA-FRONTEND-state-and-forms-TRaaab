import React from 'react';

function ThirdStep(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <>
      <div className="form-group">
        <h6>Step 3/3</h6>
        <h2>Checkbox</h2>
        <label className="contain">
          I want to add this option
          <input type="checkbox" id="check" name="check" value="Add"></input>
          <span className="checkmark"></span>
        </label>
        <label className="contain">
          Let me click on the checkbox and choose some cool stuff
          <input type="checkbox" id="check" name="check" value="Click"></input>
          <span className="checkmark"></span>
        </label>
      </div>
      <hr />
      <button className="btn btn-success ">Submit</button>
    </>
  );
}

export default ThirdStep;
