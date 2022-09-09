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
    const resultados = await fetch(
      `https://api.mercadolibre.com/sites/MLB/search?q=${target.value}`,
    );
    const api = await resultados.json();

    const items = api.results.map(({ id, title, thumbnail, price }) => (
      <Item key={ id } title={ title } thumbnail={ thumbnail } price={ price } />
    ));

    this.setState({ lista: items, search: true });
  };

  handleApi = async ({ target }) => {
    const resultados = await fetch(
      `https://api.mercadolibre.com/sites/MLB/search?category=${target.id}`,
    );
    const api = await resultados.json();

    const items = api.results.map(({ id, title, thumbnail, price }) => (
      <div className="Card-item" key={ id }>
        <Item
          key={ id }
          title={ title }
          thumbnail={ thumbnail }
          price={ price }
          id={ id }
        />
      </div>
    ));

    this.setState({ lista: items, search: true });
  };

  render() {
    const { lista, search } = this.state;

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

export default ListaProdutos;
