import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, NavbarBrand } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          description: "Unisex Cologne",
          image: "./images/cologne.jpg",
          value: 1,
        },
        {
          id: 2,
          description: "Apple Watch",
          image: "./images/iwatch.jpg",
          value: 1,
        },
        {
          id: 3,
          description: "Unique Mug",
          image: "./images/mug.jpg",
          value: 1,
        },
        {
          id: 4,
          description: "Mens Wallet",
          image: "./images/wallet.jpg",
          value: 2,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <Navbar color='info' expand='md' light>
          <NavbarBrand className='p-5 ' href='/'>
            Shop to React
          </NavbarBrand>
          <FontAwesomeIcon
            className='d-flex justify-content-end'
            icon={faShoppingCart}
          />
          <Cart totalValue={this.state.products.map(product => product.value).reduce((acc, curr, index) => acc + curr, 0)} />
        </Navbar>
        <DisplayProducts products={this.state.products} />
      </div>
    );
  }
}
function DisplayProducts(props) {
  return (
    <div>
      {props.products.map((product) => (
        <div key={product.id}>
          <h2>{product.description}</h2>
          <img
            className='prod-image'
            alt={product.description}
            src={product.image}></img>
          <span id='qty' className='mx-2 p-3 border border-3'>
            {product.value}
          </span>
          quantity
        </div>
      ))}
    </div>
  );
}
function Cart(props) {
  return (
    <div>
      {props.totalValue}
    </div>
  );
}

export default App;
