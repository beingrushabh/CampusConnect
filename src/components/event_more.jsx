import React, { Component } from "react";
import Event_structure from "./event_structure";
import axios from "axios";
import "./event_structure.css";
import "./event_list.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { NavLink } from "react-router-dom";

class Event_more extends Component {
  state = {
    userdetails: [],
    id: this.props.location.state.id,
    EventD: [],
  };

  logout() {
    this.setState({
      logoutstate: true,
    });
  }

  componentDidUpdate(prevprops, prevstate) {
    if (prevstate.logoutstate != this.state.logoutstate) {
      axios
        .get("https://localhost:5000/User/logout")
        .then((res) => console.log(res));
    }
  }

  componentDidMount() {
    console.log("id ", this.props.location.state.id);
    axios
      .get(`http://localhost:5000/Event/${this.props.location.state.id}`)
      .then((Response) => {
        this.state.EventD = Response.data;
        console.log(this.state.EventD);
        this.setState({
          updated: true,
        });
      });
  }
  render() {
    if (this.state.updated) {
      console.log(this.state.EventD);
    }
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
                <a class="nav-item nav-link" href="/PlacementUpdates">
                  Placement Updates
                </a>

                <a class="nav-item nav-link" href="#">
                  {this.state.userdetails.username}
                </a>
                {/* <NavLink to="/" class="nav-item nav-link " tabindex="-1"> */}
                <a class="nav-item nav-link" onClick={this.logout.bind(this)}>
                  {" "}
                  Log Out
                </a>
                {/* </NavLink> */}
              </div>
            </div>
          </nav>
        </div>

        <Event_structure
          key={this.state.EventD._id}
          name={this.state.EventD.Name}
          organizer={this.props.location.state.organizer}
          date={this.state.EventD.Date}
          time={this.state.EventD.Time}
          venue={this.state.EventD.Venue}
          description={this.state.EventD.Description}
          status={true}
          duration={this.state.EventD.Duration}
        />
      </div>
    );
  }
}

export default Event_more;
