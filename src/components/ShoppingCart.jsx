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

  deleteitem = (event) => {
    const alvo = (event.target.value);
    const items = JSON.parse(localStorage.getItem('cartList'));
    const resultado = items.filter((item) => item.id !== alvo);
    localStorage.setItem('cartList', JSON.stringify(resultado));
    this.setState({ cartItems: resultado });
  };

  handleDecrement = (event) => {
    const alvo = (event.target.value);
    const items = JSON.parse(localStorage.getItem('cartList'));
    const resultado = items.reduce((acc, crr) => {
      if (crr.id === alvo) crr.quantidade -= 1;
      if (crr.quantidade === 0) crr.quantidade = 1;
      return [...acc, crr];
    }, []);
    localStorage.setItem('cartList', JSON.stringify(resultado));
    this.setState({ cartItems: resultado });
  };

  handleIncrement = (event) => {
    const alvo = (event.target.value);
    const items = JSON.parse(localStorage.getItem('cartList'));
    const resultado = items.reduce((acc, crr) => {
      if (crr.id === alvo) crr.quantidade += 1;
      return [...acc, crr];
    }, []);
    localStorage.setItem('cartList', JSON.stringify(resultado));
    this.setState({ cartItems: resultado });
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
            {console.log(cartItems)}
            ;
            {cartItems.map((elementas) => (
              <div className="shopping-cart-card" key={ elementas.id }>
                <button
                  data-testid="remove-product"
                  type="button"
                  className="shopping-cart-delete-item"
                  onClick={ this.deleteitem }
                  value={ elementas.id }
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
                  data-testid="product-decrease-quantity"
                  className="shopping-cart-remove-item"
                  onClick={ this.handleDecrement }
                  value={ elementas.id }
                >
                  -
                </button>
                <p data-testid="shopping-cart-product-quantity">{elementas.quantidade}</p>
                <button
                  data-testid="product-increase-quantity"
                  type="button"
                  className="shopping-cart-add-item"
                  value={ elementas.id }
                  onClick={ this.handleIncrement }
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
