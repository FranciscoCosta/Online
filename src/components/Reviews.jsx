import React, { Component } from 'react';

export default class Reviews extends Component {
  state = {
    reviewList: [],
  };

  componentDidMount() {
    this.getReview();
  }

  getReview = () => {
    const { id } = this.props;
    const items = JSON.parse(localStorage.getItem(id)) || [];
    this.setState({ reviewList: items });
  };

  render() {
    const { reviewList } = this.state;
    return (
      <div>
        {reviewList.map((review, index) => (
          <div key={ index }>
            <p data-testid="review-card-email">{review.email}</p>
            <p data-testid="review-card-rating">{review.rating}</p>
            <p data-testid="review-card-evaluation">{review.review}</p>
          </div>
        ))}

      </div>
    );
  }
}
