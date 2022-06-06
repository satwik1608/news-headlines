import React, { Component } from "react";
import { getHeadlines, deleteHeadline } from "../services/headlineService";
import Card from "./card";
import { toast } from "react-toastify";
import { saveLike } from "./../services/headlineService";

class Cards extends Component {
  state = {
    headlines: [],
  };

  async componentDidMount() {
    const { data } = await getHeadlines();

    this.setState({ headlines: data });
  }

  handleLike = async (headline) => {
    const headlines = [...this.state.headlines];
    const index = headlines.indexOf(headline);
    headlines[index].likes++;
    this.setState({ headlines });
    await saveLike(headline);
  };
  handleDelete = async (headline) => {
    const originalHeadlines = [...this.state.headlines];

    const headlines = this.state.headlines.filter(
      (hl) => hl._id !== headline._id
    );
    this.setState({ headlines });
    try {
      await deleteHeadline(headline._id);
    } catch (ex) {
      if (ex.response && ex.response === 404)
        toast.error("This movie has already been deleted");

      this.setState({ headlines: originalHeadlines });
    }
  };
  render() {
    // return (
    //   <div className="container-fluid">
    //     <h1 class="font-medium leading-tight text-4xl mt-0 mb-2 text-black-600">
    //       You currently have {this.state.headlines.length} headlines
    //     </h1>
    //     <div className="row">
    //       {this.state.headlines.map((hl) => (
    //         <div className="col sm-6 m-5" key={hl.id}>
    //           <Card
    //             headline={hl}
    //             onLike={this.handleLike}
    //             onDelete={this.handleDelete}
    //             user={this.props.user}
    //           />
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // );
    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">
            You currently have {this.state.headlines.length} headlines
          </h2>

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {this.state.headlines.map((hl) => (
              <a key={hl.id} href={hl.href} className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <Card
                    headline={hl}
                    onLike={this.handleLike}
                    onDelete={this.handleDelete}
                    user={this.props.user}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
