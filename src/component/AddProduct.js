import React, { Component } from 'react';

class AddProduct extends Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createProduct = event => {
        event.preventDefault();
        const product = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value,
        }
        this.props.addProduct(product);
        event.currentTarget.reset();
        console.log(event);
    }

    render(){
        return (
        <form className="fish-edit" onSubmit={this.createProduct}>
            <input ref={this.nameRef} name="name" type="text" placeholder="Name"/>
            <input ref={this.priceRef} name="price" type="text" placeholder="Price"/>
            <select ref={this.statusRef} name="status">
                <option value="available">Available</option>
                <option value="unavailable">Sold</option>
            </select>
            <textarea ref={this.descRef} name="desc" placeholder="Desc"/>
            <input ref={this.imageRef} name="image" type="text" placeholder="image"/>
            <button type="submit">+ Add Product</button>
        </form>
        );
    }
}


export default AddProduct;
