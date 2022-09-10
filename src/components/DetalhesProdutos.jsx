import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { shape, string } from 'prop-types';

import { getProductById } from '../services/api';

export default class DetalhesProdutos extends Component {
  state = {
    produto: [],
  };

  componentDidMount() {
    this.getProdutc();
  }

  getProdutc = async () => {
    const { match: { params: { id } } } = this.props;
    const resultado = await getProductById(id);

    this.setState({ produto: resultado });
  };

  handleAddCart = () => {
    const { produto } = this.state;

    let items = JSON.parse(localStorage.getItem('cartList'));
    if (!items) items = [];
    const local = [...items, produto];

    localStorage.setItem('cartList', JSON.stringify(local));
  };

  render() {
    const {
      produto: {
        title,
        price,
        thumbnail,
      } } = this.state;

    return (
      <div>
        <h6 data-testid="product-detail-name">{title}</h6>
        <img data-testid="product-detail-image" src={ thumbnail } alt={ title } />
        <p data-testid="product-detail-price">{`R$ ${price}`}</p>
        <button
          onClick={ this.handleAddCart }
          type="button"
          data-testid="product-detail-add-to-cart"
        >
          Adicionar ao carrinho
        </button>

        <Link to="/shoppingcart" data-testid="shopping-cart-button">
          <button type="button">Carrinho</button>
        </Link>
      </div>
    );
  }
}

DetalhesProdutos.propTypes = {
  match: shape({
    params: shape({
      id: string,
    }),
  }).isRequired,
};
