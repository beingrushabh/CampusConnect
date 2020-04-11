import React, { Component } from "react";
import "./event_structure.css";
import axios from "axios";
import { browserHistory, Router, Route, Redirect, history } from "react-router";
import { NavLink } from "react-router-dom";

// function approve(id, request) {
//   if (request) {
//     const url = `http://localhost:5000/Event/approve/${id}`;
//     // const url_final = url + this.props.id.toString();
//     axios.post(url).then(Response => console.log(Response));
//     return true;
//   }
// }

class Event_structure extends Component {
  state = {
    id: this.props.id,
    request: false,
    temp: false,
    organizer: this.props.organizer,
    organizerD: [],
    organizer1: "default",
  };
  // componentDidMount() {

  // }

  constructor(props) {
    super(props);
    // this.requestApprove = this.requestApprove.bind(this);
    this.updateOrganizer = this.updateOrganizer.bind(this);
  }

  // requestApprove(id) {
  //   this.setState({
  //     temp: approve(id, this.state.request)
  //   });
  // }

  componentDidUpdate(prevProp, PrevState) {
    if (PrevState.request != this.state.request) {
      const url = `http://localhost:5000/Event/approve/${this.state.id}`;
      axios.post(url).then((Response) => this.props.refresh());
      return true;
    }
  }

  updateOrganizer(event) {
    this.setState({
      organizer1: event,
    });
    console.log("organizer name", this.state.organizer1);
  }

  componentDidMount() {
    console.log("id", this.props.id);
    console.log("namee", this.props.name);
    axios
      .get(`http://localhost:5000/ClubCom/${this.state.organizer}`)
      .then((Response) => {
        this.state.organizerD = Response.data;
        this.updateOrganizer(this.state.organizerD.Name);
      });
  }

  render() {
    if (this.state.temp) {
      return <Redirect to="/Admin_dashboard" />;
    } else {
      return (
        <div>
          <div className="event-template">
            <span>
              <h2 className="event-heading">{this.props.name}</h2>
              <span className="organize">
                By{" "}
                <span className="organizer">{this.state.organizerD.Name}</span>
              </span>
            </span>

            <div className="date">
              <span className="textclr"> Date : {this.props.date}</span>
              &nbsp;&nbsp;&nbsp;
              <span className="textclr"> Time : {this.props.time}</span>
            </div>
            <div className="info">{this.props.description}</div>
            <NavLink
              to={{
                pathname: "/Event_more",
                state: {
                  id: this.state.id,
                  organizer: this.state.organizer1,
                },
              }}
            >
              <button className="more-info">More Info >></button>
            </NavLink>
            {this.props.status && (
              <button className="RSVP">I'm interested</button>
            )}

            {!this.props.status && (
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
          </div>
        </div>
      );
    }
  }
}

export default Event_structure;
