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
    return (
      <div className="container-fluid">
        <h1 class="font-medium leading-tight text-4xl mt-0 mb-2 text-black-600">
          You currently have {this.state.headlines.length} headlines
        </h1>
        <div className="row">
          {this.state.headlines.map((hl) => (
            <div className="col sm-6 m-5" key={hl.id}>
              <Card
                headline={hl}
                onLike={this.handleLike}
                onDelete={this.handleDelete}
                user={this.props.user}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Cards;
