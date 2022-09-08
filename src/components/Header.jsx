import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends Component {
  state = {
    inputValue: '',
  };

  handleChange = ({ target }) => {
    this.setState({ inputValue: target.value });
  };

  render() {
    const { inputValue } = this.state;
    const { handleApiCall } = this.props;

    return (
      <div>

        <input
          type="text"
          data-testid="query-input"
          value={ inputValue }
          onChange={ this.handleChange }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ handleApiCall }
          value={ inputValue }
        >
          Buscar
        </button>

        <Link data-testid="shopping-cart-button" to="/shoppingcart">carrinho</Link>
      </div>
    );
  }
}

Header.propTypes = {
  handleApiCall: PropTypes.func.isRequired,
};

export default Header;
