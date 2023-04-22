import React from "react";

function NavBar() {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light pt-5">
        <a class="navbar-brand" href="#">
          GPT-3
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item ">
              <a class="nav-link" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                What is GPT?
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link " href="#">
                Open AI
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                Case Studies
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                Library
              </a>
            </li>
          </ul>
          <button class="btn-signIn " type="submit">
            Sign in
          </button>
          <button class="btn-search p-2 " type="submit">
            Sign up
          </button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
