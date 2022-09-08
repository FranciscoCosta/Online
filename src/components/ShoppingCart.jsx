import React from 'react';

class ShoppingCart extends React.Component {
  // state = {
  //   cartItems: [],
  // };

  render() {
    // const { cartItems } = this.state;
    return (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      // <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      // <div>
      //   {cartItems.length === 0
      //     && <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
      // </div>
    );
  }
}

export default ShoppingCart;
