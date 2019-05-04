import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import BannerTornadoes from "../components/tornadoes/BannerTornadoes";
import MapGraph from "../components/tornadoes/Map";
import Legend from "../components/tornadoes/Legend";
import TornadoesForm from "../components/tornadoes/Tornadoesform";
import Chart from "../components/tornadoes/Chart";
import Results from "../components/tornadoes/Results";

class Tornadoes extends Component {
  state = {
    stateName: "",
    tornadoesPrediction: null,
    allMonthsIsChecked: false,
    prediction: null
  };

  constructor(props) {
    super(props);
    this.state = {
      stateName: null
    };
    this.onGetTornadoesPrediction = this.onGetTornadoesPrediction.bind(this);
    this.allMonths = this.allMonths.bind(this);
  }

  stateSelection = stateName => {
    this.setState({ stateName: stateName });
    this.setState({ prediction:null });
  };
  componentDidMount() {}

  componentDidUpdate() {}

  onGetTornadoesPrediction(tornadoesPrediction) {
    if (this.state.allMonthsIsChecked) {
      console.log("All months are checked");
      console.log(tornadoesPrediction);
      this.setState({ allMonthsData: tornadoesPrediction });
      this.setState({ tornadoesPrediction: null });
      this.setState({ prediction:null });
    } else {
      console.log("one month is selected");
      this.setState({ allMonthsData: null });
      this.setState({ tornadoesPrediction: tornadoesPrediction });
      this.setState({
        prediction:
          tornadoesPrediction.losses === "more than $5,000,000"
            ? "over"
            : "under"
      });
    }
  }

  allMonths(isChecked) {
    this.setState({ allMonthsIsChecked: isChecked });
  }

  render() {
    return (
      <Layout>
        <Helmet>
          <title>Tornadoes Loss</title>
          <meta name="description" content="Tornadoes Loss" />
        </Helmet>
        <BannerTornadoes />
        <div id="main">
          <section id="one">
            <div className="inner">
              <header className="major">
                <h2>AI for Tornadoes</h2>
              </header>
              <p>
              <h3>Instructions</h3>
                Select a state by clicking it <br /> Then fill the form and
                press the button submit.
              </p>

              <div className="grid-wrapper">
              <div className="col-12">
                  <section>
                    <MapGraph
                      onSelectedState={this.stateSelection}
                      prediction={this.state.prediction}
                    />
                    <Legend />
                  </section>
                  <section>
                    <Chart
                      data={this.state.allMonthsData}
                      state={this.state.stateName}
                      allMonthsIsChecked={this.state.allMonthsIsChecked}
                    />
                    <Results
                      data={this.state.tornadoesPrediction}
                      allMonthsIsChecked={this.state.allMonthsIsChecked}
                    />
                  </section>
                </div>

                <div className="col-6">
                  <TornadoesForm
                    selectedState={this.state.stateName}
                    onGetData={this.onGetTornadoesPrediction}
                    allMonthsChecked={this.allMonths}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default Tornadoes;
