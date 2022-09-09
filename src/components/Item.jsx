import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Item extends React.Component {
  render() {
    const { title, thumbnail, price, id } = this.props;
    return (
      <Link
        to={ `/DetalhesProdutos/${id}` }
        data-testid="product-detail-link"
      >
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
    );
  }
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Item;
