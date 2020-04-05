import React, { Component } from "react";
import Event_structure from "./event_structure";
import Filter from "./filter";
import { white } from "color-name";
import "./Dashboard.css";
import Add_events from "./add_events";
import Events from "./event_list";
import Admin_Events from "./admin_event_list";
import { NavLink } from "react-router-dom";

export class DashBoard extends Component {
  state = {
    user: "RUSHABH",
    form_visible: false,
    event_visible: true,
    toggle_form: "Request Event"
  };
  constructor(props) {
    super(props);
    this.AddEvent = this.AddEvent.bind(this);
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
      <div>
        <div className="brand">
          <nav class="container  navbar navbar-expand-lg navbar-light navtemp">
            <NavLink to="/DashBoard" class="col-lg-4 navbar-brand navtemp">
              <h2> Campus Connect</h2>
            </NavLink>

            <div className="col-lg-3"></div>
            <div class=" collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <NavLink to="/PlacementUpdates" class="nav-item nav-link">
                  Placement Updates
                </NavLink>
                <NavLink to="/Add_events" class="nav-item nav-link">
                  Request Event
                </NavLink>
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
        <Events />
      </div>
    );
  }
}

export class Admin_dashboard extends Component {
  state = {
    user: "ADMIN"
  };
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
                <NavLink to="/UserForm" class="nav-item nav-link">
                  Add User
                </NavLink>
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
        <Admin_Events />
      </div>
    );
  }
}
