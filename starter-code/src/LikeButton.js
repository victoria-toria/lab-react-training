import React, { Component } from "react";

class LikeButton extends Component {
  state = {
    count: 0,
    backgroundColor: "",
    text: "Like",
  };

  colorMapper = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  clickHandler = () => {
    const newCount = this.state.count + 1;
    let dynamicText = "";

    if (this.state.count === 0) {
      dynamicText = "Like";
    } else {
      dynamicText = "Likes";
    }
    this.setState({
      count: newCount,
      backgroundColor: this.colorMapper(),
      text: dynamicText,
    });
  };

  render() {
    return (
      <button
        className="btn btn-primary s-buttons"
        onClick={this.clickHandler}
        style={{
          backgroundColor: this.state.backgroundColor,
        }}
      >
        {this.state.count} {this.state.text}
      </button>
    );
  }
}

export default LikeButton;
