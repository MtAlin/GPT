import React from "react";
import google from "../assets/google.png";
import slack from "../assets/slack.png";
import atlassian from "../assets/atlassian.png";
import shopify from "../assets/shopify.png";
import dropbox from "../assets/dropbox.png";

function CompaniesLogo() {
  return (
    <div className="container py-5">
      <div className="row cp-lg">
        <div className="col py-3">
          <img src={google}></img>
        </div>
        <div className="col py-3">
          <img src={slack}></img>
        </div>
        <div className="col py-3">
          <img src={atlassian}></img>
        </div>
        <div className="col py-3">
          <img src={dropbox}></img>
        </div>
        <div className="col py-3">
          <img src={shopify}></img>
        </div>
      </div>
    </div>
  );
}

export default CompaniesLogo;
