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
      <div className="container-detalhes-produtos">
        <Link to="/shoppingcart" data-testid="shopping-cart-button">
          <img
            src="../img/shopping-cart.png"
            alt="shooping-cart"
            className="shopping-cart-svg"
          />
        </Link>
        <div className="card-detalhes-produtos">
          <div className="card-detalhes-left">
            <img data-testid="product-detail-image" src={ thumbnail } alt={ title } />
          </div>
          <div className="card-detalhes-right">
            <h6
              data-testid="product-detail-name"
              className="card-detalhes-titulo"
            >
              {title}

            </h6>
            <p
              data-testid="product-detail-price"
              className="card-detalhes-price"
            >
              {`R$ ${price}`}

            </p>
            <button
              onClick={ this.handleAddCart }
              type="button"
              data-testid="product-detail-add-to-cart"
              className="card-detalhes-cart"
            >
              Adicionar ao carrinho
            </button>
          </div>
        </div>
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
