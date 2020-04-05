import React, { useEffect, Component } from "react";
import Filter from "./filter";
import Event_structure from "./event_structure";
import axios from "axios";
import "./event_structure.css";

class Events extends Component {
  state = {
    EventD: [],
    updated: false,
    organizerD: []
  };

  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    console.log("fetch");
    axios.get("http://localhost:5000/Event/").then(Response => {
      this.state.EventD = Response.data;
      console.log(this.state.EventD);
      this.setState({
        updated: true
      });
    });
  }
  render() {
    if (this.state.updated) {
      console.log(this.state.EventD);
    }
    const EventList = this.state.EventD.map(data => {
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
        <div className="container event-back">
          <div className="header">
            <h1 style={{ color: "black", fontSize: "30px" }}>Events</h1>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="eventList">{EventList}</div>
            </div>
            <div className="col-lg-4">
              <Filter />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
