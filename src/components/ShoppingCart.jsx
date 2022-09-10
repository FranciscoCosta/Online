import React, { Component } from 'react';

export default class ShoppingCart extends Component {
  state = {
    cartItems: [],
  };

  componentDidMount() {
    this.getItemsCart();
  }

  getItemsCart = () => {
    let items = JSON.parse(localStorage.getItem('cartList'));
    if (!items) items = [];

    this.setState({ cartItems: items });
  };

  render() {
    const { cartItems } = this.state;

    return (
      <div>
        {cartItems.length === 0
          && <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}

        {cartItems.map((elementas) => (
          <div key={ elementas.id }>
            <p
              data-testid="shopping-cart-product-name"
            >
              {elementas.title}
            </p>
            <p data-testid="shopping-cart-product-quantity">1</p>
          </div>
        ))}
      </div>
    );
  }
}
