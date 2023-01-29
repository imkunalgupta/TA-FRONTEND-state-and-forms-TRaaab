import React from 'react';
import Cart from './Cart';
import Main from './Main';
import Sidebar from './Sidebar';
import allProducts from '../data.json';
import Header from './Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSizes: [],
      cartItems: [],
    };
  }
  // componentDidUpdate() {
  //   this.handleUpdateLocalStorage();
  // }

  componentDidMount() {
    if (localStorage.carts) {
      this.setState({ cartItems: JSON.parse(localStorage.carts) || [] });
    }
    window.addEventListener('beforeunload', this.handleUpdateLocalStorage);
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.handleUpdateLocalStorage);
  }

  handleUpdateLocalStorage = () => {
    localStorage.setItem('carts', JSON.stringify(this.state.cartItems));
  };

  handleAddToCart = (p) => {
    let isPresent =
      this.state.cartItems.findIndex((product) => product.id === p.id) !== -1;
    if (isPresent) {
      this.incrementQuantity(p.id);
    } else {
      this.setState((prevState) => ({
        cartItems: prevState.cartItems.concat({ ...p, quantity: 1 }),
      }));
    }
  };
  incrementQuantity = (id) => {
    this.setState((prevState) => {
      let updatedCartItems = prevState.cartItems.map((p) => {
        if (p.id === id) {
          return {
            ...p,
            quantity: p.quantity + 1,
          };
        }
        return p;
      });
      return {
        cartItems: updatedCartItems,
      };
    });
  };
  decrementQuantity = (id) => {
    this.setState((prevState) => {
      let updatedCartItems = prevState.cartItems.map((p) => {
        if (p.id === id) {
          return {
            ...p,
            quantity: p.quantity - 1,
          };
        }
        return p;
      });
      return {
        cartItems: updatedCartItems,
      };
    });
  };

  deleteCartItem = (id) => {
    this.setState((prevState) => {
      let updatedCartItems = prevState.cartItems.filter((p) => {
        return p.id !== id;
      });
      return {
        cartItems: updatedCartItems,
      };
    });
  };

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
      <>
        <Header />
        <div className="wrapper flex space-between">
          <Sidebar
            products={allProducts.products}
            handleClick={this.handleClick}
            selectedSizes={this.state.selectedSizes}
          />
          <Main
            products={allProducts.products}
            selectedSizes={this.state.selectedSizes}
            handleAddToCart={this.handleAddToCart}
          />
          <Cart
            cartItems={this.state.cartItems}
            incrementQuantity={this.incrementQuantity}
            decrementQuantity={this.decrementQuantity}
            deleteCartItem={this.deleteCartItem}
          />
        </div>
      </>
    );
  }
}

export default App;
