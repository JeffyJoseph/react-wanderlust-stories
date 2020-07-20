import React from "react";

const withToggle = (Component) => {
  return class SomeComponent extends React.Component {
    state = {
      isOpen: false,
    };
    toggle = () => {
      this.setState((prevState) => {
        return {
          isOpen: !prevState.isOpen,
        };
      });
    };

    render() {
      const newPropsToBeAdded = {
        isOpen: this.state.isOpen,
        toggle: this.toggle,
      };
      return <Component {...this.props} {...newPropsToBeAdded} />;
    }
  };
};

export default withToggle;
