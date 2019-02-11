import React, { Component } from "react";

class Button extends Component {
  render() {
    const { children, type } = this.props;
    let styles = {
      background: "#fff"
    };
    if (type === "primary") {
      styles.background = "blue";
    }
    return <button style={styles}> {children}</button>;
  }
}

export default Button;
