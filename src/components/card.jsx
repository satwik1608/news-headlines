import React, { Component } from "react";
import Like from "./common/like";
import { Link, NavLink } from "react-router-dom";
import "../card.css";

class Card extends Component {
  render() {
    const { headline } = this.props;

    return (
      <div className="bg-white shadow overflow-hidden sm:rounded-lg border border-black-400">
        <div className="px-4 py-5 sm:px-6">
          <div className="head-hor">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {headline.title}
            </h3>
            <Like
              onLike={() => this.props.onLike(this.props.headline)}
              likes={this.props.headline.likes}
            />
          </div>
        </div>
        <div className="border-t border-black-400">
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

          <button
            type="button"
            onClick={() => {
              this.props.onDelete(this.props.headline);
            }}
            className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 ml-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-800"
          >
            Delete
          </button>

          {this.props.user &&
            this.props.headline.author === this.props.user.firstname && (
              <Link to={`/add-headline/${this.props.headline._id}`}>
                <button class="inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200">
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                  </svg>
                </button>
              </Link>
            )}
        </div>
      </div>
    );
  }
}

export default Card;
