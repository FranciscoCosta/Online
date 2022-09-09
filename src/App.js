import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListaProdutos from './components/ListaProdutos';
import ShoppingCart from './components/ShoppingCart';
import DetalhesProdutos from './components/DetalhesProdutos';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/shoppingcart" component={ ShoppingCart } />
            <Route exact path="/" component={ ListaProdutos } />
            <Route exact path="/DetalhesProdutos/:id" component={ DetalhesProdutos } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
