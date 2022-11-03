import React from "react";
import Comment from "./comment";

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      content: props.content,
    };
  }

  render() {
    setTimeout(
      () =>
        this.setState(
          (x) => ({ count: x.count + 1 }),
          console.log(this.state.count)
        ),
      2000
    );

    let comments;

    if (this.state.comments) {
      comments = this.state.comments.map((comment, index) => (
        <Comment key={index} {...comment} />
      ));
    }

    return (
      <div className="card w-75">
        <div className="card-header bg-success tetx-white">Reviews</div>
        <div className="card-body">{this.state.content}</div>
        <div className="card-footer">{comments}</div>
      </div>
    );
  }
}
