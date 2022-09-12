import React, { Component } from 'react';
import { string } from 'prop-types';

export default class Avaliacao extends Component {
  state = {
    email: '',
    rating: 0,
    review: '',
    validacao: false,
    lista: [],
  };

  componentDidMount() {
    const { id } = this.props;
    const getLocal = JSON.parse(localStorage.getItem(id)) || [];
    this.setState({ lista: getLocal });
  }

  handleForm = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSend = () => {
    const { id } = this.props;
    const { email, rating, review } = this.state;
    if (email === '' || rating === 0) {
      this.setState({ validacao: true });
      return;
    }
    const getLocal = JSON.parse(localStorage.getItem(id)) || [];
    const local = {
      email,
      review,
      rating,
    };
    localStorage.setItem(id, JSON.stringify([...getLocal, local]));
    this.setState({
      email: '', review: '', lista: [...getLocal, local], validacao: false });
  };

  render() {
    const { email, review, validacao, lista } = this.state;
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

        {lista.map((reviewLocal, index) => (
          <div key={ index }>
            <p data-testid="review-card-email">{reviewLocal.email}</p>
            <p data-testid="review-card-rating">{reviewLocal.rating}</p>
            <p data-testid="review-card-evaluation">{reviewLocal.review}</p>
          </div>
        ))}
      </div>
    );
  }
}

Avaliacao.propTypes = {
  id: string,
}.isRequired;
