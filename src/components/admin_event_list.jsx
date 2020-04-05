import React, { Component } from "react";
import Filter from "./filter";
import Event_structure from "./event_structure";
import axios from "axios";

class Admin_Events extends Component {
  state = {
    EventD: [],
    updated: false,
    id: 1234
  };

  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    console.log("fetch");
    axios.get("http://localhost:5000/Event/Pending").then(Response => {
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
          id={data._id}
          name={data.Name}
          organizer={data.Organizer}
          date={data.Date_time}
          venue={data.Venue}
          description={data.Description}
          status={false}
          duration={data.Duration}
        />
      );
    });
    return (
      <div>
        <div className="container">
          <div className="header">
            <h1>Events</h1>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <Filter />
            </div>
            <div className="col-lg-8">{EventList}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin_Events;
