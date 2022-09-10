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
        <div className="container-shopping-cart">
          <div className="left-shopping-cart">
            <h1 className="shopping-cart-title">Carrinho de compras:</h1>
            {cartItems.map((elementas) => (
              <div className="shopping-cart-card" key={ elementas.id }>
                <button
                  type="button"
                  className="shopping-cart-delete-item"
                >
                  X
                </button>
                <img src={ elementas.thumbnail } alt={ elementas.title } />
                <p
                  data-testid="shopping-cart-product-name"
                  className="shopping-cart-text"
                >
                  {elementas.title}
                </p>
                <p className="shopping-cart-product-price">{`R$ ${elementas.price}`}</p>
                <button
                  type="button"
                  className="shopping-cart-remove-item"
                >
                  -
                </button>
                <p data-testid="shopping-cart-product-quantity">1</p>
                <button
                  type="button"
                  className="shopping-cart-add-item"
                >
                  +
                </button>
              </div>
            ))}
          </div>
          <div className="right-shopping-cart">
            <h1 className="shopping-cart-title">Valor total da compra:</h1>
          </div>
        </div>
      </div>
    );
  }
}
