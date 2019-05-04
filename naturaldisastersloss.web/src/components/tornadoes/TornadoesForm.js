/* eslint-disable react/prop-types */
import React, { Component } from "react";
import config from "../../../content/meta/config";

class TornadoesForm extends Component {
  DEFAULT_QUERY = "api/Tornadoes";
  Months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "Octomber", "November", "December"];

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      allMonths: false,
      Month: "January"
    };
    this.onChangeAllMonths = this.onChangeAllMonths.bind(this);
    this.onChangeMonth = this.onChangeMonth.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
    this.onChangeFScale = this.onChangeFScale.bind(this);
    this.onChangeLength = this.onChangeLength.bind(this);
    this.onChangeWidth = this.onChangeWidth.bind(this);
  }

  predicatBy(prop) {
    //TODO spelling mistakes in months
   const months = ["January", "Febuary", "March", "April", "May", "June","July", "August", "September", "Octomber", "November", "December"];
    return function (a, b) {
        if (months.indexOf(a[prop]) > months.indexOf(b[prop])) {
            return 1;
        } else if (months.indexOf(a[prop]) < months.indexOf(b[prop])) {
            return -1;
        }
        return 0;
    };

}

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.allMonths){
      let responseList = [];
      for (let i = 0; i < this.Months.length; i++) {
        fetch(
          config.tornadoesAPI +
            "api/Tornadoes" +
            "?Month=" +
            this.Months[i] +
            "&State=" +
            this.props.selectedState +
            "&FScale=" +
            this.state.FScale +
            "&Lengthmiles=" +
            this.state.Length +
            "&Widthyards=" +
            this.state.Width
        )
          .then(response => response.json())
          .then(data => {
            responseList.push(data)
            if (responseList.length === 12) {
              const r = responseList.sort(this.predicatBy("month"));
            this.props.onGetData(r);
            }            
          });
      }
    }
    else{
    fetch(
      config.tornadoesAPI +
        "api/Tornadoes" +
        "?Month=" +
        this.state.Month +
        "&State=" +
        this.props.selectedState +
        "&FScale=" +
        this.state.FScale +
        "&Lengthmiles=" +
        this.state.Length +
        "&Widthyards=" +
        this.state.Width
    )
      .then(response => response.json())
      .then(data => {
        this.props.onGetData(data);
      });
    }
  }

  onChangeMonth(event) {
    this.setState({ Month: event.target.value });
  }

  onChangeState(event) {
    this.setState({ USState: event.target.value });
  }

  onChangeFScale(event) {
    this.setState({ FScale: event.target.value });
  }

  onChangeLength(event) {
    this.setState({ Length: event.target.value });
  }

  onChangeWidth(event) {
    this.setState({ Width: event.target.value });
  }

  onChangeAllMonths(event) {
    this.setState({ allMonths: event.target.checked });
    this.props.allMonthsChecked(event.target.checked);
    console.log(event.target.checked, event.target.name);
  }

  render() {
    return (
      <form method="post" action="#" onSubmit={this.handleSubmit}>
        <div className="field">
          <label htmlFor="Month">Month</label>
          <select
            name="Month"
            className="dropdown"
            onChange={this.onChangeMonth}
          >
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
          <div className="mb-5">
            <input
              type="checkbox"
              id="all-months"
              name="demo-human"
              defaultChecked={false}
              onChange={this.onChangeAllMonths}
            />
            <label htmlFor="all-months">Or select all months</label>
          </div>
        </div>
        <div className="field half">
          <label htmlFor="State">State</label>
          <input
            type="text"
            name="State"
            id="State"
            value={this.props.selectedState || ""}
            onChange={this.onChangeState}
            required
          />
        </div>
        <div className="field half">
          <label htmlFor="FScale">FScale</label>
          <select name="FScale" onChange={this.onChangeFScale}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
        </div>
        <div className="field half">
          <label htmlFor="Lengthmiles">Length in miles</label>
          <input
            type="text"
            required
            name="Lengthmiles"
            id="Lengthmiles"
            placeholder="9.5"
            onChange={this.onChangeLength}
          />
        </div>
        <div className="field half">
          <label htmlFor="Widthyards">Width in yards</label>
          <input
            type="text"
            required
            name="Widthyards"
            id="Widthyards"
            placeholder="150"
            onChange={this.onChangeWidth}
          />
          <span>All the fields must be completed.</span>
        </div>
        <ul className="actions">
          <li>
            <input type="submit" value="Submit" className="special" />
          </li>
          <li>
            <input type="reset" value="Clear" />
          </li>
        </ul>
      </form>
    );
  }
}

export default TornadoesForm;
