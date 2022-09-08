import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

export default class Categorias extends Component {
  state = {
    categorias: [],
  };

  componentDidMount() {
    this.pegaCategorias();
  }

  pegaCategorias = async () => {
    const categories = await getCategories();
    this.setState({ categorias: categories });
  };

  render() {
    const { categorias } = this.state;
    const { handleApi } = this.props;
    return (
      <div>
        <h2>Categorias</h2>
        { categorias.map(({ id, name }) => (
          (
            <label htmlFor={ id } key={ id }>
              <button
                id={ id }
                type="button"
                data-testid="category"
                onClick={ handleApi }
              >
                {name}
              </button>
            </label>)
        ))}
      </div>

    );
  }
}

Categorias.propTypes = {
  handleApi: PropTypes.func.isRequired,
};
