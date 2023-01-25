import React from 'react';

function FirstStep(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <>
      <div className="form-group">
        <h6>Step 1/3</h6>
        <h2>Sign Up</h2>
        <div className="menu">
          <div>
            <label className="block" htmlFor="firstname">
              First Name
            </label>
            <input
              className="input"
              id="firstname"
              name="firstname"
              type="text"
              value={props.firstname}
              onChange={props.handleChange}
            />
          </div>
          <div>
            <label className="block" htmlFor="lastname">
              LastName
            </label>
            <input
              className="input"
              id="lastname"
              name="lastname"
              type="text"
              value={props.lastname}
              onChange={props.handleChange}
            />
          </div>
          <div>
            <label className="block" htmlFor="dob">
              Date of Birth
            </label>
            <input
              className="input"
              id="dob"
              name="dob"
              type="date"
              value={props.dob}
              onChange={props.handleChange}
            />
          </div>
          <div>
            <label className="block" htmlFor="email">
              Email Address
            </label>
            <input
              className="input"
              id="email"
              name="email"
              type="text"
              value={props.email}
              onChange={props.handleChange}
            />
          </div>
          <div>
            <label className="block" htmlFor="password">
              Password
            </label>
            <input
              className="input full-width"
              id="passqword"
              name="password"
              type="password"
              value={props.password}
              onChange={props.handleChange}
            />
          </div>
          <div>
            <label className="block" htmlFor="address">
              Address
            </label>
            <input
              className="input full-width"
              id="address"
              name="address"
              type="text"
              value={props.address}
              onChange={props.handleChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default FirstStep;
