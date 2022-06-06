import React, { Component } from "react";

class UserProfile extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
          <p className="card-text">
            Hi am a rajasthani and I love punjabi music, Hope that you love my
            news
          </p>
        </div>
      </div>
    );
  }
}

export default UserProfile;
