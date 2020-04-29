import React, { Component } from "react";

function LoginButton() {
  return (
    <div>
      <a class="btn btn-outline-light btn-sm my-2 my-sm-0 mr-2" href="#">
        Log in
      </a>
      <a class="btn btn-primary btn-sm my-2 my-sm-0" href="#">
        Sign Up
      </a>
    </div>
  );
}

function LogoutButton() {
  return (
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="userMenu"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Username
        </a>
        <div
          class="dropdown-menu dropdown-menu-right"
          aria-labelledby="userMenu"
        >
          <a class="dropdown-item" href="">
            Change password
          </a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="{% url 'logout' %}">
            Log out
          </a>
        </div>
      </li>
    </ul>
  );
}

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton />;
    } else {
      button = <LoginButton />;
    }

    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="">
          <strong>TEST</strong>
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
            <li class="nav-item">
              <a class="nav-link" href="{% url 'introduction' %}">
                Introduction <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="{% url 'product' %}">
                Product <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Product
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Sensor
                </a>
                <a class="dropdown-item" href="#">
                  Edge Solution
                </a>
                <a class="dropdown-item" href="#">
                  Monitoring Dashboard
                </a>
                <a class="dropdown-item" href="">
                  AI Solution
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="{% url 'blog' %}">
                Blog
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="{% url 'data' %}">
                Data
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="{% url 'contact' %}">
                Contact
              </a>
            </li>
          </ul>

          {button}
        </div>
      </nav>
    );
  }
}

export default Navbar;
