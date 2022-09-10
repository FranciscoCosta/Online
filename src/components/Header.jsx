import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { func } from 'prop-types';

export default class Header extends Component {
  state = {
    inputValue: '',
  };

  handleChange = ({ target }) => this.setState({ inputValue: target.value });

  render() {
    const { inputValue } = this.state;
    const { handleApiCall } = this.props;

    return (
      <div className="container-header">
        <div className="header-left">
          <input
            type="text"
            data-testid="query-input"
            value={ inputValue }
            onChange={ this.handleChange }
            className="input-btn-item"
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ handleApiCall }
            value={ inputValue }
            className="btm-procura"
          >
            Buscar
          </button>
        </div>
        <div className="header-right">

          <Link data-testid="shopping-cart-button" to="/shoppingcart">carrinho</Link>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  handleApiCall: func,
}.isRequired;
