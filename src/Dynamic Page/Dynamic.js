import React, { Component } from "react";
import "./Dynamic.css";
import Search from "../Search Box/Search";
class Dynamic extends Component {
  constructor() {
    super();
    this.state = {
      hour: "",
      min: "",
      sec: ""
    };
  }
  showTime = () => {
    let today = new Date(),
      hourtime = today.getHours(),
      minutes = today.getMinutes(),
      second = today.getSeconds();
    this.setState({ hour: hourtime, min: minutes, sec: second });

    setTimeout(this.showTime, 1000);
  };

  componentDidMount() {
    this.showTime();
  }

  render() {
    const { hour, min, sec } = this.state;
    let today = new Date(),
      hourtime = today.getHours();

    return (
      <div className="dynamic">
        <time id="time">
          {hour}:{min}:{sec}
        </time>
        <Search />
        <h1>
          <span className="greeting">
            {hourtime < 12
              ? "Good Morning"
              : hourtime < 18
              ? "Good Day"
              : "Good Night"}{" "}
          </span>
          <span id="className" contentEditable="true">
            HassanSabir
          </span>
        </h1>
        <h2>What is your Focus on today?</h2>
        <h2 id="focus" contentEditable="true">
          Make React Projects
        </h2>
      </div>
    );
  }
}

export default Dynamic;
