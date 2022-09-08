import React from 'react';
import Header from './Header';
import Item from './Item';
import Categorias from './Categorias';

class ListaProdutos extends React.Component {
  state = {
    lista: [],
    search: false,
  };

  handleApiCall = async ({ target }) => {
    const resultados = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${target.value}`);
    const api = await resultados.json();

    const items = api.results.map(({ id, title, thumbnail, price }) => (
      <Item key={ id } title={ title } thumbnail={ thumbnail } price={ price } />
    ));

    this.setState({ lista: items, search: true });
  };

  handleApi = async ({ target }) => {
    const resultados = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${target.id}`);
    const api = await resultados.json();

    console.log(api, 'capivaras');
    const items = api.results.map(({ id, title, thumbnail, price }) => (
      <Item key={ id } title={ title } thumbnail={ thumbnail } price={ price } />
    ));

    this.setState({ lista: items, search: true });
  };

  render() {
    const { lista, search } = this.state;

    return (
      <div data-testid="home-initial-message">
        <Header handleApiCall={ this.handleApiCall } />

        {lista.length === 0
          && <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>}
        {search && lista.length === 0 ? <p>Nenhum produto foi encontrado</p> : lista}
        <Categorias handleApi={ this.handleApi } />
      </div>
    );
  }
}

export default ListaProdutos;
