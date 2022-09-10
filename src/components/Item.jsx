import React from 'react';
import { string, number, func } from 'prop-types';
import { Link } from 'react-router-dom';

export default class Item extends React.Component {
  render() {
    const {
      title,
      thumbnail,
      price,
      handleAddCart,
      id,
    } = this.props;

    return (
      <>
        <Link to={ `/DetalhesProdutos/${id}` } data-testid="product-detail-link">
          <div data-testid="product" className="card-item-product">
            <div className="left">
              <img src={ thumbnail } alt={ title } />
            </div>
            <div className="right">
              <h6>{title}</h6>
              <p>{`R$ ${price}`}</p>
            </div>
          </div>
        </Link>

        <button
          className="add-cart"
          data-testid="product-add-to-cart"
          type="button"
          onClick={ handleAddCart }
          value={ id }
        >
          Adicionar ao Carrinho
        </button>
      </>
    );
  }
}

Item.propTypes = {
  id: string,
  title: string,
  thumbnail: string,
  price: number,
  handleAddCart: func,
}.isRequired;
