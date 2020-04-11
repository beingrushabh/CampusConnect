import React, { Component } from "react";
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
    organizer: this.props.location.state.organizer,
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
        <div>
          <div className="event-template">
            <span>
              <h2 className="event-heading">{this.state.EventD.Name}</h2>
              <span className="organize">
                By <span className="organizer">{this.state.organizer}</span>
              </span>
            </span>

            <div className="date">
              <span className="textclr"> Date : {this.state.EventD.Date}</span>
              &nbsp;&nbsp;&nbsp;
              <span className="textclr"> Time : {this.state.EventD.Time}</span>
            </div>
            <div className="info">{this.state.EventD.Description}</div>

            {this.state.EventD.Approved && (
              <button className="RSVP">I'm interested</button>
            )}

            {!this.state.EventD.Approved && (
              <button
                href="/Admin_dashboard"
                onClick={() => {
                  this.setState({
                    request: true,
                  });

                  // this.requestApprove(this.state.id);
                }}
                className="approval"
              >
                Approve
              </button>
            )}

            <div class="comments">
              <span class="heading"> Comments</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Event_more;
