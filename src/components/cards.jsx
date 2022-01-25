import React, { Component } from "react";
import { getHeadlines } from "../fakeHeadlineService";
import Card from "./card";

class Cards extends Component {
  state = {
    headlines: [],
  };

  async componentDidMount() {
    const headlines = getHeadlines();
    this.setState({ headlines });
  }

  handleLike = (headline) => {
    const headlines = [...this.state.headlines];
    const index = headlines.indexOf(headline);
    headlines[index].likes++;
    this.setState({ headlines });
  };
  render() {
    return (
      <div class="container">
        <div class="row">
          {this.state.headlines.map((hl) => (
            <div class="col">
              <Card headline={hl} onLike={this.handleLike} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Cards;
