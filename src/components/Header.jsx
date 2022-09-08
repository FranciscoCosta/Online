import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/shoppingcart">carrinho</Link>
      </div>
    );
  }
}

export default Header;
