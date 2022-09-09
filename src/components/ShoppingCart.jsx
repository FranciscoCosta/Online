import React from 'react';

class ShoppingCart extends React.Component {
  state = {
    cartItems: [],
  };

  componentDidMount() {
    let items = JSON.parse(localStorage.getItem('cartList'));
    if (!items) items = [];
    this.setState({ cartItems: items });
  }

  render() {
    const { cartItems } = this.state;
    return (
      <div>
        {cartItems.length === 0
          && <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
        {cartItems.map((elementas) => (
          <>
            <p
              data-testid="shopping-cart-product-name"
              key={ elementas.title }
            >
              {elementas.title}
            </p>
            <p data-testid="shopping-cart-product-quantity">1</p>

          </>
        ))}
      </div>
    );
  }
}

export default ShoppingCart;
