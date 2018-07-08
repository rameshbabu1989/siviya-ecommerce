import React, { Component } from 'react';
import {formatPrice} from '../helper';

class Order extends Component {
  renderOrderItemCard = (key) => {
    const product = this.props.products[key];
    const quantity = this.props.cartItems[key];
    const isAvailable = product && product.status === 'available'
      if(isAvailable){
        return(
        <li>
            {product.name} - {quantity} - {formatPrice(quantity* product.price)}
        </li>
        );
      } else {
        return(
          <li>
            {product.name} - Sold out
          </li>
          );
      }
  }

  render() {
    const cartItmesIds = Object.keys(this.props.cartItems);
    const total = cartItmesIds.reduce((prevTotal, key)=>{
      const product = this.props.products[key];
      const quantity = this.props.cartItems[key];
      const isAvailable = product && product.status === 'available'
      if(isAvailable){
        return prevTotal + quantity * product.price;
      }
      return prevTotal;
    },0);
    return (
      <div className="order-wrap">
          <h2>Order</h2>
          <ul className="order">{cartItmesIds.map(this.renderOrderItemCard)}</ul>
          <div className="total">
            <br/>
            Total :
            <strong>{formatPrice(total)}</strong>
          </div>
      </div>
    );
  }
}

export default Order;