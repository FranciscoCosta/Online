import React from 'react';
import Header from './Header';

class ListaProdutos extends React.Component {
  state = {
    lista: [],
    search: false,
  };

  handleApiCall = async ({ target }) => {
    const resultados = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${target.value}`);
    const api = await resultados.json();

    const items = api.results.map(({ id, title, thumbnail, price }) => (
      <div key={ id } data-testid="product">
        <h6>{title}</h6>
        <img src={ thumbnail } alt={ title } />
        <p>{`R$ ${price}`}</p>
      </div>
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
      </div>
    );
  }
}

export default ListaProdutos;
