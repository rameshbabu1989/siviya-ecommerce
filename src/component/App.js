import React, { Component } from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import ProductCard from './ProductCard';
import Sample from '../sample'

class App extends Component {
  state = {
    products:Sample,
    cartItems:{}
  };

  addProduct = newProduct => {
    const currentProducts = { ...this.state.products };
    currentProducts[`product${Date.now()}`] = newProduct;
    this.setState({products:currentProducts});
  };

  addCartItem = key => {
    const currentCartItems = { ...this.state.cartItems };
    currentCartItems[key] = currentCartItems[key] + 1 || 1;
    this.setState({cartItems:currentCartItems});
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Open Market"/>
          <ul className="fishes">
            {Object.keys(this.state.products).map(key => 
              <ProductCard key={key} 
              index = {key}
              info={this.state.products[key]}
              addItem={this.addCartItem}/>)}
          </ul>
        </div>
        <Order products={this.state.products} cartItems={this.state.cartItems}/>
        <Inventory addProduct = {this.addProduct}/>
      </div>
    );
  }
}

export default App;
