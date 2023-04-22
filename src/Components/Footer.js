import React from "react";

function Footer() {
  return (
    <div className="container footer">
      <div className="row">
        <div className="col-lg text-center  ">
          <h1 className="my-5">
            Do you want to step in to the <br></br>future before others
          </h1>
          <button>Request Early Access</button>
        </div>
      </div>
      <div className="row my-5 py-5">
        <div className="col-lg-4 footer-align mb-5">
          <h2>GPT-3</h2>
          <p>
            Crechterwoord K12 182 DK Alknjkcb,<br></br> All Rights Reserved
          </p>
        </div>
        <div className="col">
          <h6>Links</h6>
          <ul>
            <li>Overons</li>
            <li>Social Media</li>
            <li>Counters</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="col">
          <h6>Company</h6>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="col">
          <h6>Get in touch</h6>
          <ul>
            <li>Crechterwoord K12 182 DK Alknjkcb</li>
            <li>085-132567</li>
            <li>info@payme.net</li>
          </ul>
        </div>
      </div>
      <p className="text-center py-3"> © 2021 GPT-3. All rights reserved.</p>
    </div>
  );
}

export default Footer;
