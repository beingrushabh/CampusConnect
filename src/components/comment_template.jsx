import React, { Component } from "react";
import axios from "axios";
import "./comment_template.css"


class CommentTemplate extends Component {
  state = {
    EventName: this.props.Event,
    userID: this.props.User,
    description: this.props.Description,
    reported: this.props.Reported,
    userdetails: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:5000/User/${this.state.userID}`).then((res) =>
      this.setState({
        userdetails: res.data,
      })
    );
  }
  render() {
    return (
      <div>
  

<div class="container">
            <div class="row">
                <div class="col-md-8">
                   <div class="comments-list">
                       <div class="media">
                            <div class="media-body">
                                
                              <h4 class="media-heading user_name">{this.state.userdetails.username}</h4>
                              {this.state.description}
                              
                              <p><small><a href="">Like</a> - <a href="">Report</a></small></p>
                            </div>
                          </div>
                   </div>
                    
                    
                    
                </div>
            </div>
        </div>




      </div>
    );
  }
}

export default CommentTemplate;
