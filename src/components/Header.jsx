import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Header extends Component {
  state = {
    goCart: false,
  };

  handleGoCart = () => {
    this.setState({ goCart: true });
  };

  render() {
    const { goCart } = this.state;
    return (
      <div data-testid="shopping-cart-button">
        <button type="button" onClick={ this.handleGoCart }>carrinho</button>
        {goCart && <Redirect to="/shoppingcart" />}
      </div>
    );
  }
}

export default Header;
