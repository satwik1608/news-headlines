import React, { Component } from "react";
import Like from "./common/like";
import { Link, NavLink } from "react-router-dom";
import "../cards.css";
class Card extends Component {
  render() {
    return (
      <div class="card-group">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{this.props.headline.title}</h5>
            <p class="card-text">{this.props.headline.body}</p>
            <p class="card-text">
              <small class="text-muted"> - {this.props.headline.author}</small>
            </p>
            <Like
              onLike={() => this.props.onLike(this.props.headline)}
              likes={this.props.headline.likes}
            />
            <button
              onClick={() => {
                this.props.onDelete(this.props.headline);
              }}
              className="btn btn-danger m-2"
            >
              Delete
            </button>
            {this.props.user &&
              this.props.headline.author === this.props.user.name && (
                <Link to={`/add-headline/${this.props.headline._id}`}>
                  Edit
                </Link>
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
