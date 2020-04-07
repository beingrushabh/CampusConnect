import React, { Component } from "react";
import Filter from "./filter";
import Event_structure from "./event_structure";
import axios from "axios";

class Admin_Events extends Component {
  state = {
    EventD: [],
    updated: false,
    id: 1234,
    refresh: false
  };

  Refresh() {
    this.setState({
      refresh: !this.state.refresh
    });
    console.log(this.state.refresh);
  }

  constructor(props) {
    super(props);
    this.Refresh = this.Refresh.bind(this);
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState.refresh != this.state.refresh) {
      axios.get("http://localhost:5000/Event/Pending").then(Response => {
        this.state.EventD = Response.data;
        console.log(this.state.EventD);
        this.setState({
          updated: true
        });
      });
    }
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
          date={data.Date}
          time={data.Time}
          venue={data.Venue}
          description={data.Description}
          status={false}
          duration={data.Duration}
          refresh={this.Refresh}
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

export default Admin_Events;
