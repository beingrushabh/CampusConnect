import React, { Component } from "react";
import Login from "./components/login/login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { DashBoard, Admin_dashboard } from "./components/DashBoard";
import Add_events from "./components/add_events";
import UserForm from "./components/UserForm";
import Placement_updates from "./components/placement_updates";
import Placement_officer from "./components/placement_officer";
class LoginPage extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/DashBoard" component={DashBoard} />
          <Route path="/Add_events" component={Add_events} />
          <Route path="/UserForm" component={UserForm} />
          <Route path="/Admin_dashboard" component={Admin_dashboard} />
          <Route path="/PlacementUpdates" component={Placement_updates} />
          <Route path="/PlacementOfficer" component={Placement_officer} />
          <Route component={nopagefound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default LoginPage;
class nopagefound extends Component {
  state = {};
  render() {
    return <div>no page found</div>;
  }
}

export { nopagefound };
