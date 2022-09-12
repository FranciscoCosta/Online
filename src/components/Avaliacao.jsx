import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Reviews from './Reviews';

export default class Avaliacao extends Component {
  state = {
    email: '',
    rating: '',
    review: '',
    validacao: false,
  };

  handleForm = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSend = () => {
    const { id } = this.props;
    const { email, rating, review } = this.state;
    if (email === '' || review === '' || rating === 0) {
      this.setState({ validacao: true });
      return;
    }
    let getLocal = JSON.parse(localStorage.getItem(id));
    if (!getLocal) getLocal = [];
    const local = {
      email,
      review,
      rating,
    };
    localStorage.setItem(id, JSON.stringify([...getLocal, local]));
    this.setState({ email: '', review: '' });
  };

  render() {
    const { email, review, validacao } = this.state;
    const { id } = this.props;
    return (
      <div>
        <form>
          <div>
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                data-testid="product-detail-email"
                required
                value={ email }
                onChange={ this.handleForm }
              />
            </label>
            <label htmlFor="1">
              1
              <input
                type="radio"
                name="rating"
                id="1"
                data-testid="1-rating"
                required
                onFocus={ this.handleForm }
                value={ 1 }
              />
            </label>
            <label htmlFor="1">
              2
              <input
                type="radio"
                name="rating"
                id="2"
                data-testid="2-rating"
                required
                onFocus={ this.handleForm }
                value={ 2 }
              />
            </label>
            <label htmlFor="1">
              3
              <input
                type="radio"
                name="rating"
                id="3"
                data-testid="3-rating"
                required
                onFocus={ this.handleForm }
                value={ 3 }
              />
            </label>
            <label htmlFor="1">
              4
              <input
                type="radio"
                name="rating"
                id="4"
                data-testid="4-rating"
                required
                onFocus={ this.handleForm }
                value={ 4 }
              />
            </label>
            <label htmlFor="1">
              5
              <input
                type="radio"
                name="rating"
                id="5"
                data-testid="5-rating"
                required
                onFocus={ this.handleForm }
                value={ 5 }
              />
            </label>
          </div>
          <div>
            <textarea
              name="review"
              id="product-detail"
              cols="30"
              rows="10"
              data-testid="product-detail-evaluation"
              required
              value={ review }
              placeholder="Deixe sua avaliação"
              onChange={ this.handleForm }
            />
          </div>
          <button
            type="submit"
            data-testid="submit-review-btn"
            onClick={ this.handleSend }
          >
            Enviar
          </button>
          {validacao && <p data-testid="error-msg">Campos inválidos</p>}
        </form>
        <Reviews id={ id } />
      </div>
    );
  }
}

Avaliacao.propType = {
  id: PropTypes.string,
}.isRequired;
