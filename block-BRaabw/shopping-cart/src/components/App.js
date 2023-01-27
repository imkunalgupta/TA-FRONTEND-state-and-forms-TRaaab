import React from 'react';
import Cart from './Cart';
import Main from './Main';
import Sidebar from './Sidebar';
import { products } from '../data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSizes: [],
    };
  }
  handleClick = (size) => {
    if (this.state.selectedSizes.includes(size)) {
      this.setState((prevState) => ({
        selectedSizes: prevState.selectedSizes.filter((s) => s !== size),
      }));
    } else {
      this.setState((prevState) => ({
        selectedSizes: prevState.selectedSizes.concat(size),
      }));
    }
  };
  render() {
    return (
      <div className="wrapper flex space-between">
        <Sidebar
          products={products}
          handleClick={this.handleClick}
          selectedSizes={this.state.selectedSizes}
        />
        <Main products={products} selectedSizes={this.state.selectedSizes} />
        <Cart />
      </div>
    );
  }
}

export default App;
