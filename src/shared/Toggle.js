import React, { Component } from "react";

class Toggler extends Component {
  state = {
    isOpen: false,
  };
  toggleOpen = () => {
    this.setState((state, props) => {
      return {
        isOpen: !state.isOpen,
      };
    });
  };
  render() {
    const classes = this.state.isOpen
      ? "accordion_wrapper open"
      : "accordion_wrapper";
    return (
      <div className={classes}>
        <button onClick={this.toggleOpen} className="accordion_header">
          {this.props.headerText}
        </button>
        {this.props.render(this.state.isOpen)}
      </div>
    );
  }
}

export default Toggler;
