import React from "react";
import blog01 from "../assets/blog01.png";
import blog02 from "../assets/blog02.png";
import blog04 from "../assets/blog04.png";
import blog03 from "../assets/blog03.png";
import blog05 from "../assets/blog05.png";
function Blog() {
  return (
    <div className="container blog ">
      <h1 className="py-5">
        A lot is happening,<br></br> We are blogging about it.
      </h1>
      <div className="row py-5 my-5">
        <div className="col-lg  card1">
          <div class="card ">
            <img class="card-img-top" src={blog01} alt="Card image cap" />
            <div class="card-body  firstCd ">
              <div className="mb-5">
                <p>Sep 26, 2021</p>
                <h5 class="card-text">
                  GPT-3 and Open AI is the future. Let us exlore how it is?
                </h5>
              </div>
              <a href="">Read Full Article</a>
            </div>
          </div>
        </div>
        <div className="col-lg card2  ">
          <div class="card 2 ">
            <img class="card-img-top" src={blog02} alt="Card image cap" />
            <div class="card-body">
              <div className="mb-5">
                <p>Sep 26, 2021</p>
                <h5 class="card-text">
                  GPT-3 and Open AI is the future. Let us exlore how it is?
                </h5>
              </div>
              <a href="">Read Full Article</a>
            </div>
          </div>
          <div class="card ">
            <img class="card-img-top" src={blog04} alt="Card image cap" />
            <div class="card-body">
              <div className="mb-5">
                <p>Sep 26, 2021</p>
                <h5 class="card-text">
                  GPT-3 and Open AI is the future. Let us exlore how it is?
                </h5>
              </div>
              <a href="">Read Full Article</a>
            </div>
          </div>
        </div>
        <div className="col-lg  card3 ">
          <div class="card  ">
            <img class="card-img-top" src={blog02} alt="Card image cap" />
            <div class="card-body">
              <div className="mb-5">
                <p>Sep 26, 2021</p>
                <h5 class="card-text">
                  GPT-3 and Open AI is the future. Let us exlore how it is?
                </h5>
              </div>
              <a href="">Read Full Article</a>
            </div>
          </div>
          <div class="card ">
            <img class="card-img-top" src={blog04} alt="Card image cap" />
            <div class="card-body">
              <div className="mb-5">
                <p>Sep 26, 2021</p>
                <h5 class="card-text">
                  GPT-3 and Open AI is the future. Let us exlore how it is?
                </h5>
              </div>
              <a href="">Read Full Article</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
