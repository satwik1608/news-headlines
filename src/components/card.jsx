import React, { Component } from "react";
import Like from "./common/like";
import { Link, NavLink } from "react-router-dom";
import "../cards.css";

class Card extends Component {
  render() {
    const { headline } = this.props;
    // return (
    //   <div class="card-group">
    //     <div class="card">
    //       <div class="card-body">
    //         <h5 class="card-title">{this.props.headline.title}</h5>
    //         <p class="card-text">{this.props.headline.body}</p>
    //         <p class="card-text">
    //           <small class="text-muted"> - {this.props.headline.author}</small>
    //         </p>
    //         <Like
    //           onLike={() => this.props.onLike(this.props.headline)}
    //           likes={this.props.headline.likes}
    //         />
    //         <button
    //           onClick={() => {
    //             this.props.onDelete(this.props.headline);
    //           }}
    //           className="btn btn-danger m-2"
    //         >
    //           Delete
    //         </button>
    //         {this.props.user &&
    //           this.props.headline.author === this.props.user.name && (
    //             <Link to={`/add-headline/${this.props.headline._id}`}>
    //               Edit
    //             </Link>
    //           )}
    //       </div>
    //     </div>
    //   </div>
    // );

    return (
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {headline.title}
          </h3>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Author</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {headline.author}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Details</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {headline.body}
              </dd>
            </div>
          </dl>
          <Like
            onLike={() => this.props.onLike(this.props.headline)}
            likes={this.props.headline.likes}
          />
          <button
            type="button"
            onClick={() => {
              this.props.onDelete(this.props.headline);
            }}
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-2 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Delete Post
          </button>

          {this.props.user &&
            this.props.headline.author === this.props.user.name && (
              <Link to={`/add-headline/${this.props.headline._id}`}>Edit</Link>
            )}
        </div>
      </div>
    );
  }
}

export default Card;
