import React from 'react';

class Validation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shipping: {
        address: '',
        zip: '',
        city: '',
        country: '',
      },
      billing: {
        address: '',
        zip: '',
        city: '',
        country: '',
      },
      errors: {
        address: '',
      },
      isSame: false,
    };
  }
  handleChange = ({ target }) => {
    let { name, value } = target;
    let error = this.state.errors;
    switch (name) {
      case 'address':
        error.address = value.length > 8 ? '' : 'You need to enter at-least 8';
        break;
      default:
        break;
    }

    this.setState((state) => ({
      shipping: { ...state.error, ...state.shipping, [name]: value },
    }));
  };

  handleCheckbox = () => {
    this.setState(({ isSame }) => ({ isSame: !isSame }));
  };
  render() {
    const { isSame, billing, shipping } = this.state;
    const billingData = isSame ? shipping : billing;
    let { address } = this.state.errors;
    return (
      <>
        <form className="flex">
          <div className="columm">
            <h2>Shipping Address</h2>
            <div>
              <label>Address</label>
              <div>
                <input
                  name="address"
                  onChange={this.handleChange}
                  type="text"
                  placeholder="e.g Patna"
                  className={address && 'error'}
                ></input>
                <span>{address}</span>
              </div>
            </div>
            <div>
              <label>Zip/Postal Code</label>
              <div>
                <input
                  name="zip"
                  onChange={this.handleChange}
                  type="text"
                  placeholder="e.g. 800001"
                ></input>
              </div>
            </div>
            <div>
              <label>City</label>
              <div>
                <input
                  type="text"
                  name="city"
                  onChange={this.handleChange}
                  placeholder="e.g. Patna"
                ></input>
              </div>
            </div>
            <div>
              <label>Country</label>
              <div>
                <input
                  name="country"
                  type="text"
                  onChange={this.handleChange}
                  placeholder="e.g. India"
                ></input>
              </div>
            </div>
          </div>
          <div className="columm">
            <h2>Billing Address</h2>
            <div>
              <label className="checkbox">
                <input onChange={this.handleCheckbox} type="checkbox" />
                <h3>Same as the Shipping Address?</h3>
              </label>
            </div>
            <div>
              <label>Address</label>
              <div>
                <input
                  name="address"
                  value={billingData.address}
                  type="text"
                  placeholder="e.g Patna"
                  className={address && 'error'}
                ></input>
                <span>{address}</span>
              </div>
            </div>
            <div>
              <label>Zip/Postal Code</label>
              <div>
                <input
                  name="zip"
                  value={billingData.zip}
                  type="text"
                  placeholder="e.g. 800001"
                ></input>
              </div>
            </div>
            <div>
              <label>City</label>
              <div>
                <input
                  type="text"
                  name="city"
                  value={billingData.city}
                  placeholder="e.g. Patna"
                ></input>
              </div>
            </div>
            <div>
              <label>Country</label>
              <div>
                <input
                  name="country"
                  type="text"
                  value={billingData.country}
                  placeholder="e.g. India"
                ></input>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default Validation;
