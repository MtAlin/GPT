import React from "react";
import dd from "../assets/ai.png";
import people from "../assets/people.png";
function HeaderSection() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg ">
          <h1 className="pt-5">
            Let’s Build Something amazing with GPT-3 OpenAI
          </h1>
          <p className="py-3">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <div class="input-group mb-3">
            <input
              type="text"
              className="form-control "
              placeholder="Your Email Address"
              aria-label="Your Email Address"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <button class="btn-search" type="button">
                Get Started
              </button>
            </div>
          </div>
          <div className="py-3 d-flex align-items-center">
            <img src={people}></img>
            <p className="request-people">
              1,600 people requested access a visit in last 24 hours
            </p>
          </div>
        </div>
        <div className="col-lg ">
          <img src={dd} className="w-100"></img>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
