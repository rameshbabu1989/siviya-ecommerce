import React, { Component } from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

class App extends Component {
  state = {
    products:{},
    cart:{}
  };

  addProduct = newProduct => {
    const currentProducts = { ...this.state.products };
    currentProducts[`product${Date.now()}`] = newProduct;
    this.setState({products:currentProducts});
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Open Market"/>
        </div>
        <Order/>
        <Inventory addProduct = {this.addProduct}/>
      </div>
    );
  }
}

export default App;
