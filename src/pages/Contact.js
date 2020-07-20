import React, { Component } from "react";
import FAQ from "../components/FAQ";
import Terms from "../components/TermsConditions";
export default class Contact extends Component {
  render() {
    return (
      <div>
        <FAQ />
        <Terms />
      </div>
    );
  }
}
