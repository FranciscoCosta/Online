import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListaProdutos from './components/ListaProdutos';
import Categorias from './components/Categorias';

class App extends React.Component {
  render() {
    return (
      <div>
        <Categorias />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ ListaProdutos } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
