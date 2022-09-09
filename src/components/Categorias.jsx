import React, { Component } from 'react';
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
    return (
      <div>
        <h2>Categorias</h2>
        { categorias.map((elemento) => {
          (
            (
              <label htmlFor={ elemento.id } key={ elemento.id }>
                <button id={ elemento.id } type="button" data-testid="category">
                  {elemento.name}
                </button>
              </label>
            ));
        })}
      </div>
    );
  }
}
