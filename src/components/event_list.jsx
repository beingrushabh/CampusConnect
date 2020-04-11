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

class Events extends Component {
  state = {
    EventD: [],
    updated: false,
    organizerD: [],
    ComD: [],
    filterText: "",
    filteradded: false,
    url: "http://localhost:5000/Event/",
    urlcom: "http://localhost:5000/ClubCom/",
  };

  constructor(props) {
    super(props);
    this.addFilter = this.addFilter.bind(this);
  }

  componentDidMount() {
    console.log("fetch");
    axios.get(this.state.url).then((Response) => {
      this.state.EventD = Response.data;
      console.log("EDM", this.state.EventD);
      this.setState({
        updated: true,
      });
    });

    axios.get(this.state.urlCom).then((Response) => {
      this.state.ComD = Response.data;
      console.log("comD", this.state.ComD);
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.url !== this.state.url) {
      axios.get(this.state.url).then((Response) => {
        this.state.EventD = Response.data;
        console.log("EventD", this.state.EventD);
      });
    }
  }

  addFilter(event) {
    if (this.state.filteradded) {
      this.setState({
        filteradded: false,

        url: `http://localhost:5000/Event/filterBy/${event}`,
      });
    }
  }

  render() {
    if (this.state.updated) {
      console.log("EventD", this.state.EventD);
    }
    const EventList = this.state.EventD.map((data) => {
      return (
        <Event_structure
          key={data._id}
          id={data._id}
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
          <div class="row">
            <div className="col-lg-8 col-md-8 col-sm-6">
              <h1 style={{ color: "black", fontSize: "30px" }}>Events</h1>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div class="filter">
                <div class="dropdown">
                  <button
                    class="btn btn-light dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Filter
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a class="dropdown-item" href="/">
                      Cultural
                    </a>
                    <a
                      class="dropdown-item "
                      // onClick={this.addFilter("Annual Festival Commitee")}
                    >
                      Annual Festival Commitee
                    </a>
                    <a class="dropdown-item ">DTG</a>
                    <a class="dropdown-item ">Cubic</a>
                    <a
                      class="dropdown-item "
                      onClick={() => {
                        this.setState({
                          filteradded: true,
                        });
                        return this.addFilter("Debate Club");
                      }}
                    >
                      Debate Club
                    </a>
                    <a class="dropdown-item ">DSC</a>
                    <a class="dropdown-item ">Sport</a>
                    <a
                      class="dropdown-item "
                      onClick={() => {
                        this.setState({
                          filteradded: true,
                        });
                        return this.addFilter("Khelaiya Club");
                      }}
                    >
                      Khelaiya Club
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

export default Events;
