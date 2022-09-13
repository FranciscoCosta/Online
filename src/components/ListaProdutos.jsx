import React, { Component } from 'react';

import Header from './Header';
import Item from './Item';
import Categorias from './Categorias';

export default class ListaProdutos extends Component {
  state = {
    lista: [],
    search: false,
    sum: '',
  };

  componentDidMount() {
    this.cartQuantidade();
  }

  handleCallsApi = (apiCall) => {
    const items = apiCall.results.map((item) => (
      <div className="Card-item" key={ item.id }>
        <Item
          key={ item.id }
          title={ item.title }
          thumbnail={ item.thumbnail }
          price={ item.price }
          id={ item.id }
          quantidade={ 1 }
          shipping={ item.shipping }
          available_quantity={ item.available_quantity }
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
    this.cartQuantidade();
  };

  cartQuantidade = () => {
    const items = JSON.parse(localStorage.getItem('cartList')) || [];
    if (items.length > 0) {
      const final = items.map((elemento) => elemento.quantidade);
      const sum = final.reduce((accumulator, curr) => accumulator + curr);
      this.setState({ sum });
    }
  };

  render() {
    const {
      lista,
      search,
      sum } = this.state;

    return (
      <div data-testid="home-initial-message">
        <Header handleApiCall={ this.handleApiCall } />
        <p data-testid="shopping-cart-size">{sum}</p>

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
