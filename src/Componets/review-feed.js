import React from "react";
import Post from "./post";

export default class ReviewFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [""],
      date: [""],
      username: [""],
    };
    this.handleChange = this.handleChange.bind(this); //sets state
    this.handleSubmit = this.handleSubmit.bind(this); //interactiong with the state
  }

  handleChange(event) {
    console.log("this is my submit review", event);
    event.preventDefault();
    console.log("text value:", event.target.value);
    let reviewComment = event.target.value;
    this.setState({ comments: reviewComment });
    console.log(this.state.comments);
  }

  handleSubmit(event) {
    console.log("this is my submit review", event);
    event.preventDefault();
    console.log("comments state:", this.state.comments);
    console.log("before push", this.props.comments);
    this.props.comments.push({
      content: this.state.comments,
    });

    console.log("after push", this.props.comments);
  }

  render() {
    //console.log("current state", this.state.comments);

    return (
      <div>
        <div className="container">
          <Post comments={this.props.comments} />
        </div>
        <h4>Leave your review!</h4>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text-area"
            name="review"
            value={this.state.comments.value}
            placeholder="Review"
          />
          <button type="submit">Submit Review</button>
        </form>
      </div>
    );
  }
}
