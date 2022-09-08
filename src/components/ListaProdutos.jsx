import React from 'react';
import Header from './Header';

class ListaProdutos extends React.Component {
  state = {
    lista: [],
  };

  render() {
    const { lista } = this.state;

    return (
      <div data-testid="home-initial-message">
        <Header />

        {lista.length === 0
          ? <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
          : lista }
      </div>
    );
  }
}

export default ListaProdutos;
