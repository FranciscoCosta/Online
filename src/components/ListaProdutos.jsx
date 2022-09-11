import React, { Component } from 'react';

import Header from './Header';
import Item from './Item';
import Categorias from './Categorias';

export default class ListaProdutos extends Component {
  state = {
    lista: [],
    search: false,
  };

  handleCallsApi = (apiCall) => {
    const items = apiCall.results.map(({ id, title, thumbnail, price }) => (
      <div className="Card-item" key={ id }>
        <Item
          key={ id }
          title={ title }
          thumbnail={ thumbnail }
          price={ price }
          id={ id }
          quantidade={ 1 }
          handleAddCart={ this.handleAddCart }
        />
      </div>
    ));

    this.setState({ lista: items, search: true });
  };

  handleApiCall = async ({ target }) => {
    const resultados = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${target.value}`);
    const api = await resultados.json();

    this.handleCallsApi(api);
  };

  handleApi = async ({ target }) => {
    const resultados = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${target.id}`);
    const api = await resultados.json();

    this.handleCallsApi(api);
  };

  handleAddCart = ({ target }) => {
    const { lista } = this.state;

    let items = JSON.parse(localStorage.getItem('cartList'));
    if (!items) items = [];

    const item = lista.find((elemento) => elemento.key === target.value);
    const { props: { children: { props } } } = item;

    const local = [...items, props];
    localStorage.setItem('cartList', JSON.stringify(local));
  };

  render() {
    const {
      lista,
      search,
    } = this.state;

    return (
      <div data-testid="home-initial-message">
        <Header handleApiCall={ this.handleApiCall } />

        <section className="hero-section">
          <div className="hero-side">
            <Categorias handleApi={ this.handleApi } />
          </div>
          <div className="hero-main">
            <h2 className="title-hero">Lista Produtos</h2>
            {lista.length === 0 && (
              <p className="info-hero-main">
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>
            )}

            {search && lista.length === 0 ? (
              <p className="info-hero-main">Nenhum produto foi encontrado</p>
            ) : (
              <div className="Wrapper-itens">
                {lista}
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }
}
