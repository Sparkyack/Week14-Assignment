import React from "react";
import StarCounter from "./starcounter";

export default class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counts: {},
      highestCount: 0,
      highestCountName: "",
    };
    this.countClicks = this.countClicks.bind(this);
  }

  countClicks(name) {
    this.setState((state) => {
      state.counts[name] ? (state.counts[name] += 1) : (state.counts[name] = 1);

      if (state.counts[name] > state.highestCount) {
        state.highestCount = state.counts[name];
        state.highestCountName = name;
      }
      return state;
    });
  }
  render() {
    return (
      <div className="container">
        <div>
          <h3>Ratings</h3>
        </div>
        <div className="row">
          {this.highestCountName}
          <div className="col-sm">
            <h5>{this.state.counts.Poor}</h5>
            <StarCounter name="Poor" onClick={this.countClicks} />
          </div>
          <div className="col-sm">
            <h5>{this.state.counts.Bad}</h5>
            <StarCounter name="Bad" onClick={this.countClicks} />
          </div>
          <div className="col-sm">
            <h5>{this.state.counts.Ok}</h5>
            <StarCounter name="Ok" onClick={this.countClicks} />
          </div>
          <div className="col-sm">
            <h5>{this.state.counts.Good}</h5>
            <StarCounter name="Good" onClick={this.countClicks} />
          </div>
          <div className="col-sm">
            <h5>{this.state.counts.Excellent}</h5>
            <StarCounter name="Excellent" onClick={this.countClicks} />
          </div>
        </div>
      </div>
    );
  }
}
