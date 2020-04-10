import React, { useEffect, Component } from "react";
import Event_structure from "./event_structure";
import axios from "axios";
import "./event_structure.css";
import "./event_list.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import $ from "jquery";
import Popper from "popper.js";
class Organizer_Events extends Component {
  state = {
    EventD: [],
    updated: false,
    organizerD: [],
    ComD: [],
    url: `http://localhost:5000/Event`,
    urlcom: "http://localhost:5000/ClubCom/",
    userdetails: this.props.userdetails,
  };

  constructor(props) {
    super(props);
    // this.addFilter = this.addFilter.bind(this);
  }

  componentDidMount() {
    console.log("fetch");
    axios.get(this.state.url).then((Response) => {
      this.state.EventD = Response.data;
      console.log(this.state.EventD);
      this.setState({
        updated: true,
      });
    });

    axios.get("http:/localhost:5000/User/logged_in").then((Response) => {
      console.log(Response);
    });

    axios.get(this.state.urlCom).then((Response) => {
      this.state.ComD = Response.data;
      console.log(this.state.ComD);
    });
  }

  render() {
    if (this.state.updated) {
      console.log(this.state.EventD);
    }
    const EventList = this.state.EventD.map((data) => {
      return (
        <Event_structure
          key={data._id}
          name={data.Name}
          organizer={data.Organizer}
          date={data.Date}
          time={data.Time}
          venue={data.Venue}
          description={data.Description}
          status={true}
          duration={data.Duration}
        />
      );
    });
    return (
      <div>
        <div className=" container header">
          <h1 style={{ color: "black", fontSize: "30px" }}>Events</h1>
        </div>
        <div className="row event-back">
          <div className="scrollEvent">
            <div className="eventList">{EventList}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Organizer_Events;
