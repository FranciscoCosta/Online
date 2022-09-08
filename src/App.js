import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListaProdutos from './components/ListaProdutos';
import ShoppingCart from './components/ShoppingCart';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/shoppingcart" component={ ShoppingCart } />
            <Route exact path="/" component={ ListaProdutos } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
