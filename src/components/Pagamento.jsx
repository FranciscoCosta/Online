import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Pagamento extends Component {
  state = {
    items: [],
    fullname: '',
    email: '',
    cpf: '',
    celular: '',
    cep: '',
    endereco: '',
    validacao: false,

  };

  componentDidMount() {
    this.pegaItems();
  }

  pegaItems = () => {
    const items = JSON.parse(localStorage.getItem('cartList')) || [];
    this.setState({ items });
  };

  handleForm = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  apagaItems = () => {
    const {
      fullname,
      email,
      cpf,
      celular,
      cep,
      endereco,
    } = this.state;
    if (fullname === '' || email === ''
     || cpf === '' || celular === '' || cep === '' || endereco === '') {
      this.setState({ validacao: true });
    } else {
      localStorage.removeItem('cartList');
    }
  };

  render() {
    const { items,
      fullname,
      email,
      cpf,
      celular,
      cep,
      endereco,
      validacao } = this.state;
    return (
      <section>
        <div>
          {(items.length > 0) && items.map((item, index) => (
            <div key={ index }>
              <p>{item.title}</p>
              <img src={ item.thumbnail } alt={ item.title } />
              <p>{item.price}</p>
              <p>{item.quantidade}</p>
            </div>
          ))}
        </div>
        <form>
          <label htmlFor="fullname">
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="fullname"
              data-testid="checkout-fullname"
              required
              value={ fullname }
              onChange={ this.handleForm }
            />
          </label>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              data-testid="checkout-email"
              required
              value={ email }
              onChange={ this.handleForm }
            />
          </label>
          <label htmlFor="cpf">
            <input
              type="text"
              name="cpf"
              id="cpf"
              placeholder="cpf"
              data-testid="checkout-cpf"
              required
              value={ cpf }
              onChange={ this.handleForm }
            />
          </label>
          <label htmlFor="celular">
            <input
              type="text"
              name="celular"
              id="celular"
              placeholder="celular"
              data-testid="checkout-phone"
              required
              value={ celular }
              onChange={ this.handleForm }
            />
          </label>
          <label htmlFor="cep">
            <input
              type="text"
              name="cep"
              id="cep"
              placeholder="cep"
              data-testid="checkout-cep"
              required
              value={ cep }
              onChange={ this.handleForm }
            />
          </label>
          <label htmlFor="endereco">
            <input
              type="text"
              name="endereco"
              id="endereco"
              placeholder="endereco"
              data-testid="checkout-address"
              required
              value={ endereco }
              onChange={ this.handleForm }
            />
          </label>
          <label htmlFor="1">
            1
            <input
              type="radio"
              name="pagamento"
              id="pagamento"
              data-testid="ticket-payment"
              required
              onFocus={ this.handleForm }
              value={ 1 }
            />
          </label>
          <label htmlFor="1">
            2
            <input
              type="radio"
              name="pagamento"
              id="visa"
              data-testid="visa-payment"
              required
              onFocus={ this.handleForm }
              value={ 2 }
            />
          </label>
          <label htmlFor="1">
            3
            <input
              type="radio"
              name="pagamento"
              id="master"
              data-testid="master-payment"
              required
              onFocus={ this.handleForm }
              value={ 3 }
            />
          </label>
          <label htmlFor="1">
            4
            <input
              type="radio"
              name="pagamento"
              id="elo"
              data-testid="elo-payment"
              required
              onFocus={ this.handleForm }
              value={ 4 }
            />
          </label>
          <Link to="/">
            <button data-testid="checkout-btn" type="submit" onClick={ this.apagaItems }>
              Pagar
            </button>

          </Link>
          {validacao && <p data-testid="error-msg">Campos inválidos</p>}
        </form>
      </section>
    );
  }
}
