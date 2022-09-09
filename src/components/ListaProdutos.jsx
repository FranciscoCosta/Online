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
          handleAddCart={ this.handleAddCart }
        />
      </div>
    ));

    this.setState({ lista: items, search: true });
  };

  handleAddCart = ({ target }) => {
    const { lista } = this.state;
    let items = JSON.parse(localStorage.getItem('cartList'));
    if (!items) items = [];
    console.log(items);
    const item = lista.find((elemento) => elemento.key === target.value);
    // console.log(item);
    const { props: { children: { props } } } = item;
    const local = [...items, props];
    console.log(local);
    localStorage.setItem('cartList', JSON.stringify(local));
  };
  // };

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
