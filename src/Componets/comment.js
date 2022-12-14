import React from "react";

export default class Comment extends React.Component {
  render() {
    return (
      <div className="card w-75">
        <div className="card-header bg-success text-white">
          {this.props.username}
          {this.props.date}
        </div>
        <div className="card-body">{this.props.content}</div>
      </div>
    );
  }
}
