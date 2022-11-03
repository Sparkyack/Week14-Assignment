import React from "react";

export default class StarCounter extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.name);
  }

  render() {
    return (
      <button className="btn btn-primary" onClick={this.handleClick}>
        {this.props.name}
        {this.props.count}
      </button>
    );
  }
}
