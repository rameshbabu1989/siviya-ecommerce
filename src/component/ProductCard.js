import React, { Component } from 'react';
import {formatPrice} from '../helper';

class ProductCard extends Component {
    handleClick = () => {
        this.props.addItem(this.props.index);
    }
  render() {
    const {image, name, price, desc, status} = this.props.info;
    const isAvailable = status === "available";
    return (
        <li className="menu-fish">
            <img src={image} alt={name}/>
            <h3 className="fish-name">
            {name}
            <span className="price">{formatPrice(price)}</span>
            </h3>
            <p>
                {desc}
            </p>
            <button disabled={!isAvailable} onClick={this.handleClick}> 
            {isAvailable ? 'Add To Cart':'Sold out'} </button>
        </li>
    );
  }
}

export default ProductCard;
