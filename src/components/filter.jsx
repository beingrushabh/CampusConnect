import React, { Component } from "react";
import "./event_structure.css";

class Filter extends Component {
  render() {
    return (
      <div class="filter">
        <h3 class="heading">Filters</h3>
        <div class="by-committee">
          <ul class="temp">
            <li class="filter-cmt">Cultural</li>
            <li class="filter-cmt">Anual</li>
            <li class="filter-cmt">DTG</li>
            <li class="filter-cmt">Cubic</li>
            <li class="filter-cmt">Debate</li>
            <li class="filter-cmt">DSC</li>
            <li class="filter-cmt">Sport</li>
          </ul>
          <span class="date-text">Date : </span>
          <input class="by-date" type="date" />
        </div>
      </div>
    );
  }
}

export default Filter;
