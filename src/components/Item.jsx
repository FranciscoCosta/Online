import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component {
  render() {
    const { title, thumbnail, price } = this.props;
    return (
      <div data-testid="product">
        <h6>{title}</h6>
        <img src={ thumbnail } alt={ title } />
        <p>{`R$ ${price}`}</p>
      </div>
    );
  }
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Item;
