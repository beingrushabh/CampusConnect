import React, { Component } from "react";
import Navbar from "./navbar";
import "./UserForm.css";
import userlogo from "./login/user.png";
import { RadioGroup, Radio } from "react-radio-group";
import { NavLink } from "react-router-dom";
import { render } from "@testing-library/react";
import "./UserForm.css";
import axios from "axios";

// var sectionStyle = {
//   backgroundImage: "url(" + background + ")"
// };

class UserForm extends Component {
  state = {
    UserName: "default",
    Password: "default",
    Email_ID: "default@default.com",
    FirstName: "default",
    LastName: "default",
    Gender: "Male",
    Age: 4,
    Address: "default",
    Clg_ID: "201701001",
    User: "Admin"
  };

  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();

    const finalObject = {
      UserName: this.state.UserName,
      Password: this.state.password,
      Email_ID: this.state.Email_ID,
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      Gender: this.state.Gender,
      Age: this.state.Age,
      Address: this.state.Address,
      Clg_ID: this.state.Clg_ID
    };

    axios.post("http://localhost:5000/User/register", finalObject).then(res => {
      console.log(res.message);
      this.props.closePopup();
    });
  }

  render() {
    return (
      <React.Fragment>
        {/* <img src={background} className="main" /> */}
        <div className="main popup">
          <title>Add User</title>
          <div className="brand">
            <nav class="container  navbar navbar-expand-lg navbar-light navtemp">
              <NavLink to="/DashBoard" class="col-lg-4 navbar-brand navtemp">
                <h2> Campus Connect</h2>
              </NavLink>

              <div className="col-lg-4"></div>
              <div class=" collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <NavLink to="/Admin_dashboard" class="nav-item nav-link">
                    Dashboard
                  </NavLink>
                  <NavLink to="/UserForm" class="nav-item nav-link">
                    Add User
                  </NavLink>
                  <a class="nav-item nav-link" href="#">
                    {this.state.User}
                  </a>
                  <NavLink to="/" class="nav-item nav-link " tabindex="-1">
                    Log Out
                  </NavLink>
                </div>
              </div>
            </nav>
          </div>
          <div className="loginbox">
            {/* <img src={userlogo} className="user" /> */}
            <h1>Add User</h1>

            <form onSubmit={this.submit}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    {/* <p>User Name :</p> */}
                    <input
                      type="text"
                      name="username"
                      placeholder="Enter Username"
                      required
                      onChange={event => {
                        this.setState({
                          UserName: event.target.value
                        });
                      }}
                      className="form-group"
                    />
                  </div>
                  <div className="col-lg-6">
                    {/* <p>Password :</p> */}
                    <input
                      pattern=".{8,}"
                      type="password"
                      placeholder="Enter Password"
                      required
                      onChange={event => {
                        this.setState({
                          Password: event.target.value
                        });
                      }}
                      className="form-group"
                    />
                  </div>
                </div>
                {/* <p>Email ID :</p>
              <br /> */}
                <input
                  type="email"
                  pattern="{/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}"
                  name="emailid"
                  className="form-control"
                  placeholder="Enter EmailID"
                  className="form-group"
                  required
                  onChange={event => {
                    this.setState({
                      Email_ID: event.target.value
                    });
                  }}
                />
                {/* Guys, Input pattern for first name and last name is /^[A-Za-z]+$/ and it can only be verified when form is submitted, DURING BACKEND*/}
                <div className="row">
                  <div className="col-lg-6">
                    {/* <p>First Name :</p> */}
                    <input
                      type="text"
                      name="fname"
                      placeholder="Enter First Name"
                      required
                      className="form-group"
                      onChange={event => {
                        this.setState({
                          FirstName: event.target.value
                        });
                      }}
                    />
                  </div>
                  <div className="col-lg-6">
                    {/* <p>Last Name :</p> */}
                    <input
                      type="text"
                      name="lname"
                      placeholder="Enter Last Name"
                      required
                      onChange={event => {
                        this.setState({
                          LastName: event.target.value
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    {/* <p>Gender :</p> */}
                    <br></br>
                    <RadioGroup
                      name="Gender"
                      style={{ display: "flex", width: "100%" }}
                      onChange={event => {
                        this.setState({
                          Gender: event
                        });
                      }}
                    >
                      <Radio value="male" />
                      Male
                      <Radio value="female" />
                      Female
                    </RadioGroup>
                  </div>
                  <div className="col-lg-6">
                    {/* <p id="age">Age :</p> */}
                    <input
                      type="text"
                      name="age"
                      placeholder="Enter your Age for eg: 20 years"
                      required
                      onChange={event => {
                        this.setState({
                          Age: event.target.value
                        });
                      }}
                    />
                  </div>
                </div>
                {/* <p>Address :</p> */}

                <textarea
                  type="textarea"
                  rows="2"
                  className="form-control"
                  cols="50"
                  name="address"
                  placeholder="Enter Address"
                  required
                  onChange={event => {
                    this.setState({
                      Address: event.target.value
                    });
                  }}
                />
                <br />
                <div className="row">
                  <div className="col-lg-6">
                    {/* <p>College ID :</p> */}
                    <input
                      type="text"
                      name="cid"
                      placeholder="Enter college ID"
                      required
                      onChange={event => {
                        this.setState({
                          Clg_ID: event.target.value
                        });
                      }}
                    />
                  </div>
                  <div className="col-lg-6">
                    {/* <p>Link for LinkedIn :</p> */}
                    <input
                      type="text"
                      name="links"
                      placeholder="Enter LinkedIn link"
                      required
                    />
                  </div>
                </div>
                <button class="form-group button button1">Add User</button>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default UserForm;
