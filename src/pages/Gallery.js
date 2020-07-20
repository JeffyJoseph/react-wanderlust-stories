import React, { Component } from "react";
import ImageGallery from "../components/ImageGallery";

export default class Gallery extends Component {
  render() {
    return (
      <>
        <h3 className="main_headings"> Gallery</h3>
        <ImageGallery />
      </>
    );
  }
}
