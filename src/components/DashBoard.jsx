import React, { Component } from "react";
import Event_structure from "./event_structure";
import Filter from "./filter";
import { white } from "color-name";
import "./Dashboard.css";
import Add_events from "./add_events";
import Events from "./event_list";
import "bootstrap/dist/css/bootstrap.css";
import Admin_Events from "./admin_event_list";
import { NavLink } from "react-router-dom";
import loginPop from "./popupLogin";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import "./login/login.css";
import News_list from "./news_list";
import AddNews from "./add_news";
import UserForm from "./UserForm";
import PopLogin from "./popupLogin";

export class DashBoard extends Component {
  state = {
    user: "RUSHABH",
    form_visible: false,
    event_visible: true,
    toggle_form: "Request Event",
    login: false,
    login_btn: "Login",
    topple_login: false
  };
  constructor(props) {
    super(props);
    this.AddEvent = this.AddEvent.bind(this);

    this.toggleLogin = this.toggleLogin.bind(this);
  }

  toggleLogin() {
    this.setState({
      topple_login: !this.state.toggle_login
    });
  }

  AddEvent() {
    this.setState({ form_visible: !this.state.form_visible });
    this.setState({ event_visible: !this.state.event_visible });
    if (this.state.toggle_form == "Request Event") {
      this.setState({ toggle_form: "Event List" });
    } else {
      this.setState({ toggle_form: "Request Event" });
    }
  }

  render() {
    return (
      <div class="dashboard">
        <div className="brand">
          <nav class="container  navbar navbar-expand-lg navbar-light navtemp">
            <NavLink to="/DashBoard" class="col-lg-4 navbar-brand navtemp">
              <h2> Campus Connect</h2>
            </NavLink>

            <div className="col-lg-5"></div>
            <div class=" collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                {/* <NavLink to="/News" class="nav-item nav-link">
                  News
                </NavLink> */}
                {/* <NavLink to="/UserForm" class="nav-item nav-link">
                  Add User
                </NavLink> */}
                <a
                  onClick={this.toggleLogin}
                  class="nav-item nav-link "
                  tabindex="-1"
                >
                  {this.state.login_btn}
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div className="container row">
          <div className="col-lg-8 col-md-8 col-sm-12">
            <Events />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <News_list />
          </div>
        </div>
        {this.state.topple_login ? (
          <PopLogin closepopup={this.toggleLogin.bind(this)} />
        ) : null}
      </div>
    );
  }
}

export class Admin_dashboard extends Component {
  state = {
    user: "ADMIN",
    news: false,
    adduser: false
  };

  toggleNews() {
    this.setState({
      news: !this.state.news
    });
  }

  toggleUser() {
    this.setState({
      adduser: !this.state.adduser
    });
  }
  constructor(props) {
    super(props);
  }
  AddUser() {}
  render() {
    return (
      <div>
        <div className="brand">
          <nav class="container  navbar navbar-expand-lg navbar-light navtemp">
            <NavLink to="/DashBoard" class="col-lg-4 navbar-brand navtemp">
              <h2> Campus Connect</h2>
            </NavLink>

            <div className="col-lg-5"></div>
            <div class=" collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a
                  class="nav-item nav-link"
                  onClick={this.toggleNews.bind(this)}
                >
                  Add News
                </a>
                <a
                  class="nav-item nav-link"
                  onClick={this.toggleUser.bind(this)}
                >
                  Add User
                </a>
                <a class="nav-item nav-link" href="#">
                  {this.state.user}
                </a>
                <NavLink to="/" class="nav-item nav-link " tabindex="-1">
                  Log Out
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
        <div className="container row">
          <div className="col-lg-8 col-md-8 col-sm-12">
            <Admin_Events />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <News_list showRemove={true} />
          </div>
        </div>

        {this.state.news ? (
          <AddNews closePopup={this.toggleNews.bind(this)} />
        ) : null}

        {this.state.adduser ? (
          <UserForm closePopup={this.toggleUser.bind(this)} />
        ) : null}
      </div>
    );
  }
}

export class Organizer_dashboard extends Component {
  state = {
    user: "",
    news: false,
    adduser: false
  };

  toggleNews() {
    this.setState({
      news: !this.state.news
    });
  }

  toggleUser() {
    this.setState({
      adduser: !this.state.adduser
    });
  }
  constructor(props) {
    super(props);
  }
  AddUser() {}
  render() {
    return (
      <div>
        <div className="brand">
          <nav class="container  navbar navbar-expand-lg navbar-light navtemp">
            <NavLink to="/DashBoard" class="col-lg-4 navbar-brand navtemp">
              <h2> Campus Connect</h2>
            </NavLink>

            <div className="col-lg-5"></div>
            <div class=" collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a
                  class="nav-item nav-link"
                  onClick={this.toggleNews.bind(this)}
                >
                  Add News
                </a>
                <a
                  class="nav-item nav-link"
                  onClick={this.toggleUser.bind(this)}
                >
                  Add User
                </a>
                <a class="nav-item nav-link" href="#">
                  {this.state.user}
                </a>
                <NavLink to="/" class="nav-item nav-link " tabindex="-1">
                  Log Out
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
        <div className="container row">
          <div className="col-lg-8 col-md-8 col-sm-12">
            <Admin_Events />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <News_list showRemove={true} />
          </div>
        </div>

        {this.state.news ? (
          <AddNews closePopup={this.toggleNews.bind(this)} />
        ) : null}

        {this.state.adduser ? (
          <UserForm closePopup={this.toggleUser.bind(this)} />
        ) : null}
      </div>
    );
  }
}
