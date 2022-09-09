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
        <h2 className="title-hero">Categorias</h2>
        <div className="category-items">
          { categorias.map(({ id, name }) => (
            (
              <label htmlFor={ id } key={ id }>

                <button
                  className="category-btn"
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
      </div>

    );
  }
}

Categorias.propTypes = {
  handleApi: PropTypes.func.isRequired,
};
