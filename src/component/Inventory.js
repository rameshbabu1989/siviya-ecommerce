import React, { Component } from 'react';
import AddProduct from './AddProduct';

class Inventory extends Component {
  render() {
    return (
        <div className="inventory">
            <h2>Inventory</h2>
            <AddProduct addProduct = {this.props.addProduct}/>
        </div>
    );
  }
}

export default Inventory;
