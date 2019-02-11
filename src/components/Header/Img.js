import React, { Component } from "react";
import imgUrl2Base64 from "../../utils/imgUrl2Base64";
import { debug } from "util";

class ImgBase64 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base64: props.src
    };
    this.imgNode = null;
  }
  componentDidMount() {
    // this.imgNode.onload = () => {
    //   console.log("onload");
    //   this.getBase64Image(this.imgNode);
    // };
  }
  getBase64Image = img => {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    canvas.style = "position: absolute;left:0px;top:0px ";

    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    const container = document.getElementById("image-canvas");
    container.appendChild(canvas);
    return canvas;
    // return canvas.toDataURL("image/png");
  };

  render() {
    return (
      <div id="image-canvas">
        <img
          //   crossOrigin="anonymous" // https://stackoverflow.com/questions/22710627/tainted-canvases-may-not-be-exported
          src={this.state.base64}
          alt="请粘贴照片"
          ref={node => (this.imgNode = node)}
          width="130"
          height="130"
        />
      </div>
    );
  }
}

export default ImgBase64;
