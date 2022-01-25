import React, { Component } from "react";
import Like from "./common/like";
import "../cards.css";
class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.props.headline.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {this.props.headline.id}
          </h6>
          <p className="card-text">{this.props.headline.body}</p>
          <Like
            onLike={() => this.props.onLike(this.props.headline)}
            likes={this.props.headline.likes}
          />
        </div>
      </div>
    );
  }
}

export default Card;
