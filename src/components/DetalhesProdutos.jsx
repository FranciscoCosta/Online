import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { shape, string } from 'prop-types';
import { getProductById } from '../services/api';
import Avaliacao from './Avaliacao';

export default class DetalhesProdutos extends Component {
  state = {
    produto: [],
    shipping: false,
  };

  componentDidMount() {
    this.getProdutc();
  }

  getProdutc = async () => {
    const { match: { params: { id } } } = this.props;
    const resultado = await getProductById(id);
    resultado.quantidade = 1;
    this.setState({ produto: resultado,
      shipping: resultado.shipping.free_shipping });
  };

  handleAddCart = () => {
    const { produto } = this.state;
    const items = JSON.parse(localStorage.getItem('cartList')) || [];
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
    const { shipping } = this.state;
    const { match: { params: { id } } } = this.props;
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
            {(shipping) && <p data-testid="free-shipping">Frete Gratis</p>}
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
        <Avaliacao id={ id } />
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
