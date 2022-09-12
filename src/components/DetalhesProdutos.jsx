import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { shape, string } from 'prop-types';
import { getProductById } from '../services/api';

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
        <form>
          <div>
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                data-testid="product-detail-email"
                required
              />
            </label>
            <label htmlFor="1">
              1
              <input
                type="radio"
                name="rating"
                id="1"
                data-testid="1-rating"
                required
              />
            </label>
            <label htmlFor="1">
              2
              <input
                type="radio"
                name="rating"
                id="2"
                data-testid="2-rating"
                required
              />
            </label>
            <label htmlFor="1">
              3
              <input
                type="radio"
                name="rating"
                id="3"
                data-testid="3-rating"
                required
              />
            </label>
            <label htmlFor="1">
              4
              <input
                type="radio"
                name="rating"
                id="4"
                data-testid="4-rating"
                required
              />
            </label>
            <label htmlFor="1">
              5
              <input
                type="radio"
                name="rating"
                id="5"
                data-testid="5-rating"
                required
              />
            </label>
          </div>
          <div>
            <textarea
              name="avaliacao"
              id="product-detail"
              cols="30"
              rows="10"
              data-testid="product-detail-evaluation"
              required
            >
              avaliacao

            </textarea>
          </div>
          <button
            type="submit"
            data-testid="submit-review-btn"
          >
            Enviar

          </button>
        </form>
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
