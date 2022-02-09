import React, { Component } from "react";
import Like from "./common/like";
import { Link, NavLink } from "react-router-dom";
import "../cards.css";
class Card extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{this.props.headline.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {this.props.headline.author}
              </h6>
              <p className="card-text">{this.props.headline.body}</p>
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

              <Link to={`/add-headline/${this.props.headline._id}`}>Edit</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
