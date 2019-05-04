import React, { Component } from "react";
import { AlbersUsa } from "@vx/geo";
import topology from "../../static/data/us.json";
import PropTypes from "prop-types";
import { ParentSize } from '@vx/responsive';

class MapGraph extends Component {
  state = {
    stateName: "",
    selected: false,
    selectedState: null,
    prediction: null
  };

  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.prediction !== prevProps.prediction && !this.state.prediction) {
      this.setState({ prediction: null });
    }
  }

  handleStateSelection(state) {
    this.props.onSelectedState(state.properties.PostalCode);
    this.setState({ selected: true });
    this.setState({ selectedState: state.properties.PostalCode });

  }

  render() {
    const { selected, selectedState } = this.state;
    const prediction = this.props.prediction;
    const bg = "#ffffff";
    const unselectedColor = "#d5ded9";
    const selectedColor = "orange";
    const overColor = "#542437";
    const underColor = "#1a5624";

    const world = topology;

    // Define the graph dimensions and margins
   /*  const width = 1200;
    const height = 500; */
    const margin = { top: 20, bottom: 20, left: 20, right: 20 };

   
    return (
      <div className="col-12 map">
      <ParentSize>
        {({ width, height }) => {
          const innerWidth = width - margin.left - margin.right;
          const innerHeight = 500 - margin.top - margin.bottom;
          
          const centerX = width / 2;
          const centerY = height / 2;
          const scale =  width /1.2;
          return(
        <svg width={innerWidth} height={innerHeight}>
          <rect x={0} y={0} width={width} height={height} fill={bg} />
          <AlbersUsa
            data={world.features}
            scale={scale}
            translate={[centerX, centerY]}
          >
            {data => {
              return (
                <g>
                  {data.features.map((feature, i) => {
                    const { feature: f } = feature;

                    //const bounds = getBounds(data.path(f));
                    const centerX = feature.centroid[0];
                    const centerY = feature.centroid[1];

                    const p = (
                      <path
                        key={`map-feature-${i}`}
                        d={data.path(f)}
                        fill={
                          selected &&
                          f.properties.PostalCode === selectedState &&
                          prediction === "over"
                            ? overColor
                            : selected &&
                              f.properties.PostalCode === selectedState &&
                              prediction === "under"
                            ? underColor
                            : selected &&
                              f.properties.PostalCode === selectedState &&
                              (typeof prediction === "undefined" ||
                                prediction === null)
                            ? selectedColor
                            : unselectedColor
                        }
                        stroke={bg}
                        strokeWidth={0.5}
                        onClick={() => {
                          this.handleStateSelection(f);
                        }}
                      />
                    );
                    const t = (
                      <text
                        key={`text-feature-${i}`}
                        x={centerX}
                        y={centerY}
                        fontSize={"6pt"}
                        textAnchor={"middle"}
                        style={{ pointerEvents: "none" }}
                      >
                        {f.properties.PostalCode}
                      </text>
                    );
                    return [p, t];
                  })}
                </g>
              );
            }}
          </AlbersUsa>
        </svg>);
       }}
       </ParentSize>
       </div>
    );
  }
}

MapGraph.propTypes = {
  onSelectedState: PropTypes.func,
  prediction: PropTypes.string
};

export default MapGraph;