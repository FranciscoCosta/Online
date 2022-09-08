import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListaProdutos from './components/ListaProdutos';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ ListaProdutos } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
